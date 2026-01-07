import { describe, it, expect } from "vitest";
import {
  checkPalindrome,
  checkPalindrome4,
  checkPalindrome7,
} from "../../algo/algo1/checkPalindrome";

// Tests for checkPalindrome, checkPalindrome4 and checkPalindrome7 functions

describe.each([
  { func: checkPalindrome, name: "checkPalindrome" },
  { func: checkPalindrome4, name: "checkPalindrome4" },
  { func: checkPalindrome7, name: "checkPalindrome7" },
])("$name", ({ func: fn }) => {
  it("should identify palindromes correctly", () => {
    expect(fn("Anna")).toBe("Il s'agit bien d'un palindrome.");
    expect(fn("Élu par cette crapule")).toBe("Il s'agit bien d'un palindrome.");
    expect(fn("A man, a plan, a canal: Panama")).toBe(
      "Il s'agit bien d'un palindrome."
    );
    expect(fn("No 'x' in Nixon")).toBe("Il s'agit bien d'un palindrome.");
    expect(fn("Was it a car or a cat I saw?")).toBe(
      "Il s'agit bien d'un palindrome."
    );
  });

  it("should identify non-palindromes correctly", () => {
    expect(fn("Hello")).toBe("Ceci n'est pas un palindrome.");
    expect(fn("This is not a palindrome")).toBe(
      "Ceci n'est pas un palindrome."
    );
    expect(fn("Random string")).toBe("Ceci n'est pas un palindrome.");
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
