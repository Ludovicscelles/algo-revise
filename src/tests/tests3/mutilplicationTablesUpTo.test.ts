import { describe, it, expect } from "vitest";

import {
  multiplicationTablesUpTo,
  multiplicationTablesUpToV3,
  MultiplicationTableUpTo,
} from "../../algo/algo3/multiplicationTablesUpTo";

describe.each([
  {
    fn: multiplicationTablesUpTo,
    name: "multiplicationTablesUpTo",
  },
  {
    fn: multiplicationTablesUpToV3,
    name: "multiplicationTablesUpToV3",
  },
])("$name", ({ fn }) => {
  it("should return correct multiplication tables up to given number", () => {
    const result = fn(3);
    expect(result).toEqual([
      [
        "1 x 1 = 1",
        "1 x 2 = 2",
        "1 x 3 = 3",
        "1 x 4 = 4",
        "1 x 5 = 5",
        "1 x 6 = 6",
        "1 x 7 = 7",
        "1 x 8 = 8",
        "1 x 9 = 9",
        "1 x 10 = 10",
      ],
      [
        "2 x 1 = 2",
        "2 x 2 = 4",
        "2 x 3 = 6",
        "2 x 4 = 8",
        "2 x 5 = 10",
        "2 x 6 = 12",
        "2 x 7 = 14",
        "2 x 8 = 16",
        "2 x 9 = 18",
        "2 x 10 = 20",
      ],
      [
        "3 x 1 = 3",
        "3 x 2 = 6",
        "3 x 3 = 9",
        "3 x 4 = 12",
        "3 x 5 = 15",
        "3 x 6 = 18",
        "3 x 7 = 21",
        "3 x 8 = 24",
        "3 x 9 = 27",
        "3 x 10 = 30",
      ],
    ]);
  });

  it.each([1.5, "5", [], {}, null, undefined, NaN])(
    "should throw error for non-integer input: %p",
    (input) => {
      expect(() => (fn as any)(input)).toThrowError(
        "La saisie doit être un nombre entier."
      );
    }
  );

  it.each([0, -1, -5])(
    "should throw error for non-positive input: %p",
    (input) => {
      expect(() => (fn as any)(input)).toThrowError(
        "Le nombre saisi doit être supérieur ou égal à un."
      );
    }
  );
});

describe("MultiplicationTableUpTo class", () => {
  it("should return correct multiplication tables up to given number", () => {
    const multiplicationTable = new MultiplicationTableUpTo(2);
    const result = multiplicationTable.generate();
    expect(result).toEqual([
      [
        "1 x 1 = 1",
        "1 x 2 = 2",
        "1 x 3 = 3",
        "1 x 4 = 4",
        "1 x 5 = 5",
        "1 x 6 = 6",
        "1 x 7 = 7",
        "1 x 8 = 8",
        "1 x 9 = 9",
        "1 x 10 = 10",
      ],
      [
        "2 x 1 = 2",
        "2 x 2 = 4",
        "2 x 3 = 6",
        "2 x 4 = 8",
        "2 x 5 = 10",
        "2 x 6 = 12",
        "2 x 7 = 14",
        "2 x 8 = 16",
        "2 x 9 = 18",
        "2 x 10 = 20",
      ],
    ]);
  });

  it.each([1.5, "5", [], {}, null, undefined, NaN])(
    "should throw error for non-integer input: %p",
    (input) => {
      expect(() => new MultiplicationTableUpTo(input as any)).toThrowError(
        "La saisie doit être un nombre entier."
      );
    }
  );

  it.each([0, -1, -5])(
    "should throw error for non-positive input: %p",
    (input) => {
      expect(() => new MultiplicationTableUpTo(input)).toThrowError(
        "Le nombre saisi doit être supérieur ou égal à un."
      );
    }
  );
});
