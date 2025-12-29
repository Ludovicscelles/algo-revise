import { describe, it, expect } from "vitest";
import {
  factorial,
  factorial2,
  factorial3,
  factorial4,
} from "../algo/factorial";

describe("factorial", () => {
  it("should return 120 for input 5", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return 1 for input 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should throw an error for negative inputs", () => {
    expect(() => factorial(-3)).toThrow();
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => factorial(4.5)).toThrow();
    expect(() => factorial([])).toThrow();
    expect(() => factorial("string")).toThrow();
    expect(() => factorial(null)).toThrow();
    expect(() => factorial(undefined)).toThrow();
    expect(() => factorial({})).toThrow();
  });
});

describe("factorial2", () => {
  it("should return 120 for input 5", () => {
    expect(factorial2(5)).toBe(120);
  });

  it("should return 1 for input 0", () => {
    expect(factorial2(0)).toBe(1);
  });

  it("should throw an error for negative inputs", () => {
    expect(() => factorial2(-2)).toThrow();
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => factorial2(3.7)).toThrow();
    expect(() => factorial2([])).toThrow();
    expect(() => factorial2("string")).toThrow();
    expect(() => factorial2(null)).toThrow();
    expect(() => factorial2(undefined)).toThrow();
    expect(() => factorial2({})).toThrow();
  });
});

describe("factorial3", () => {
  it("should return 120 for input 5", () => {
    expect(factorial3(5)).toBe(120);
  });

  it("should return 1 for input 0", () => {
    expect(factorial3(0)).toBe(1);
  });

  it("should throw an error for negative inputs", () => {
    expect(() => factorial3(-1)).toThrow();
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => factorial3(2.2)).toThrow();
    expect(() => factorial3([])).toThrow();
    expect(() => factorial3("string")).toThrow();
    expect(() => factorial3(null)).toThrow();
    expect(() => factorial3(undefined)).toThrow();
    expect(() => factorial3({})).toThrow();
  });
});

describe("factorial4", () => {
  it("should return 120 for input 5", () => {
    expect(factorial4(5)).toBe(120);
  });

  it("should return 1 for input 0", () => {
    expect(factorial4(0)).toBe(1);
  });

  it("should throw an error for negative inputs", () => {
    expect(() => factorial4(-5)).toThrow();
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => factorial4(1.9)).toThrow();
    expect(() => factorial4([])).toThrow();
    expect(() => factorial4("string")).toThrow();
    expect(() => factorial4(null)).toThrow();
    expect(() => factorial4(undefined)).toThrow();
    expect(() => factorial4({})).toThrow();
  });
});
