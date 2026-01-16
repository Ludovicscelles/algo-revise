import { checkIsInteger } from "../../utils/checkFunctions";

export function digitsSum(integer: unknown): number {
  checkIsInteger(integer);

  let sum: number = 0;

  let integerAsString: string = Math.abs(integer).toString();

  for (let i = 0; i < integerAsString.length; i++) {
    const digit: number = Number(parseInt(integerAsString[i]));
    sum += digit;
  }
  return sum;
}

export function digitsSum4(integer4: unknown): number {
  checkIsInteger(integer4);

  let sum4: number = 0;

  let integerAsString4: string = Math.abs(integer4).toString();

  let i = integerAsString4.length - 1;

  while (i >= 0) {
    const digit4: number = Number(parseInt(integerAsString4[i]));
    sum4 += digit4;
    i--;
  }
  return sum4;
}

export function digitsSum8(integer8: unknown): number {
  checkIsInteger(integer8);

  let sum8: number = 0;

  let integerAsString8: string = Math.abs(integer8).toString();
  const chars: string[] = [...integerAsString8];

  for (const index in chars) {
    const digit8: number = Number(parseInt(integerAsString8[index]));
    sum8 += digit8;
  }
  return sum8;
}

export class DigitsSumUtils {
  constructor(private integer: number) {
    checkIsInteger(integer);
  }

  sum(): number {
    let sum: number = 0;
    let integerAsString: string = Math.abs(this.integer).toString();

    for (let str of integerAsString) {
      const digit: number = Number(parseInt(str));
      sum += digit;
    }
    return sum;
  }
}
