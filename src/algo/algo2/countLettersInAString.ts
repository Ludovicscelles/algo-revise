import { checkIsString } from "../../utils/CheckFunctions";
import { cleanString } from "../../utils/Normalize";

export function countLettersInAString(sentence: unknown): number {
  checkIsString(sentence);

  const normalizeSentence: string = cleanString(sentence);

  let count: number = 0;

  for (let i = 0; i < normalizeSentence.length; i++) {
    count++;
  }
  return count;
}

export function countLettersInAString3(sentence: unknown): number {
  checkIsString(sentence);

  const normalizeSentence: string = cleanString(sentence);

  let count: number = 0;

  let i = 0;

  while (i < normalizeSentence.length) {
    count++;
    i++;
  }
  return count;
}

export function countLettersInAString4(sentence: unknown): number {
  checkIsString(sentence);

  const normalizeSentence: string = cleanString(sentence);

  let count: number = 0;

  let i = normalizeSentence.length - 1;

  while (i >= 0) {
    count++;
    i--;
  }
  return count;
}

export function countLettersInAString7(sentence: unknown): number {
  checkIsString(sentence);

  const cleanStringArray: string[] = cleanString(sentence).split("");

  let count: number = 0;

  for (let string of cleanStringArray) {
    count++;
  }
  return count;
}

export function countLettersInAString8(sentence: unknown): number {
  checkIsString(sentence);

  const cleanStringArray: string[] = cleanString(sentence).split("");

  const count = cleanStringArray.reduce((total, character) => {
    return total + 1;
  }, 0);

  return count;
}
