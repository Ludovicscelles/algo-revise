import { describe, it, expect } from "vitest";
import { getMaxValue, getMaxValue4 } from "../algo/getMaxValue";


// Tests for getMaxValue and getMaxValue4 functions
// use each to run the same tests for both implementations
describe.each([
  // Pair of function name and function reference
  ["getMaxValue", getMaxValue],
  ["getMaxValue4", getMaxValue4],
  // placeholder "%s" will be replaced by the first element of each sub-array
  // fn will refer to the function being tested
])("%s", (_name, fn) => {
  // Test cases - common for both functions with fn
  it("should return max value from a integers array", () => {
    expect(fn([15, 25, 96, 112, 88])).toBe(112);
    expect(fn([-25, -95, -58, -9, -12])).toBe(-9);
    expect(fn([1, 2, 112])).toBe(112);
    expect(fn([112, 2, 1])).toBe(112);
    expect(fn([42, 42])).toBe(42);
    expect(fn([-15, 103, 91, -112, -2, 88])).toBe(103);
    expect(fn([0, 0, 0, 0])).toBe(0);
  });
  it("should throw an error if array has less than two elements", () => {
    expect(() => fn([42])).toThrowError(
      "Le tableau doit contenir au minimum deux éléments"
    );
    expect(() => fn([])).toThrowError(
      "Le tableau doit contenir au minimum deux éléments"
    );
  });
  it("should throw an error if array contains non-integer values", () => {
    expect(() => fn([15, 25, 96.5, 112, 88])).toThrowError(
      "Chaque élément du tableau doit être un nombre entier."
    );
    expect(() => fn([15, "25", 96, 112, 88])).toThrowError(
      "Chaque élément du tableau doit être un nombre entier."
    );
    expect(() => fn([15, null, 96, 112, 88])).toThrowError(
      "Chaque élément du tableau doit être un nombre entier."
    );
    expect(() => fn([15, undefined, 96, 112, 88])).toThrowError(
      "Chaque élément du tableau doit être un nombre entier."
    );
  });
});
