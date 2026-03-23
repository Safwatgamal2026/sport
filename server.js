const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const { newDb, DataType } = require("pg-mem");
const { randomUUID } = require("node:crypto");

const app = express();
const corsOrigin = process.env.CORS_ORIGIN || "*";
app.use(cors({ origin: corsOrigin }));
app.use(express.json());

let pool;

async function createPool() {
  if (process.env.DATABASE_URL) {
    const externalPool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    await externalPool.query("SELECT 1");
    console.log("Connected to external PostgreSQL database");
    return externalPool;
  }

  const db = newDb();
  db.public.registerFunction({
    name: "gen_random_uuid",
    returns: DataType.uuid,
    implementation: randomUUID,
    impure: true,
  });
  const { Pool: InMemoryPool } = db.adapters.createPg();
  const inMemoryPool = new InMemoryPool();

  await inMemoryPool.query(`
    CREATE TABLE users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      age INT NOT NULL CHECK (age >= 0 AND age <= 120),
      emergency_contact_name TEXT NOT NULL,
      emergency_contact_phone TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE courses (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      price_cents INT NOT NULL DEFAULT 0 CHECK (price_cents >= 0),
      currency CHAR(3) NOT NULL DEFAULT 'USD',
      seats_total INT NOT NULL CHECK (seats_total >= 0),
      seats_available INT NOT NULL CHECK (seats_available >= 0 AND seats_available <= seats_total),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE TABLE bookings (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
      course_id UUID NOT NULL REFERENCES courses(id) ON DELETE RESTRICT,
      status TEXT NOT NULL CHECK (status IN ('confirmed', 'cancelled')),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await inMemoryPool.query(`
    INSERT INTO courses (title, description, price_cents, currency, seats_total, seats_available)
    VALUES
      ('Explosive Speed for Football', 'Speed and agility drills for football players.', 4900, 'USD', 20, 20),
      ('Swim Technique: Faster Freestyle', 'Technique-first swimming sessions for better endurance.', 3900, 'USD', 16, 16),
      ('Yoga Mobility for Athletes', 'Mobility and recovery for all sports levels.', 2900, 'USD', 25, 25);
  `);

  console.log(
    "DATABASE_URL not found. Using in-memory PostgreSQL fallback with sample data.",
  );
  return inMemoryPool;
}

/**
 * GET /api/courses
 * Returns basic course info with remaining seats.
 */
app.get("/api/courses", async (req, res) => {
  const { rows } = await pool.query(
    `SELECT id, title, description, price_cents, currency, seats_total, seats_available
     FROM courses
     ORDER BY created_at DESC`,
  );
  res.json({ data: rows });
});

/**
 * GET /api/courses/:courseId
 */
app.get("/api/courses/:courseId", async (req, res) => {
  const { courseId } = req.params;
  const { rows } = await pool.query(
    `SELECT id, title, description, price_cents, currency, seats_total, seats_available
     FROM courses
     WHERE id = $1`,
    [courseId],
  );

  if (rows.length === 0)
    return res.status(404).json({ error: "COURSE_NOT_FOUND" });
  res.json({ data: rows[0] });
});

/**
 * POST /api/bookings
 * Body:
 * {
 *   "courseId": "uuid",
 *   "user": { "name": "...", "age": 20, "emergencyContactName": "...", "emergencyContactPhone": "..." }
 * }
 *
 * Behavior:
 * - checks seats before booking
 * - prevents booking when full
 * - reduces seats after successful booking
 * - stores user info + booking in a single transaction
 */
app.post("/api/bookings", async (req, res) => {
  const { courseId, user } = req.body ?? {};
  if (!courseId) return res.status(400).json({ error: "courseId is required" });
  if (!user?.name || typeof user.age !== "number") {
    return res
      .status(400)
      .json({ error: "user.name and user.age are required" });
  }
  if (!user?.emergencyContactName || !user?.emergencyContactPhone) {
    return res.status(400).json({
      error:
        "user.emergencyContactName and user.emergencyContactPhone are required",
    });
  }

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // 1) Lock the course row to prevent race conditions
    const courseRes = await client.query(
      `SELECT id, seats_available
       FROM courses
       WHERE id = $1
       FOR UPDATE`,
      [courseId],
    );

    if (courseRes.rows.length === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ error: "COURSE_NOT_FOUND" });
    }

    const course = courseRes.rows[0];
    if (course.seats_available <= 0) {
      await client.query("ROLLBACK");
      return res.status(409).json({ error: "COURSE_FULL" });
    }

    // 2) Create user record (simple approach: always create a new user)
    const userRes = await client.query(
      `INSERT INTO users (name, age, emergency_contact_name, emergency_contact_phone)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, age, emergency_contact_name, emergency_contact_phone`,
      [
        user.name,
        user.age,
        user.emergencyContactName,
        user.emergencyContactPhone,
      ],
    );
    const createdUser = userRes.rows[0];

    // 3) Create booking
    const bookingRes = await client.query(
      `INSERT INTO bookings (user_id, course_id, status)
       VALUES ($1, $2, 'confirmed')
       RETURNING id, user_id, course_id, status, created_at`,
      [createdUser.id, courseId],
    );
    const createdBooking = bookingRes.rows[0];

    // 4) Decrement seats
    await client.query(
      `UPDATE courses
       SET seats_available = seats_available - 1,
           updated_at = NOW()
       WHERE id = $1`,
      [courseId],
    );

    await client.query("COMMIT");
    return res.status(201).json({
      data: {
        booking: createdBooking,
        user: createdUser,
      },
    });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error(err);
    return res.status(500).json({ error: "INTERNAL_ERROR" });
  } finally {
    client.release();
  }
});

/**
 * GET /api/bookings/:bookingId (optional)
 */
app.get("/api/bookings/:bookingId", async (req, res) => {
  const { bookingId } = req.params;
  const { rows } = await pool.query(
    `SELECT
        b.id as booking_id, b.status, b.created_at,
        c.id as course_id, c.title as course_title,
        u.id as user_id, u.name as user_name, u.age as user_age,
        u.emergency_contact_name, u.emergency_contact_phone
     FROM bookings b
     JOIN courses c ON c.id = b.course_id
     JOIN users u ON u.id = b.user_id
     WHERE b.id = $1`,
    [bookingId],
  );

  if (rows.length === 0)
    return res.status(404).json({ error: "BOOKING_NOT_FOUND" });
  res.json({ data: rows[0] });
});

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({ status: "ok" });
  } catch {
    res.status(500).json({ status: "error" });
  }
});

async function startServer() {
  try {
    pool = await createPool();
    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`API running on :${port}`));
  } catch (err) {
    console.error("Failed to initialize database:", err);
    process.exit(1);
  }
}

startServer();
