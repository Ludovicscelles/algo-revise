import { checkIsString } from "../../utils/checkFunctions";

export function reverseAString(string: unknown): string {
  checkIsString(string);

  let reversedString: string = "";

  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }
  return reversedString;
}

export function reverseAString2(string2: unknown): string {
  checkIsString(string2);

  let reversedString2: string = "";

  for (let i = string2.length - 1; i >= 0; i--) {
    reversedString2 += string2[i];
  }
  return reversedString2;
}

export function reverseAString7(string7: unknown): string {
  checkIsString(string7);

  let reversedString7: string = "";

  for (let str of string7) {
    reversedString7 = str + reversedString7;
  }
  return reversedString7;
}
