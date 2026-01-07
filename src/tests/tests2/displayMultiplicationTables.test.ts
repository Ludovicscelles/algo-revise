import { describe, it, expect } from "vitest";
import {
  displayMultiplicationTables,
  displayMultiplicationTables5,
} from "../../algo/algo2/displayMultiplicationTables";

describe.each([
  { fn: displayMultiplicationTables, name: "displayMultiplicationTables" },
  { fn: displayMultiplicationTables5, name: "displayMultiplicationTables5" },
])("$name", ({ fn }) => {
  it("should return formated multiplication tables up to the given number", () => {
    const result = fn(3);
    const expectedOutput =
      "Table de 1\n" +
      "-----------------\n" +
      "1 x 1 = 1\n" +
      "1 x 2 = 2\n" +
      "1 x 3 = 3\n" +
      "1 x 4 = 4\n" +
      "1 x 5 = 5\n" +
      "1 x 6 = 6\n" +
      "1 x 7 = 7\n" +
      "1 x 8 = 8\n" +
      "1 x 9 = 9\n" +
      "1 x 10 = 10\n" +
      "\n" +
      "Table de 2\n" +
      "-----------------\n" +
      "2 x 1 = 2\n" +
      "2 x 2 = 4\n" +
      "2 x 3 = 6\n" +
      "2 x 4 = 8\n" +
      "2 x 5 = 10\n" +
      "2 x 6 = 12\n" +
      "2 x 7 = 14\n" +
      "2 x 8 = 16\n" +
      "2 x 9 = 18\n" +
      "2 x 10 = 20\n" +
      "\n" +
      "Table de 3\n" +
      "-----------------\n" +
      "3 x 1 = 3\n" +
      "3 x 2 = 6\n" +
      "3 x 3 = 9\n" +
      "3 x 4 = 12\n" +
      "3 x 5 = 15\n" +
      "3 x 6 = 18\n" +
      "3 x 7 = 21\n" +
      "3 x 8 = 24\n" +
      "3 x 9 = 27\n" +
      "3 x 10 = 30\n";

    expect(result).toBe(expectedOutput);
  });

  it("should throw an error for non-integer inputs", () => {
    expect(() => fn(2.5)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn("string")).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn(null)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn(undefined)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn({})).toThrowError(
      "La saisie doit être un nombre entier."
    );
  });
});
