import { describe, it, expect } from "vitest";
import {
  filterOddNumbers,
  filterOddNumbers3,
  filterOddNumbers7,
  filterOddNumbers8,
} from "../../algo/algo2/filterOddNumbers";
import exp from "constants";

describe.each([
  { fn: filterOddNumbers, name: "filterOddNumbers" },
  { fn: filterOddNumbers3, name: "filterOddNumbers3" },
  { fn: filterOddNumbers7, name: "filterOddNumbers7" },
  { fn: filterOddNumbers8, name: "filterOddNumbers8" },
])("$name", ({ fn }) => {
  it("should return odd numbers from the array", () => {
    const result = fn([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should return an empty array when there are no odd numbers", () => {
    const result = fn([2, 4, 6, 8]);
    expect(result).toEqual([]);
  });

  it("should handle negative odd numbers", () => {
    const result = fn([-1, -2, -3, -4, -5]);
    expect(result).toEqual([-1, -3, -5]);
  });

  it("should handle mixed positive and negative numbers", () => {
    const result = fn([-10, 15, 22, -33, 44, 55]);
    expect(result).toEqual([15, -33, 55]);
  });

  it("should a error when input is not valid", () => {
    expect(() => fn([1])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres entiers et au moins deux éléments."
    );
    expect(() => fn(["a", "b", "c"])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres entiers et au moins deux éléments."
    );
    expect(() => fn([1, 2, "3"])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres entiers et au moins deux éléments."
    );
    expect(() => fn([])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres entiers et au moins deux éléments."
    );
    expect(() => fn([true, false])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres entiers et au moins deux éléments."
    );
    expect(() => (fn as any)({})).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres entiers et au moins deux éléments."
    );
  });
});
