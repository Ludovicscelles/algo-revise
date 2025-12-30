import { describe, it, expect } from "vitest";
import { getMaxValue4 } from "../algo/getMaxValue";

describe("getMaxValue4", () => {
  it("should return max value from a integers array", () => {
    expect(getMaxValue4([15, 25, 96, 112, 88])).toBe(112);
    expect(getMaxValue4([-25, -95, -58, -9, -12])).toBe(-9);
    expect(getMaxValue4([0, 0, 0, 0])).toBe(0);
  });
  it("should throw an error if array has less than two elements", () => {
    expect(() => getMaxValue4([42])).toThrowError(
      "Le tableau doit contenir au minimum deux éléments"
    );
    expect(() => getMaxValue4([])).toThrowError(
      "Le tableau doit contenir au minimum deux éléments"
    );
  });
  it("should throw an error if array contains non-integer values", () => {
    expect(() => getMaxValue4([15, 25, 96.5, 112, 88])).toThrowError(
      "Chaque élément du tableau doit être un nombre entier."
    );
    expect(() => getMaxValue4([15, "25", 96, 112, 88])).toThrowError(
      "Chaque élément du tableau doit être un nombre entier."
    );
    expect(() => getMaxValue4([15, null, 96, 112, 88])).toThrowError(
      "Chaque élément du tableau doit être un nombre entier."
    );
    expect(() => getMaxValue4([15, undefined, 96, 112, 88])).toThrowError(
      "Chaque élément du tableau doit être un nombre entier."
    );
  });
});
