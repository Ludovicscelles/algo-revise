import { describe, it, expect } from "vitest";

import { isAnagram, isAnagram2, isAnagram3 } from "../../algo/algo3/isAnagram";
import exp from "constants";

describe.each([
  { fn: isAnagram, name: "isAnagram" },
  { fn: isAnagram2, name: "isAnagram2" },
  { fn: isAnagram3, name: "isAnagram3" },
])("$name", ({ fn }) => {
  it("should return true for anagrams", () => {
    expect(fn("listen", "silent")).toBe(true);
    expect(fn("Triangle", "Integral")).toBe(true);
    expect(fn("Astronomer", "Moon starer")).toBe(true);
    expect(fn("Pascal Obispo", "Pablo Picasso")).toBe(true);
  });

  it("should return false for non-anagrams", () => {
    expect(fn("hello", "world")).toBe(false);
    expect(fn("test", "taste")).toBe(false);
    expect(fn("anagram", "nag a ram!")).toBe(false);
    expect(fn("example", "samples")).toBe(false);
  });

  it("should throw error for invalid inputs", () => {
    expect(() => fn(undefined, "test")).toThrow("Deux arguments sont requis");
    expect(() => fn("test", undefined)).toThrow("Deux arguments sont requis");
    expect(() => fn(123, "test")).toThrow(
      "La saisie d'entrée doit être une chaîne de caractères"
    );
    expect(() => fn("test", null)).toThrow(
      "La saisie d'entrée doit être une chaîne de caractères"
    );
    expect(() => fn([], {})).toThrow(
      "La saisie d'entrée doit être une chaîne de caractères"
    );
    expect(() => fn("valid", 456)).toThrow(
      "La saisie d'entrée doit être une chaîne de caractères"
    );
  });
});
