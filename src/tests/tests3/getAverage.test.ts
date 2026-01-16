import { describe, it, expect } from "vitest";

import {
  getAverage,
  getAverage4,
  getAverage8,
  MathUtil,
  MathUtilV3,
  MathUtilV7,
  MathUtilV8,
} from "../../algo/algo3/getAverage";

// Tests for getAverage functions

describe.each([
  { fn: getAverage, name: "getAverage" },
  { fn: getAverage4, name: "getAverage4" },
  { fn: getAverage8, name: "getAverage8" },
])("$name", ({ fn }) => {
  // use it.each to test multiple cases
  it.each([
    [[15, 25, 58, 99], 49.25],
    [[15.985, 953.645654, 45.6546545, 87.45], 275.68],
    [[10, 20], 15],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5.5],
    [[0, 0, 0, 0], 0],
    [[-10, 10, -20, 20], 0],
    [[-5, -15, -10], -10],

    // edge case with two decimal places
  ])("average(%p) should return %p", (array, expected) => {
    const result = fn(array);
    expect(result).toBeCloseTo(expected, 2);
  });

  // tests for invalid inputs
  it.each([
    [[10]],
    [["a", "b"]],
    [["a", 20, 30]],
    [[10, "20", 30]],
    [null],
    [undefined],
    [[null, undefined, 5]],
  ])("should throw error for invalid input %p", (input) => {
    expect(() => (fn as any)(input)).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments.",
    );
  });
});

// Tests for MathUtil class
describe.each([
  { class: MathUtil, name: "MathUtil" },
  { class: MathUtilV3, name: "MathUtilV3" },
  { class: MathUtilV7, name: "MathUtilV7" },
  { class: MathUtilV8, name: "MathUtilV8" },
])("$name", ({ class: MathUtilClass }) => {
  // use it.each to test multiple cases
  it.each([
    [[10, 20, 30], 20],
    [[5, 15, 25, 35], 20],
    [[1.5, 2.5, 3.5], 2.5],
    [[15, 25, 58, 99, 100.75, 200.25], 83],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5.5],
    [[0, 0, 0, 0], 0],
    [[-10, 0, 10], 0],
    [[-5, -15, -10], -10],
  ])("MathUtil.numbersAverage(%p) should return %p", (array, expected) => {
    const mathUtil = new MathUtilClass(array);
    const result = mathUtil.averageNumbers();
    expect(result).toBeCloseTo(expected, 2);
  });

  it.each([
    [[10]],
    [["a", "b"]],
    [["a", 20, 30]],
    [[10, "20", 30]],
    [null],
    [undefined],
    [[null, undefined, 5]],
  ])("should throw error for invalid input %p", (input) => {
    expect(() => new MathUtilClass(input as any)).toThrowError(
      "La saisie doit être un tableau contenant strictement des nombres et au moins deux éléments.",
    );
  });
});
