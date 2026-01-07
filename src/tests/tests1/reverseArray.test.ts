import { describe, it, expect } from "vitest";
import {
  reverseArray4,
  reverseArray5,
  reverseArray7,
} from "../../algo/algo1/reverseArray";

describe.each([
  { fn: reverseArray4, name: "reverseArray4" },
  { fn: reverseArray5, name: "reverseArray5" },
  { fn: reverseArray7, name: "reverseArray7" },
])("$name", ({ fn }) => {
  it("should reverse array correctly", () => {
    expect(fn(["a", "b", "c", "d"])).toEqual(["d", "c", "b", "a"]);
    expect(fn(["hello", "world"])).toEqual(["world", "hello"]);
    expect(fn(["one", "two", "three"])).toEqual(["three", "two", "one"]);
  });

  it("should throw an error if input is not an array of at least two strings", () => {
    expect(() => (fn as any)("not an array")).toThrowError(
      "La saisie doit être un tableau contenant au moins deux chaînes de caractères."
    );
    expect(() => fn([1, 2, 3])).toThrowError(
      "La saisie doit être un tableau contenant au moins deux chaînes de caractères."
    );
    expect(() => fn(["only one string"])).toThrowError(
      "La saisie doit être un tableau contenant au moins deux chaînes de caractères."
    );
    expect(() => fn([true, false])).toThrowError(
      "La saisie doit être un tableau contenant au moins deux chaînes de caractères."
    );
  });
});
