import { describe, it, expect } from "vitest";
import {
  reverseArray4,
  reverseArray5,
  reverseArray7,
} from "../algo/reverseArray";


describe.each([
  ["reverseArray4", reverseArray4],
  ["reverseArray5", reverseArray5],
  ["reverseArray7", reverseArray7],
])("%s", (_name, fn) => {
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