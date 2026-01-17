import { describe, it, expect } from "vitest";

import {
  compressString,
  compressString4,
  compressString5,
} from "../../algo/algo3/compressString";

describe.each([
  { fn: compressString, name: "compressString" },
  { fn: compressString4, name: "compressString4" },
  { fn: compressString5, name: "compressString5" },
])("$name", ({ fn }) => {
  it("compress a string with consecutive characters", () => {
    expect(fn("addccbb")).toBe("a1d2c2b2");
    expect(fn("abcd")).toBe("a1b1c1d1");
    expect(fn("bbbbbbbcccooouuu")).toBe("b7c3o3u3");
    expect(fn("aaabbaaac")).toBe("a3b2a3c1");
    expect(fn("")).toBe("");
  });

  it.each([null, undefined, 123, {}, [], true, false])(
    "throws an error for non-string input: %p",
    (input) => {
      expect(() => fn(input as any)).toThrow(
        "La saisie d'entrée doit être une chaîne de caractères.",
      );
    },
  );
});
