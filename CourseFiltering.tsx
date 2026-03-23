import React, { useMemo, useState } from "react";

type AgeGroup = "children" | "youth" | "adults";
type SkillLevel = "beginner" | "intermediate" | "professional";
type TimeOfDay = "morning" | "evening";

type Course = {
  id: string;
  title: string;
  sportType: string;
  location: string; // e.g., "Online", "Austin, TX"
  ageGroup: AgeGroup;
  skillLevel: SkillLevel;
  time: TimeOfDay;
  price: number;
  trainer: string;
};

type Filters = {
  sportType: string | "all";
  location: string; // input (substring match)
  ageGroup: AgeGroup | "all";
  skillLevel: SkillLevel | "all";
  time: TimeOfDay | "all";
};

const SAMPLE_COURSES: Course[] = [
  {
    id: "c1",
    title: "Explosive Speed for Football",
    sportType: "Football",
    location: "Austin, TX",
    ageGroup: "youth",
    skillLevel: "intermediate",
    time: "evening",
    price: 49,
    trainer: "Coach Malik Johnson",
  },
  {
    id: "c2",
    title: "Swim Technique: Faster Freestyle",
    sportType: "Swimming",
    location: "Miami, FL",
    ageGroup: "adults",
    skillLevel: "beginner",
    time: "morning",
    price: 39,
    trainer: "Sofia Ramirez",
  },
  {
    id: "c3",
    title: "Yoga Mobility for Athletes",
    sportType: "Yoga",
    location: "Online",
    ageGroup: "adults",
    skillLevel: "beginner",
    time: "evening",
    price: 29,
    trainer: "Aisha Patel",
  },
  {
    id: "c4",
    title: "Football Fundamentals (Kids)",
    sportType: "Football",
    location: "New York, NY",
    ageGroup: "children",
    skillLevel: "beginner",
    time: "morning",
    price: 35,
    trainer: "Mina Carter",
  },
  {
    id: "c5",
    title: "Pro Swim Endurance",
    sportType: "Swimming",
    location: "Los Angeles, CA",
    ageGroup: "adults",
    skillLevel: "professional",
    time: "evening",
    price: 79,
    trainer: "Diego Alvarez",
  },
  {
    id: "c6",
    title: "Youth Strength & Conditioning",
    sportType: "Training",
    location: "Austin, TX",
    ageGroup: "youth",
    skillLevel: "intermediate",
    time: "morning",
    price: 55,
    trainer: "Tori Simmons",
  },
];

function normalize(s: string) {
  return s.trim().toLowerCase();
}

/**
 * Clean, reusable filter predicate builder.
 * - Keeps filtering logic testable and separate from the UI.
 */
function buildCoursePredicate(filters: Filters) {
  const sport = filters.sportType;
  const loc = normalize(filters.location);
  const age = filters.ageGroup;
  const skill = filters.skillLevel;
  const time = filters.time;

  return (c: Course) => {
    if (sport !== "all" && c.sportType !== sport) return false;

    // location is input-based substring match (case-insensitive)
    if (loc && !normalize(c.location).includes(loc)) return false;

    if (age !== "all" && c.ageGroup !== age) return false;
    if (skill !== "all" && c.skillLevel !== skill) return false;
    if (time !== "all" && c.time !== time) return false;

    return true;
  };
}

function getSportOptions(courses: Course[]) {
  const unique = Array.from(new Set(courses.map((c) => c.sportType))).sort();
  return ["all", ...unique] as const;
}

const initialFilters: Filters = {
  sportType: "all",
  location: "",
  ageGroup: "all",
  skillLevel: "all",
  time: "all",
};

function FilterSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly { label: string; value: T }[];
  onChange: (next: T) => void;
}) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: "#475569" }}>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        style={{
          height: 40,
          borderRadius: 10,
          border: "1px solid #e2e8f0",
          padding: "0 10px",
          fontWeight: 600,
          outline: "none",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function FilterInput({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (next: string) => void;
}) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: "#475569" }}>{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{
          height: 40,
          borderRadius: 10,
          border: "1px solid #e2e8f0",
          padding: "0 10px",
          fontWeight: 600,
          outline: "none",
        }}
      />
    </label>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 14,
        padding: 14,
        display: "grid",
        gap: 8,
        background: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div style={{ fontWeight: 900 }}>{course.title}</div>
        <div style={{ fontWeight: 900 }}>${course.price}</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, color: "#334155", fontWeight: 700, fontSize: 13 }}>
        <span>{course.sportType}</span>
        <span>•</span>
        <span>{course.location}</span>
        <span>•</span>
        <span>{course.trainer}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Pill label={`Age: ${course.ageGroup}`} />
        <Pill label={`Skill: ${course.skillLevel}`} />
        <Pill label={`Time: ${course.time}`} />
      </div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: 12,
        fontWeight: 800,
        padding: "6px 10px",
        borderRadius: 999,
        background: "#f1f5f9",
        color: "#0f172a",
      }}
    >
      {label}
    </span>
  );
}

