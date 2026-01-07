import { describe, it, expect } from "vitest";
import {
  factorial,
  factorial2,
  factorial3,
  factorial4,
} from "../../algo/algo1/factorial";

describe.each([
  { fn: factorial, name: "factorial" },
  { fn: factorial2, name: "factorial2" },
  { fn: factorial3, name: "factorial3" },
  { fn: factorial4, name: "factorial4" },
])("$name", ({ fn }) => {
  it("should return the factorial of a positive integer", () => {
    expect(fn(5)).toBe(120);
    expect(fn(0)).toBe(1);
    expect(fn(1)).toBe(1);
    expect(fn(6)).toBe(720);
  });

  it("should throw an error if input is not a valid integer", () => {
    expect(() => fn(-3)).toThrowError("Le nombre saisi doit être positif.");
    expect(() => fn(4.5)).toThrowError("La saisie doit être un nombre entier.");
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
    expect(() => fn([])).toThrowError(
      "La saisie doit être un nombre entier."
    );
  });
});
