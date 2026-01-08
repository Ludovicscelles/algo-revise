import { describe, it, expect } from "vitest";
import { digitsSum, digitsSum4, digitsSum8 } from "../../algo/algo2/digitsSum";
import e from "express";

describe.each([
  { fn: digitsSum, name: "digitsSum" },
  { fn: digitsSum4, name: "digitsSum4" },
  { fn: digitsSum8, name: "digitsSum8" },
])("$name", ({ fn }) => {
  it("should return the sum of the digits of a positive integer", () => {
    expect(fn(12345)).toBe(15);
    expect(fn(0)).toBe(0);
    expect(fn(9)).toBe(9);
    expect(fn(1001)).toBe(2);
    expect(fn(9876543210)).toBe(45);
  });

  it("should return the sum of the digits of a negative integer", () => {
    expect(fn(-12345)).toBe(15);
    expect(fn(-9)).toBe(9);
    expect(fn(-1001)).toBe(2);
    expect(fn(-9876543210)).toBe(45);
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => fn(12.34)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn("string")).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn(null)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn(undefined)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn({})).toThrowError("La saisie doit être un nombre entier.");
  });
});
