import { describe, it, expect } from "vitest";
import {
  findTheLongestWord,
  findTheLongestWord5,
  findTheLongestWord8,
} from "../../algo/algo2/findTheLongestWord";

describe.each([
  { fn: findTheLongestWord, name: "findTheLongestWord" },
  { fn: findTheLongestWord5, name: "findTheLongestWord5" },
  { fn: findTheLongestWord8, name: "findTheLongestWord8" },
])("$name", ({ fn }) => {
  it("should return the longest word in a sentence", () => {
    expect(fn("The quick brown fox jumps over the lazy dog")).toBe("jumps");
    expect(fn("A journey of a thousand miles begins with a single step")).toBe(
      "thousand"
    );
    expect(fn("To be or not to be, that is the question")).toBe("question");

    expect(fn("Il était une fois dans un pays lointain")).toBe("lointain");
    expect(fn("C'est la vie, mon ami!")).toBe("ami");
    expect(
      fn("Le renard brun rapide saute par-dessus le chien paresseux")
    ).toBe("par-dessus");
  });

  it("should handle sentences with punctuation", () => {
    expect(fn("Hello, world! This is a test.")).toBe("world");
    expect(fn("Well... this is unexpected!")).toBe("unexpected");
  });

  it("should return an empty string for an empty sentence", () => {
    expect(fn("")).toBe("");
  });

  it("should throw an error for non-string inputs", () => {
    expect(() => fn(123 as unknown)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
    expect(() => fn(null as unknown)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
    expect(() => fn(undefined as unknown)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
    expect(() => fn({} as unknown)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
    expect(() => fn([] as unknown)).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
  });
});
