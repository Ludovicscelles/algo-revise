import { describe, it, expect } from "vitest";
import { countVowels, countVowels7 } from "../algo/countVowels";

// Tests for countVowels and countVowels7 functions

describe.each([
  ["countVowels", countVowels],
  ["countVowels7", countVowels7],
])("%s", (_name, fn) => {
  it("should count vowels correctly", () => {
    expect(fn("Hello World")).toBe(3);
    expect(fn("École")).toBe(3);
    expect(fn("À bientôt")).toBe(4);
    expect(fn("Programming is fun!")).toBe(5);
    expect(fn("C'est la vie")).toBe(4);
  });

  it("should return 0 when there are no vowels", () => {
    expect(fn("pfffff.")).toBe(0);
    expect(fn("brrr")).toBe(0);
    expect(fn("hmm")).toBe(0);
  });

  it("should throw an error if input is not a string", () => {
    expect(() => fn(12345)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
    expect(() => fn(null)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
    expect(() => fn(undefined)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
    expect(() => fn({})).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
  });
});
