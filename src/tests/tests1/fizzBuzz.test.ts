import { describe, it, expect } from "vitest";
import { fizzBuzz3, fizzBuzz5 } from "../../algo/algo1/fizzBuzz";

describe.each([
  ["fizzBuzz3", fizzBuzz3],
  ["fizzBuzz5", fizzBuzz5],
])("%s", (_name, fn) => {
  it("should return correct FizzBuzz array for input 15", () => {
    const result = fn(15);
    expect(result).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });

  it("should return correct FizzBuzz array for input 5", () => {
    const result = fn(5);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("should validate if input is an integer and >= 1", () => {
    expect(() => fn(5.5)).toThrowError("La saisie doit être un nombre entier.");
    expect(() => fn(-3)).toThrowError(
      "Le nombre saisi doit être supérieur ou égal à un."
    );
    expect(() => fn(0)).toThrowError(
      "Le nombre saisi doit être supérieur ou égal à un."
    );
    expect(() => (fn as any)("10")).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => (fn as any)(null)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => (fn as any)(undefined)).toThrowError(
      "La saisie doit être un nombre entier."
    );
    expect(() => (fn as any)({})).toThrowError(
      "La saisie doit être un nombre entier."
    );
  });
});
