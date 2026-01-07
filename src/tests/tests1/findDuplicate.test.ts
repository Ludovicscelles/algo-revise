import { describe, it, expect } from "vitest";
import {
  findDuplicate3,
  findDuplicate5,
  findDuplicate7,
} from "../../algo/algo1/findDuplicate";

const sorted= (arr: number[]): number[] => {
  return [...arr].sort((a, b) => a - b);
};

describe.each([
  { func: findDuplicate3, name: "findDuplicate3" },
  { func: findDuplicate5, name: "findDuplicate5" },
  { func: findDuplicate7, name: "findDuplicate7" },
])("$name", ({ func: fn }) => {
  it("should return correct duplicate numbers for array with duplicates", () => {
    const result = fn([1, 2, 3, 2, 4, 5, 3, 6, 1]);
    expect(sorted(result)).toEqual([1, 2, 3]);
    const result2 = fn([10, 20, 30, 40, 20, 50, 10]);
    expect(sorted(result2)).toEqual([10, 20]);
    const result3 = fn([5, 5, 5, 5, 5]);
    expect(sorted(result3)).toEqual([5]);
    const result4 = fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5]);
    expect(sorted(result4)).toEqual([1, 2, 3, 4, 5]);
    const result5 = fn([100, 200, 300, 400, 500, 600, 700, 800, 900, 100]);
    expect(sorted(result5)).toEqual([100]);
    const result6 = fn([15.78, 23.45, 15.78, 42.10, 23.45]);
    expect(sorted(result6)).toEqual([15.78, 23.45]);
    const result7 = fn([-1, -2, -3, -1, -4, -2]);
    expect(sorted(result7)).toEqual([-2, -1]);

  });

  it("should return an empty array for array with no duplicates", () => {
    const result = fn([1, 2, 3, 4, 5]);
    expect(result).toEqual([]);
  });

  it("should throw an error if input is not an array of numbers", () => {
    expect(() => (fn as any)("not an array")).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
    expect(() => fn([1, "2", 3])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
    expect(() => fn([true, false])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
    expect(() => fn([])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
    expect(() => fn([42])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
  });
});