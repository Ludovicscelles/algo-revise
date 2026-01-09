import { checkIsString } from "../../utils/CheckFunctions";
import { words } from "../../utils/Normalize";

export function findTheLongestWord(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  let longestWord: string = "";

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length >= longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
}

export function findTheLongestWord5(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  if (wordsArray.length === 0) {
    return "";
  }

  let longestWord: string = "";

  let i = 0;

  do {
    if (wordsArray[i].length >= longestWord.length) {
      longestWord = wordsArray[i];
    }
    i++;
  } while (i < wordsArray.length);
  return longestWord;
}

export function findTheLongestWord8(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  const longestWord = wordsArray.reduce((longest, word) => {
    if (word.length >= longest.length) return word;
    else return longest;
  }, "");
  return longestWord;
}
