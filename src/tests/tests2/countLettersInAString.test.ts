import { describe, it, expect } from "vitest";
import {
  countLettersInAString,
  countLettersInAString3,
  countLettersInAString4,
  countLettersInAString7,
  countLettersInAString8,
} from "../../algo/algo2/countLettersInAString";

describe.each([
  { fn: countLettersInAString, name: "countLettersInAString" },
  { fn: countLettersInAString3, name: "countLettersInAString3" },
  { fn: countLettersInAString4, name: "countLettersInAString4" },
  { fn: countLettersInAString7, name: "countLettersInAString7" },
  { fn: countLettersInAString8, name: "countLettersInAString8" },
])("$name", ({ fn }) => {
  it("should return correct letter count for valid strings", () => {
    expect(fn("Hello World")).toBe(10);
    expect(fn("   Leading and trailing spaces   ")).toBe(24);
    expect(fn("Special characters! @#$%^&*()")).toBe(17);
    expect(fn("")).toBe(0);
    expect(fn("     ")).toBe(0);
  });

  it("should throw an error for non-string inputs", () => {
    expect(() => fn(12345)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères"
    );
    expect(() => fn(null)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères"
    );
    expect(() => fn(undefined)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères"
    );
    expect(() => fn({})).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères"
    );
    expect(() => fn([])).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères"
    );
  });
});
