import { describe, it, expect } from "vitest";
import {
  arraysFusion,
  arraysFusion3,
  arraysFusion8,
  arraysFusion9,
} from "../../algo/algo2/arraysFusion";

// Tests for arraysFusion functions
describe.each([
  { fn: arraysFusion, name: "arraysFusion" },
  { fn: arraysFusion3, name: "arraysFusion3" },
  { fn: arraysFusion8, name: "arraysFusion8" },
  { fn: arraysFusion9, name: "arraysFusion9" },
  // You can add more function variants here
  // $name is used to identify the test case
  // fn is the function being tested
])("$name", ({ fn }) => {
  const sortedArray = (arr: number[]) => [...arr].sort((a, b) => a - b);

  it("should merge two arrays and remove duplicates", () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];
    const result = fn(array1, array2);
    expect(sortedArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("should merge two arrays with no common elements", () => {
    const array1 = [1, 2];
    const array2 = [3, 4];
    const result = fn(array1, array2);
    expect(sortedArray(result)).toEqual([1, 2, 3, 4]);
  });

  it("should merge two arrays with all elements the same", () => {
    const array1 = [1, 1, 1];
    const array2 = [1, 1, 1];
    const result = fn(array1, array2);
    expect(sortedArray(result)).toEqual([1]);
  });

  it("should merge two arrays with negative and positive numbers", () => {
    const array1 = [-1, -2, 0];
    const array2 = [0, 1, 2];
    const result = fn(array1, array2);
    expect(sortedArray(result)).toEqual([-2, -1, 0, 1, 2]);
  });

  it("should merge two arrays with floating point numbers", () => {
    const array1 = [1.1, 2.2, 3.3];
    const array2 = [3.3, 4.4, 5.5];
    const result = fn(array1, array2);
    expect(sortedArray(result)).toEqual([1.1, 2.2, 3.3, 4.4, 5.5]);
  });

  it("should merge two arrays with large numbers", () => {
    const array1 = [1000000, 2000000];
    const array2 = [2000000, 3000000];
    const result = fn(array1, array2);
    expect(sortedArray(result)).toEqual([1000000, 2000000, 3000000]);
  });

  it("should merge two arrays with large and small numbers", () => {
    const array1 = [1, 1000000, 500000];
    const array2 = [500000, 1000000, 1];
    const result = fn(array1, array2);
    expect(sortedArray(result)).toEqual([1, 500000, 1000000]);
  });

  it("should merge two arrays with large and floating point numbers", () => {
    const array1 = [1.5, 1000000.1, 500000.5];
    const array2 = [500000.5, 1000000.1, 1.5];
    const result = fn(array1, array2);
    expect(sortedArray(result)).toEqual([1.5, 500000.5, 1000000.1]);
  });

  // Test for invalid inputs
  // using it.each to test multiple invalid cases
  it.each([
    [123 as any, [1, 2, 3]],
    [[1, 2, 3], "not an array" as any],
    [null as any, [1, 2, 3]],
    [[1, 2, 3], undefined as any],
    [{} as any, [1, 2, 3]],
    [[1, 2, 3], [] as any],
    [[], [1, 2, 3]],
    [[1, "two", 3] as any, [4, 5, 6]],
    [[1, 2, 3], [4, "five", 6] as any],
  ])(
    "should throw an error if inputs are not valid arrays: %p and %p",
    (input1, input2) => {
      expect(() => fn(input1, input2)).toThrowError(
        "La saisie doit être un tableau contenant strictement un ou plusieurs nombres"
      );
    }
  );
});
