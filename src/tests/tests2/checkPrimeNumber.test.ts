import {
  checkPrimeNumber,
  checkPrimeNumber2,
  checkPrimeNumber3,
  checkPrimeNumber4,
  checkPrimeNumber5,
  checkPrimeNumber6,
} from "../../algo/algo2/checkPrimeNumber";

import { describe, it, expect } from "vitest";

describe.each([
  { fn: checkPrimeNumber, name: "checkPrimeNumber" },
  { fn: checkPrimeNumber2, name: "checkPrimeNumber2" },
  { fn: checkPrimeNumber3, name: "checkPrimeNumber3" },
  { fn: checkPrimeNumber4, name: "checkPrimeNumber4" },
  { fn: checkPrimeNumber5, name: "checkPrimeNumber5" },
  { fn: checkPrimeNumber6, name: "checkPrimeNumber6" },
])("$name", ({ fn }) => {
  it("should return that the number is prime for prime numbers", () => {
    expect(fn(2)).toBe("Il s'agit d'un nombre premier");
    expect(fn(3)).toBe("Il s'agit d'un nombre premier");
    expect(fn(5)).toBe("Il s'agit d'un nombre premier");
    expect(fn(7)).toBe("Il s'agit d'un nombre premier");
    expect(fn(11)).toBe("Il s'agit d'un nombre premier");
    expect(fn(13)).toBe("Il s'agit d'un nombre premier");
    expect(fn(17)).toBe("Il s'agit d'un nombre premier");
    expect(fn(19)).toBe("Il s'agit d'un nombre premier");
    expect(fn(23)).toBe("Il s'agit d'un nombre premier");
  });

  it("should return that the number is not prime for non-prime numbers", () => {
    expect(fn(1)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(4)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(6)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(8)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(9)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(10)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(12)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(14)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(15)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(16)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(18)).toBe("Il ne s'agit pas d'un nombre premier");
    expect(fn(20)).toBe("Il ne s'agit pas d'un nombre premier");
  });

  it("should throw an error for invalid inputs", () => {
    expect(() => fn(-5)).toThrow(
      "Le nombre saisi doit être supérieur ou égal à un."
    );
    expect(() => fn(0)).toThrow(
      "Le nombre saisi doit être supérieur ou égal à un."
    );
    expect(() => fn(3.5)).toThrow("La saisie doit être un nombre entier.");
    expect(() => fn("string")).toThrow("La saisie doit être un nombre entier.");
    expect(() => fn(null)).toThrow("La saisie doit être un nombre entier.");
    expect(() => fn(undefined)).toThrow(
      "La saisie doit être un nombre entier."
    );
    expect(() => fn([])).toThrow("La saisie doit être un nombre entier.");
    expect(() => fn({})).toThrow("La saisie doit être un nombre entier.");
  });
});
