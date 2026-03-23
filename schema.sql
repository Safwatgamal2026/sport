-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- USERS: stores booking-related user info
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  age INT NOT NULL CHECK (age >= 0 AND age <= 120),
  emergency_contact_name TEXT NOT NULL,
  emergency_contact_phone TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- COURSES: seats_total and seats_available tracked for booking checks
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

CREATE INDEX idx_courses_created_at ON courses (created_at DESC);

-- BOOKINGS: records each reservation
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE RESTRICT,
  status TEXT NOT NULL CHECK (status IN ('confirmed', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_bookings_course_id ON bookings (course_id);
CREATE INDEX idx_bookings_user_id ON bookings (user_id);
CREATE INDEX idx_bookings_created_at ON bookings (created_at DESC);

-- OPTIONAL: prevent the exact same user record from booking the same course twice
-- (Only makes sense if you reuse users instead of creating a new user row per booking.)
-- ALTER TABLE bookings ADD CONSTRAINT uq_booking_user_course UNIQUE (user_id, course_id);

-- OPTIONAL: keep updated_at fresh automatically (Postgres trigger)
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_courses_updated_at
BEFORE UPDATE ON courses
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();