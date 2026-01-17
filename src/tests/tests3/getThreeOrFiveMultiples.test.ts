import { describe, it, expect } from "vitest";
import {
  getThreeOrFiveMultiples,
  getThreeOrFiveMultiples3,
  getThreeOrFiveMultiples7,
  getThreeOrFiveMultiples9,
} from "../../algo/algo3/getThreeOrFiveMultiples";

describe.each([
  { fn: getThreeOrFiveMultiples, name: "getThreeOrFiveMultiples" },
  { fn: getThreeOrFiveMultiples3, name: "getThreeOrFiveMultiples3" },
])("$name", ({ fn }) => {
  it.each([
    [15, [3, 5, 6, 9, 10, 12, 15]],
    [
      50,
      [
        3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30, 33, 35, 36, 39, 40,
        42, 45, 48, 50,
      ],
    ],
    [1, []],
    [3, [3]],
    [5, [3, 5]],
    [7, [3, 5, 6]],
  ])(
    "get multiples (%p) of three or five from 1 to n, return %p",
    (number, expected) => {
      const result = fn(number);
      expect(result).toEqual(expected);
    },
  );

  it.each([1.5, "5", [], {}, null, undefined, NaN])(
    "should throw error for non-integer input: %p",
    (input) => {
      expect(() => (fn as any)(input)).toThrowError(
        "La saisie doit être un nombre entier",
      );
    },
  );

  it.each([0, -1, -5])(
    "should throw error for non-positive input: %p",
    (input) => {
      expect(() => (fn as any)(input)).toThrowError(
        "Le nombre saisi doit être supérieur ou égal à un",
      );
    },
  );
});

// Additional tests for generator functions
describe.each([
  { fn: getThreeOrFiveMultiples7, name: "getThreeOrFiveMultiples7" },
  { fn: getThreeOrFiveMultiples9, name: "getThreeOrFiveMultiples9" },
])("$name", ({ fn }) => {
  it.each([
    [15, [3, 5, 6, 9, 10, 12, 15]],
    [
      50,
      [
        3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30, 33, 35, 36, 39, 40,
        42, 45, 48, 50,
      ],
    ],
    [1, []],
    [3, [3]],
    [5, [3, 5]],
    [7, [3, 5, 6]],
  ])(
    "get multiples (%p) of three or five from 1 to n, return %p",
    (number, expected) => {
      const result = Array.from(fn(number));
      expect(result).toEqual(expected);
    },
  );

  it.each([1.5, "5", [], {}, null, undefined, NaN])(
    "should throw error for non-integer input: %p",
    (input) => {
      expect(() => Array.from((fn as any)(input))).toThrowError(
        "La saisie doit être un nombre entier",
      );
    },
  );

  it.each([0, -1, -5])(
    "shoul throw error for non-positive input: %p",
    (input) => {
      expect(() => Array.from((fn as any)(input))).toThrowError(
        "Le nombre saisi doit être supérieur ou égal à un",
      );
    },
  );
});
