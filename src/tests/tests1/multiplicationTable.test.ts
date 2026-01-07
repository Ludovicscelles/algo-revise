import { describe, it, expect } from "vitest";
import {
  multiplicationTable,
  multiplicationTable7,
} from "../../algo/algo1/multiplicationTable";

describe.each([
  { fn: multiplicationTable, name: "multiplicationTable" },
  { fn: multiplicationTable7, name: "multiplicationTable7" },
])("$name", ({ fn }) => {
  it("should return correct multiplication table for input 5", () => {
    const expectedOutput =
      "5 x 1 = 5\n" +
      "5 x 2 = 10\n" +
      "5 x 3 = 15\n" +
      "5 x 4 = 20\n" +
      "5 x 5 = 25\n" +
      "5 x 6 = 30\n" +
      "5 x 7 = 35\n" +
      "5 x 8 = 40\n" +
      "5 x 9 = 45\n" +
      "5 x 10 = 50\n";
    expect(fn(5)).toBe(expectedOutput);
  });

  it("should throw an error if input is not an integer", () => {
    expect(() => fn(5.5)).toThrowError("La saisie doit être un nombre entier.");
    expect(() => fn(-3)).toThrowError(
      "Le nombre saisi doit être supérieur ou égal à un."
    );
    expect(() => fn(0)).toThrowError(
      "Le nombre saisi doit être supérieur ou égal à un."
    );
    expect(() => fn("10")).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn(null)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn(undefined)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn({})).toThrowError("La saisie doit être un nombre entier.");
  });
});
