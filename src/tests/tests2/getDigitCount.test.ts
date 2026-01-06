import { describe, it, expect } from "vitest";
import {
  getDigitCount,
  getDigitCount2,
  getDigitCount5,
} from "../../algo/algo2/getDigitCount";

describe.each([
  ["getDigitCount", getDigitCount],
  ["getDigitCount2", getDigitCount2],
  ["getDigitCount5", getDigitCount5],
])("%s", (_name, fn) => {
  it("should return correct digit count for positive integers", () => {
    expect(fn(12345)).toBe(5);
    expect(fn(0)).toBe(1);
    expect(fn(7)).toBe(1);
    expect(fn(100000)).toBe(6);
  });

  it("should return correct digit count for negative integers", () => {
    expect(fn(-12345)).toBe(5);
    expect(fn(-7)).toBe(1);
    expect(fn(-100000)).toBe(6);
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => fn(12.34)).toThrow();
    expect(() => fn("string")).toThrow();
    expect(() => fn(null)).toThrow();
    expect(() => fn(undefined)).toThrow();
    expect(() => fn({})).toThrow();
  });
});
