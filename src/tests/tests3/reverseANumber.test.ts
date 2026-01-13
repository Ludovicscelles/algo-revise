import { describe, it, expect } from "vitest";
import {
  reverseANumber,
  reverseANumber2,
  reverseANumber3,
} from "../../algo/algo3/reverseANumber";

describe.each([
  { fn: reverseANumber, name: "reverseANumber" },
  { fn: reverseANumber2, name: "reverseANumber2" },
  { fn: reverseANumber3, name: "reverseANumber3" },
])("$name", ({ fn }) => {
  it("should reverse a positive integer", () => {
    expect(fn(12345)).toBe(54321);
    expect(fn(98030)).toBe(3089);
    expect(fn(100)).toBe(1);
    expect(fn(0)).toBe(0);
  });

  it("should reverse a negative integer", () => {
    expect(fn(-12345)).toBe(-54321);
    expect(fn(-98030)).toBe(-3089);
    expect(fn(-100)).toBe(-1);
  });

  it("should handle single-digit integers", () => {
    expect(fn(7)).toBe(7);
    expect(fn(-3)).toBe(-3);
  });

  it.each([12.34, -56.78, "12345", null, undefined, {}, [], () => {}])(
    "should throw an error for non-integer input: %p",
    (input) => {
      expect(() => (fn as any)(input)).toThrow(
        "La saisie doit être un nombre entier."
      );
    }
  );
});
