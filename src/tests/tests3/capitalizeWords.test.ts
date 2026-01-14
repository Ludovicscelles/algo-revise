import { describe, it, expect } from "vitest";
import {
  capitalizeWords,
  capitalizeWords2,
  capitalizeWords5,
  capitalizeWords6,
} from "../../algo/algo3/capitalizeWords";

describe.each([
  { fn: capitalizeWords, name: "capitalizeWords" },
  { fn: capitalizeWords2, name: "capitalizeWords2" },
  { fn: capitalizeWords5, name: "capitalizeWords5" },
  { fn: capitalizeWords6, name: "capitalizeWords6" },
])("$name", ({ fn }) => {
  it("capitalizes the first letter of each word in a string", () => {
    expect(fn("hello world")).toBe("Hello World");
    expect(fn("this is a test")).toBe("This Is A Test");
    expect(fn("")).toBe("");
    expect(fn("a")).toBe("A");
    expect(fn("A")).toBe("A");
    expect(fn("123 abc")).toBe("123 Abc");
    expect(fn("!@# $%^")).toBe("!@# $%^");
  });

 

  it.each([null, undefined, 123, {}, [], true, false])(
    "throws an error for non-string input: %p",
    (input) => {
      expect(() => fn(input as any)).toThrow(
        "La saisie d'entrée doit être une chaîne de caractères."
      );
    }
  );
});
