import { describe, it, expect } from "vitest";
import {
  reverseAString,
  reverseAString2,
  reverseAString7,
} from "../../algo/algo2/reverseAString";

describe.each([
  ["reverseAString", reverseAString],
  ["reverseAString2", reverseAString2],
  ["reverseAString7", reverseAString7],
])("%s", (_name, fn) => {
  it("should return the reversed string for a valid input string", () => {
    expect(fn("hello")).toBe("olleh");
    expect(fn("")).toBe("");
    expect(fn("a")).toBe("a");
    expect(fn("12345")).toBe("54321");
    expect(fn("racecar")).toBe("racecar");
    expect(fn("!@#$%")).toBe("%$#@!");
    expect(fn("Hello, World!")).toBe("!dlroW ,olleH");
  });

  it("should throw an error for non-string inputs", () => {
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
    expect(() => fn([])).toThrowError(
      "La saisie d'entrée doit être une chaîne de caractères."
    );
  });
});
