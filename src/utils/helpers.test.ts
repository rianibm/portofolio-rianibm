import { describe, it, expect, vi } from "vitest";
import { calcYearsExp, getSkillClass, getRandomClass } from "./helpers";

// ─── calcYearsExp ────────────────────────────────────────────────────────────

describe("calcYearsExp", () => {
  const START = new Date("2023-03-05");

  it("returns correct years when anniversary has passed this year", () => {
    const now = new Date("2026-07-04");
    expect(calcYearsExp(START, now)).toBe(3);
  });

  it("returns correct years on the exact anniversary day", () => {
    const now = new Date("2026-03-05");
    expect(calcYearsExp(START, now)).toBe(3);
  });

  it("subtracts 1 when anniversary has not yet passed this year", () => {
    const now = new Date("2026-02-10");
    expect(calcYearsExp(START, now)).toBe(2);
  });

  it("returns 0 in the same year before anniversary", () => {
    const now = new Date("2023-01-01");
    expect(calcYearsExp(START, now)).toBe(-1); // before even started
  });

  it("returns 0 when now equals start date exactly", () => {
    expect(calcYearsExp(START, START)).toBe(0);
  });
});

// ─── getSkillClass ───────────────────────────────────────────────────────────

describe("getSkillClass", () => {
  const classes = ["bg-pgreen rounded-full", "bg-pblue rounded-2xl", "bg-ppink", "bg-pyellow rounded-md"];

  it("returns first class for index 0", () => {
    expect(getSkillClass(0, classes)).toBe("bg-pgreen rounded-full");
  });

  it("returns correct class for middle index", () => {
    expect(getSkillClass(2, classes)).toBe("bg-ppink");
  });

  it("cycles back to start after last index", () => {
    expect(getSkillClass(4, classes)).toBe("bg-pgreen rounded-full");
  });

  it("cycles correctly for any multiple", () => {
    expect(getSkillClass(8, classes)).toBe("bg-pgreen rounded-full");
    expect(getSkillClass(9, classes)).toBe("bg-pblue rounded-2xl");
  });
});

// ─── getRandomClass ──────────────────────────────────────────────────────────

describe("getRandomClass", () => {
  const classes = ["hover:shadow-ppinkHover", "hover:shadow-pgreenHover", "hover:shadow-pblueHover"];

  it("always returns a value that is in the classes array", () => {
    for (let i = 0; i < 20; i++) {
      expect(classes).toContain(getRandomClass(classes));
    }
  });

  it("can return the first element when Math.random is 0", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    expect(getRandomClass(classes)).toBe("hover:shadow-ppinkHover");
    vi.restoreAllMocks();
  });

  it("can return the last element when Math.random approaches 1", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.999);
    expect(getRandomClass(classes)).toBe("hover:shadow-pblueHover");
    vi.restoreAllMocks();
  });
});
