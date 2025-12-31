import { checkIsString } from "../utils/CheckFunctions";
import { normalizedStr } from "../utils/Normalize";

export function checkPalindrome(str1: unknown): string {
  checkIsString(str1);
  const normalizedStr1: string = normalizedStr(str1);

  const lengthNormalizedStr1: number = normalizedStr1.length;
  const halfLength: number = Math.floor(lengthNormalizedStr1 / 2);

  for (let i = 0; i < halfLength; i++) {
    if (normalizedStr1[i] !== normalizedStr1[lengthNormalizedStr1 - 1 - i]) {
      return `Ceci n'est pas un palindrome.`;
    }
  }
  return `Il s'agit bien d'un palindrome.`;
}


export function checkPalindrome4(str4: unknown): string {
  checkIsString(str4);
  const normalizedStr4: string = normalizedStr(str4);

  const lengthNormalizedStr4: number = normalizedStr4.length;
  const halfLength4: number = Math.floor(lengthNormalizedStr4 / 2);

  let i = lengthNormalizedStr4 - 1;

  while (i >= halfLength4) {
    if (normalizedStr4[i] !== normalizedStr4[lengthNormalizedStr4 - 1 - i]) {
      return `Ceci n'est pas un palindrome.`;
    }
    i--;
  }
  return `Il s'agit bien d'un palindrome.`;
}

export function checkPalindrome7(str7: unknown): string {
  checkIsString(str7);
  const normalizedStr7: string = normalizedStr(str7);

  const lengthNormalizedStr7: number = normalizedStr7.length;

  let i = 0;

  for (let str of normalizedStr7) {
    let oppositeI = lengthNormalizedStr7 - 1 - i;

    if (i >= oppositeI) break;

    if (str !== normalizedStr7[oppositeI]) {
      return `Ceci n'est pas un palindrome.`;
    }

    i++;
  }
  return `Il s'agit bien d'un palindrome.`;
}
