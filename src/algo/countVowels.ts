import { checkIsString } from "../utils/CheckFunctions";
import { vowels } from "../utils/Normalize";

export function countVowels(string: unknown): number {
  checkIsString(string);

  let count: number = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}

export function countVowels7(string7: unknown): number {
  checkIsString(string7);

  let count: number = 0;

  for (let str of string7) {
    if (vowels.includes(str)) {
      count++;
    }
  }
  return count;
}
