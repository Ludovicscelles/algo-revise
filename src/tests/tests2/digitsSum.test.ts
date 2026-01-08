import { describe, it, expect } from "vitest";
import {
  digitsSum,
  digitsSum4,
  digitsSum8,
  DigitsSumUtils,
} from "../../algo/algo2/digitsSum";

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

describe("DigitsSumUtils", () => {
  it("should return the sum of the digits using the class method", () => {
    const digitsSumInstance = new DigitsSumUtils(12345);
    expect(digitsSumInstance.sum()).toBe(15);
    const digitsSumInstanceZero = new DigitsSumUtils(0);
    expect(digitsSumInstanceZero.sum()).toBe(0);
    const digitsSumInstanceSingle = new DigitsSumUtils(9);
    expect(digitsSumInstanceSingle.sum()).toBe(9);
    const digitsSumInstanceLarge = new DigitsSumUtils(9876543210);
    expect(digitsSumInstanceLarge.sum()).toBe(45);
    const digitsSumInstanceLeadingZeros = new DigitsSumUtils(1001);
    expect(digitsSumInstanceLeadingZeros.sum()).toBe(2);

    const digitsSumInstanceNegative = new DigitsSumUtils(-12345);
    expect(digitsSumInstanceNegative.sum()).toBe(15);
    const digitsSumInstanceNegativeSingle = new DigitsSumUtils(-9);
    expect(digitsSumInstanceNegativeSingle.sum()).toBe(9);
    const digitsSumInstanceNegativeLarge = new DigitsSumUtils(-9876543210);
    expect(digitsSumInstanceNegativeLarge.sum()).toBe(45);
    const digitsSumInstanceNegativeLeadingZeros = new DigitsSumUtils(-1001);
    expect(digitsSumInstanceNegativeLeadingZeros.sum()).toBe(2);
  });

  it("should throw an error for non-integer inputs in the class constructor", () => {
    expect(() => new DigitsSumUtils(12.34)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(
      () => new DigitsSumUtils("string" as unknown as number)
    ).toThrowError("La saisie doit être un nombre entier.");
    expect(() => new DigitsSumUtils(null as unknown as number)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(
      () => new DigitsSumUtils(undefined as unknown as number)
    ).toThrowError("La saisie doit être un nombre entier.");
    expect(() => new DigitsSumUtils({} as unknown as number)).toThrowError(
      "La saisie doit être un nombre entier."
    );
  });
});
