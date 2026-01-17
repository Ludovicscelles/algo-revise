import { checkIsString } from "../../utils/checkFunctions";

export function compressString(str: unknown): string {
  checkIsString(str);

  if (str.length === 0) {
    return "";
  }

  let count: number = 1;
  let compressedString: string = "";

  for (let i = 0; i < str.length; i++) {
    const current: string = str[i];
    const next: string = str[i + 1];
    if (current === next) {
      count++;
    } else {
      compressedString += `${current}${count}`;
      count = 1;
    }
  }
  return compressedString;
}

export function compressString4(str: unknown): string {
  checkIsString(str);

  if (str.length === 0) {
    return "";
  }

  let compressedString: string = "";
  let count: number = 1;
  let previous: string | null = null;

  for (let char of str) {
    if (char === previous) {
      count++;
    } else {
      if (previous !== null) {
        compressedString += `${previous}${count}`;
      }
      count = 1;
      previous = char;
    }
  }

  compressedString += `${previous}${count}`;

  return compressedString;
}

export function compressString5(str: unknown): string {
  checkIsString(str);
  return str.replace(/(.)\1*/g, (match, char) => `${char}${match.length}`);
}
