import { describe, it, expect } from "vitest";
import {
  getSecondBiggestNumber,
  getSecondBiggestNumber4,
  getSecondBiggestNumber8,
  getSecondBiggestNumber9,
} from "../../algo/algo3/getSecondBiggestNumber";

describe.each([
  { fn: getSecondBiggestNumber, name: "getSecondBiggestNumber" },
  { fn: getSecondBiggestNumber4, name: "getSecondBiggestNumber4" },
  { fn: getSecondBiggestNumber8, name: "getSecondBiggestNumber8" },
  { fn: getSecondBiggestNumber9, name: "getSecondBiggestNumber9" },
])("$name", ({ fn }) => {
  it.each([
    [[10, 50, 40, 30, 40, 20], 40],
    [[8.92, 9.98, 9.25, 10.95, 6.95], 9.98],
    [[100, 200, 300, 400, 500], 400],
    [[-10, -20, -30, -5, -15], -10],
    [[1, 2], 1],
    [[5, 5, 5, 10], 5],
    [[0, 0, 0, 1], 0],
    [[-2.75, -5.98, 1.22, 0, -4.75, -2.009, 5.11], 1.22],
  ])("second biggest number(%p) should return %p", (array, expected) => {
    const result = fn(array);
    expect(result).toBe(expected);
  });

  it.each([
    [[10]],
    [["a", "b"]],
    [["a", 20, 30]],
    [null],
    [undefined],
    [[null, undefined, 5]],
  ])("should throw an error for invalid input %p", (input) => {
    expect(() => (fn as any)(input)).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments",
    );
  });
});
