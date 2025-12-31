export const cleanString: (str: string) => string = (str) => {
  return str.replace(/[^\p{L}]/gu, "");
};

// function to clean a string by removing all non-letter characters but keeping accented letters.
const cleanStringWithComments: (str: string) => string = (str) => {
  // use regex to replace all non-letter characters with an empty string
  return str.replace(/[^\p{L}]/gu, "");
};

export const normalizedStr = (str: string): string =>
  str
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

const normalizedStrWithComments = (str: string): string =>
  // normalize the input string
  str
    // convert to lowercase
    .toLocaleLowerCase()
    // remove accents by normalizing to NFD form, NFD means Normalization Form Decomposition
    .normalize("NFD")
    // remove diacritical marks, diatritical means accent marks
    .replace(/[\u0300-\u036f]/g, "")
    // remove non-alphanumeric characters
    .replace(/[^a-z0-9]/g, "");

export const stringWithoutSpaces: (str: string) => string = (str) => {
  return str.replace(/\s+/g, "");
};

// function to remove all spaces from a string
export const stringWithoutSpacesWithComments: (str: string) => string = (
  str
) => {
  // use regex to replace all whitespace characters with an empty string
  return str.replace(/\s+/g, "");
};

export const words: (str: string) => string[] = (str) => {
  return str
    .split(" ")
    .map((word) => word.replace(/[^\p{L}\p{N}-]/gu, ""))
    .filter((word) => word.length > 0);
};

// function to split a string into words, removing punctuation
// keeps letters (including accented), numbers, and hyphens within words
export const wordsWithComments: (str: string) => string[] = (str) => {
  return (
    str
      // split the string by spaces to get individual words
      .split(" ")
      // clean each word by removing unwanted characters
      // keep letters (including accented), numbers, and hyphens
      .map((word) => word.replace(/[^\p{L}\p{N}-]/gu, ""))
      // filter out any empty strings resulting from the cleaning process
      .filter((word) => word.length > 0)
  );
};

export const wordsWithSpaces: (str: string) => string[] = (str) => {
  return str.toLowerCase().trim().split(/\s+/);
};

