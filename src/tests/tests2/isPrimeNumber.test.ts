import {
  isPrimeNumber,
  isPrimeNumber2,
  isPrimeNumber3,
  isPrimeNumber4,
  isPrimeNumber5,
  isPrimeNumber6,
} from "../../algo/algo2/isPrimeNumber";

import { describe, it, expect } from "vitest";

describe.each([
  { fn: isPrimeNumber, name: "isPrimeNumber" },
  { fn: isPrimeNumber2, name: "isPrimeNumber2" },
  { fn: isPrimeNumber3, name: "isPrimeNumber3" },
  { fn: isPrimeNumber4, name: "isPrimeNumber4" },
  { fn: isPrimeNumber5, name: "isPrimeNumber5" },
  { fn: isPrimeNumber6, name: "isPrimeNumber6" },
])("$name", ({ fn }) => {
  it("should return true for prime numbers", () => {
    expect(fn(2)).toBe(true);
    expect(fn(3)).toBe(true);
    expect(fn(5)).toBe(true);
    expect(fn(7)).toBe(true);
    expect(fn(11)).toBe(true);
    expect(fn(13)).toBe(true);
    expect(fn(17)).toBe(true);
    expect(fn(19)).toBe(true);
    expect(fn(23)).toBe(true);
    expect(fn(29)).toBe(true);
  });

  it("should return false for non-prime numbers", () => {
    expect(fn(1)).toBe(false);
    expect(fn(4)).toBe(false);
    expect(fn(6)).toBe(false);
    expect(fn(8)).toBe(false);
    expect(fn(9)).toBe(false);
    expect(fn(10)).toBe(false);
    expect(fn(12)).toBe(false);
    expect(fn(14)).toBe(false);
    expect(fn(15)).toBe(false);
    expect(fn(16)).toBe(false);
  });

  it("should throw error for invalid inputs", () => {
    expect(() => fn(0)).toThrowError("Le nombre saisi doit être supérieur ou égal à un.");
    expect(() => fn(3.5)).toThrowError("La saisie doit être un nombre entier.");
    expect(() => fn("7")).toThrowError("La saisie doit être un nombre entier.");
    expect(() => fn(null)).toThrowError("La saisie doit être un nombre entier.");
    expect(() => fn(undefined)).toThrowError("La saisie doit être un nombre entier.");
    expect(() => fn([])).toThrowError("La saisie doit être un nombre entier.");
    expect(() => fn({})).toThrowError("La saisie doit être un nombre entier.");
  });
});
