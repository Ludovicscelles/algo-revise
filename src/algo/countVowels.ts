import { checkIsString } from "../utils/CheckFunctions";
import { vowels } from "../utils/Normalize";

export function countVowels(string: unknown): number {
  checkIsString(string);

  const str = string.normalize("NFC");
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

export function countVowels7(string7: unknown): number {
  checkIsString(string7);

  const str = string7.normalize("NFC");
  let count: number = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
