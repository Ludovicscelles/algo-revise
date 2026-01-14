import { describe, it, expect } from "vitest";

import { isAnagram, isAnagram2, isAnagram3 } from "../../algo/algo3/isAnagram";

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

  it.each([
    [undefined, "test"],
    ["test", undefined],
    [undefined, undefined],
  ])(
    "should throw an error when one or both arguments are undefined: %p, %p",
    (str1, str2) => {
      expect(() => fn(str1 as any, str2 as any)).toThrow(
        "Deux arguments sont requis"
      );
    }
  );

  it.each([null, 123, {}, [], true, false])(
    "throws an error for non-string input: %p",
    (input) => {
      expect(() => fn(input as any, "test")).toThrow(
        "La saisie d'entrée doit être une chaîne de caractères."
      );
      expect(() => fn("test", input as any)).toThrow(
        "La saisie d'entrée doit être une chaîne de caractères."
      );
    }
  );
});
