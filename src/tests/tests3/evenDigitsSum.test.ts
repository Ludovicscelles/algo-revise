import { describe, it, expect } from "vitest";

import {
  evenDigitsSum,
  evenDigitsSum4,
  evenDigitsSum7,
  evenDigitsSum8,
} from "../../algo/algo3/evenDigitsSum";

describe.each([
  { fn: evenDigitsSum, name: "evenDigitsSum" },
  { fn: evenDigitsSum4, name: "evenDigitsSum4" },
  { fn: evenDigitsSum7, name: "evenDigitsSum7" },
  { fn: evenDigitsSum8, name: "evenDigitsSum8" },
])("$name", ({ fn }) => {
  it("should return the sum of even digits in a positive integer", () => {
    expect(fn(123456)).toBe(12); // 2 + 4 + 6 = 12
    expect(fn(24680)).toBe(20); // 2 + 4 + 6 + 8 + 0 = 20
    expect(fn(13579)).toBe(0); // No even digits
  });

  it("should return the sum of even digits in a negative integer", () => {
    expect(fn(-123456)).toBe(12); // 2 + 4 + 6 = 12
    expect(fn(-24680)).toBe(20); // 2 + 4 + 6 + 8 + 0 = 20
    expect(fn(-13579)).toBe(0); // No even digits
  });

  it("should return 0 for integers with no even digits", () => {
    expect(fn(111)).toBe(0);
    expect(fn(-999)).toBe(0);
    expect(fn(13579)).toBe(0);
  });

  it("should return 0 for 0", () => {
    expect(fn(0)).toBe(0); // 0 is considered an even digit
  });

  it.each([12.34, "123", null, undefined, [], {}, () => {}])(
    "should throw an error for non-integer inputs: %p",
    (input) => {
      expect(() => (fn as any)(input)).toThrowError(
        "La saisie doit être un nombre entier"
      );
    }
  );
});
