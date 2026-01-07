import { describe, it, expect } from "vitest";
import { sumOfNumbers, sumOfNumbers5 } from "../../algo/algo1/sumOfNumbers";

describe.each([
  { func: sumOfNumbers, name: "sumOfNumbers" },
  { func: sumOfNumbers5, name: "sumOfNumbers5" },
])("$name", ({ func: fn }) => {
  it("should return the sum of numbers from 1 to n", () => {
    expect(fn(5)).toBe(15);
    expect(fn(10)).toBe(55);
    expect(fn(1)).toBe(1);
    expect(fn(100)).toBe(5050);
  });

  it("should throw an error if input is not a valid integer", () => {
    expect(() => fn(5.5)).toThrowError("La saisie doit être un nombre entier.");
    expect(() => fn(-3)).toThrowError(
      "Le nombre saisi doit être supérieur ou égal à un."
    );
    expect(() => fn(0)).toThrowError(
      "Le nombre saisi doit être supérieur ou égal à un."
    );
    expect(() => fn("10")).toThrowError(
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
