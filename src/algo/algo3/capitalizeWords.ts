import { checkIsString } from "../../utils/checkFunctions";
import { wordsWithSpaces } from "../../utils/normalize";

export function capitalizeWords(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

export function capitalizeWords2(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  let i = 0;

  while (i < words.length) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    i++;
  }
  return words.join(" ");
}

export function capitalizeWords5(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  words.forEach((word, index) => {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}

export function capitalizeWords6(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  let capitalizeEachWord = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizeEachWord.join(" ");
}
