import { validateMinTwoNumbersArray } from "../../utils/checkFunctions";

export function getAverage(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numbersArray.length;

  let count: number = 0;

  for (let i = 0; i < lengthNumArray; i++) {
    const value: number = numbersArray[i];
    count += value;
  }

  const average = count / lengthNumArray;
  return Math.round(average * 100) / 100;
}

export function getAverage4(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numbersArray.length;

  let count: number = 0;

  let i = lengthNumArray - 1;

  while (i >= 0) {
    const value = numbersArray[i];
    count += value;
    i--;
  }

  const average: number = count / lengthNumArray;

  return Math.round(average * 100) / 100;
}

export function getAverage8(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numbersArray.length;

  const count: number = numArray.reduce((acc: number, val: number) => {
    return acc + val;
  }, 0);

  const average: number = count / lengthNumArray;

  return Math.round(average * 100) / 100;
}

export class MathUtil {
  private numArray: number[];
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  public numbersAverage(): number {
    const numberArray = this.numArray;
    const lengthNumArray: number = numberArray.length;
    let sum: number = 0;

    for (let i = 0; i < lengthNumArray; i++) {
      const value: number = numberArray[i];
      sum += value;
    }
    const average: number = sum / lengthNumArray;
    return Math.round(average * 100) / 100;
  }
}