export default function CourseFiltering() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const sportOptions = useMemo(() => getSportOptions(SAMPLE_COURSES), []);

  const filteredCourses = useMemo(() => {
    const predicate = buildCoursePredicate(filters);
    return SAMPLE_COURSES.filter(predicate);
  }, [filters]);

  const activeCount = useMemo(() => {
    let count = 0;
    if (filters.sportType !== "all") count++;
    if (normalize(filters.location)) count++;
    if (filters.ageGroup !== "all") count++;
    if (filters.skillLevel !== "all") count++;
    if (filters.time !== "all") count++;
    return count;
  }, [filters]);

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 16, display: "grid", gap: 14 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 12 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 900, color: "#0f172a" }}>Advanced Filters</div>
          <h2 style={{ margin: "6px 0 0", fontSize: 24, fontWeight: 1000, color: "#0f172a" }}>
            Find the right sports course
          </h2>
          <p style={{ margin: "6px 0 0", color: "#475569", fontWeight: 600 }}>
            Results update instantly as you change filters.
          </p>
        </div>

        <button
          onClick={() => setFilters(initialFilters)}
          style={{
            height: 40,
            borderRadius: 12,
            border: "1px solid #e2e8f0",
            padding: "0 12px",
            fontWeight: 900,
            background: "white",
            cursor: "pointer",
          }}
        >
          Reset ({activeCount})
        </button>
      </header>

      {/* Filters */}
      <section
        style={{
          border: "1px solid #e2e8f0",
          borderRadius: 16,
          padding: 14,
          background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
          display: "grid",
          gap: 12,
        }}
      >
        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          <FilterSelect
            label="Sport type"
            value={filters.sportType}
            options={sportOptions.map((s) => ({
              value: s,
              label: s === "all" ? "All sports" : s,
            }))}
            onChange={(sportType) => setFilters((prev) => ({ ...prev, sportType }))}
          />

          <FilterInput
            label="Location"
            value={filters.location}
            placeholder='e.g., "Austin", "Online"'
            onChange={(location) => setFilters((prev) => ({ ...prev, location }))}
          />

          <FilterSelect
            label="Age group"
            value={filters.ageGroup}
            options={[
              { label: "All", value: "all" as const },
              { label: "Children", value: "children" as const },
              { label: "Youth", value: "youth" as const },
              { label: "Adults", value: "adults" as const },
            ]}
            onChange={(ageGroup) => setFilters((prev) => ({ ...prev, ageGroup }))}
          />

          <FilterSelect
            label="Skill level"
            value={filters.skillLevel}
            options={[
              { label: "All", value: "all" as const },
              { label: "Beginner", value: "beginner" as const },
              { label: "Intermediate", value: "intermediate" as const },
              { label: "Professional", value: "professional" as const },
            ]}
            onChange={(skillLevel) => setFilters((prev) => ({ ...prev, skillLevel }))}
          />

          <FilterSelect
            label="Time"
            value={filters.time}
            options={[
              { label: "All", value: "all" as const },
              { label: "Morning", value: "morning" as const },
              { label: "Evening", value: "evening" as const },
            ]}
            onChange={(time) => setFilters((prev) => ({ ...prev, time }))}
          />
        </div>
      </section>

      {/* Results */}
      <section style={{ display: "grid", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div style={{ fontWeight: 900, color: "#0f172a" }}>
            Showing {filteredCourses.length} of {SAMPLE_COURSES.length}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b" }}>
            Tip: location matches substrings (e.g. “aus” → Austin)
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div
            style={{
              border: "1px dashed #cbd5e1",
              borderRadius: 16,
              padding: 18,
              color: "#475569",
              fontWeight: 700,
              background: "#f8fafc",
            }}
          >
            No courses match your filters. Try clearing one or two filters.
          </div>
        ) : (
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {filteredCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}