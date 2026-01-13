import { describe, it, expect } from "vitest";

import {
  getGreatestCommonDivisor,
  getGreatestCommonDivisor3,
  getGreatestCommonDivisor7,
  getGreatestCommonDivisor8,
} from "../../algo/algo3/getGreatestCommonDivisor";

describe.each([
  { fn: getGreatestCommonDivisor, name: "getGreatestCommonDivisor" },
  { fn: getGreatestCommonDivisor3, name: "getGreatestCommonDivisor3" },
  { fn: getGreatestCommonDivisor7, name: "getGreatestCommonDivisor7" },
  { fn: getGreatestCommonDivisor8, name: "getGreatestCommonDivisor8" },
])("$name", ({ fn }) => {
  it.each([
    [48, 18, 6],
    [1224, 102, 102],
    [81, 27, 27],
    [17, 13, 1],
  ])("gcd(%p, %p) should return %p", (int1, int2, expected) => {
    const result = fn(int1, int2);
    expect(result).toBe(expected);
  });

  it.each([
    [-48, 18, 6],
    [-1224, -102, 102],
  ])(
    "gcd(%p, %p) should return %p - handling negative integers",
    (int1, int2, expected) => {
      const result = fn(int1, int2);
      expect(result).toBe(expected);
    }
  );

  it.each([
    [0, 122, 122],
    [1523, 0, 1523],
    [0, -456, 456],
    [-789, 0, 789],
  ])("should handle if one input is zero", (int1, int2, expected) => {
    const result = fn(int1, int2);
    expect(result).toBe(expected);
  });

  it("gcd(%p, %p) should return %p - handling zero inputs", () => {
    const input1 = 0;
    const input2 = 0;
    expect(() => fn(input1, input2)).toThrowError(
      "Il est impossible de déterminer le plus grand diviseur commun de deux nombres nuls"
    );
  });

  it.each([
    [undefined, undefined],
    [undefined, 12],
    [123, undefined],
  ])("should handle undefined input", (input1, input2) => {
    expect(() => fn(input1, input2)).toThrowError(
      "La saisie doit contenir exactement deux arguments"
    );
  });

  it.each([
    [123.45, 67],
    [89, 45.67],
    ["100", 50],
    [100, "50"],
    [null, 50],
    [100, null],
    [{}, 50],
    [100, []],
  ])(
    "should throw an error if inputs are not valid integers: %p and %p",
    (input1, input2) => {
      expect(() => fn(input1, input2)).toThrowError(
        "La saisie doit être un nombre entier"
      );
    }
  );
});
