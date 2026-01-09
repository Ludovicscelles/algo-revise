import { validateMinTwoNumbersArray } from "../../utils/CheckFunctions";

export function getMostCommunValue(nbArray: unknown[]): number {
  validateMinTwoNumbersArray(nbArray);

  let maxCount: number = 0;
  let mostCommonValue: number = nbArray[0];

  const lengthNbArray: number = nbArray.length;

  for (let i = 0; i < lengthNbArray; i++) {
    let count: number = 0;
    for (let j = 0; j < lengthNbArray; j++) {
      if (nbArray[i] === nbArray[j]) {
        count++;
      }
    }
    if (
      count > maxCount ||
      (count === maxCount && nbArray[i] > mostCommonValue)
    ) {
      maxCount = count;
      mostCommonValue = nbArray[i];
    }
  }
  return mostCommonValue;
}

export function getMostCommunValue3(nbArray: unknown[]): number {
  validateMinTwoNumbersArray(nbArray);

  let maxCount: number = 0;

  let mostCommonValue: number = nbArray[0];

  const lengthNbArray: number = nbArray.length;

  let i = 0;

  while (i < lengthNbArray) {
    let count: number = 0;
    let j = 0;
    while (j < lengthNbArray) {
      if (nbArray[i] === nbArray[j]) {
        count++;
      }
      j++;
    }
    if (
      count > maxCount ||
      (count === maxCount && nbArray[i] > mostCommonValue)
    ) {
      maxCount = count;
      mostCommonValue = nbArray[i];
    }
    i++;
  }
  return mostCommonValue;
}

export function getMostCommunValue7(nbArray: unknown[]): number {
  validateMinTwoNumbersArray(nbArray);

  let maxCount: number = 0;

  let mostCommonValue: number = nbArray[0];

  for (let number of nbArray) {
    let count: number = 0;
    for (let otherNumber of nbArray) {
      if (number === otherNumber) {
        count++;
      }
    }
    if (count > maxCount || (count === maxCount && number > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = number;
    }
  }
  return mostCommonValue;
}

export function getMostCommunValue8(nbArray: unknown[]): number {
  validateMinTwoNumbersArray(nbArray);

  const lengthOfArray: number = nbArray.length;

  let freq: Map<number, number> = new Map();

  let maxCount: number = 0;

  let mostCommonValue: number = nbArray[0];

  for (let i = 0; i < lengthOfArray; i++) {
    const value = nbArray[i];
    let count = (freq.get(value) || 0) + 1;
    freq.set(value, count);
    if (count > maxCount || (count === maxCount && value > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = value;
    }
  }
  return mostCommonValue;
}
