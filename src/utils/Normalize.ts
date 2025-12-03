export const cleanString: (str: string) => string = (str) => {
  return str.replace(/[^\p{L}]/gu, "");
};

// function to clean a string by removing all non-letter characters but keeping accented letters.
const cleanStringWithComments: (str: string) => string = (str) => {
  // use regex to replace all non-letter characters with an empty string
  return str.replace(/[^\p{L}]/gu, "");
};

