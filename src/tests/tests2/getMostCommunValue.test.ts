import {
  getMostCommunValue,
  getMostCommunValue3,
  getMostCommunValue7,
  getMostCommunValue8,
} from "../../algo/algo2/getMostCommunValue";

import { describe, expect, it } from "vitest";

describe.each([
  {
    fn: getMostCommunValue,
    name: "getMostCommunValue",
  },
  {
    fn: getMostCommunValue3,
    name: "getMostCommunValue3",
  },
  {
    fn: getMostCommunValue7,
    name: "getMostCommunValue7",
  },
  {
    fn: getMostCommunValue8,
    name: "getMostCommunValue8",
  },
])("$name", ({ fn }) => {
  it("should return the most common value", () => {
    expect(fn([1, 2, 3, 1, 2, 1])).toBe(1);
    expect(fn([4, 4, 4, 2, 2, 2])).toBe(4);
    expect(fn([5, 5, 5, 5, 1, 1, 1])).toBe(5);
    expect(fn([10, 20, 10, 20, 10])).toBe(10);
    expect(fn([7.152, 7.152, 3.14, 2.71, 7.152])).toBe(7.152);
    expect(fn([-1, -1, -2, -2, -1])).toBe(-1);
    expect(fn([0, 0, 0, 1, 1, 1, 0])).toBe(0);
    expect(fn([100, 200, 100, 200, 100, 200, 200])).toBe(200);
    expect(fn([42, 42, 42, 42, 42])).toBe(42);
    expect(fn([15058, 15052, 15052, 15053, 15054, 15052])).toBe(15052);
  });

  it("should throw an error for invalid input", () => {
    expect(() => fn([])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
    expect(() => fn([1])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
    expect(() => fn([1, "a", 3])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
    expect(() => fn([null, 2, 3])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
    expect(() => fn([undefined, 2, 3])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
    expect(() => fn([1, 2, {}])).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments."
    );
  });
});
