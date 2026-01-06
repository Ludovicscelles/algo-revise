import { validateMinTwoStringsArray } from "../../utils/CheckFunctions";

export function reverseArray4(stArr4: unknown[]): string[] {
  validateMinTwoStringsArray(stArr4);

  const lengthArr4: number = stArr4.length;
  let newStArr4: string[] = [];

  let i = lengthArr4 - 1;

  while (i >= 0) {
    newStArr4.push(stArr4[i]);
    i--;
  }
  return newStArr4;
}

export function reverseArray5(stArr5: unknown[]): string[] {
  validateMinTwoStringsArray(stArr5);

  const lengthArr5: number = stArr5.length;
  let newStArr5: string[] = [];

  let i = 0;

  do {
    newStArr5[i] = stArr5[lengthArr5 - i - 1];
    i++;
  } while (i < lengthArr5);
  return newStArr5;
}

export function reverseArray7(stArr7: unknown[]): string[] {
  validateMinTwoStringsArray(stArr7);

  const lengthArr7: number = stArr7.length;
  let newStArr7: string[] = [];

  let i = 0;

  for (let element of stArr7) {
    newStArr7[lengthArr7 - 1 - i] = element;
    i++;
  }
  return newStArr7;
}
