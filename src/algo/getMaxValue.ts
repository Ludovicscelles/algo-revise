import { validateMinTwoIntegersArray } from "../utils/CheckFunctions";

export function getMaxValue(numArray: unknown[]): number {
  validateMinTwoIntegersArray(numArray);

  const lengthNumArray: number = numArray.length;

  let maxValue: number = numArray[0];

  for (let i = 0; i < lengthNumArray; i++) {
    if (numArray[i] > maxValue) {
      maxValue = numArray[i];
    }
  }
  return maxValue;
}

export function getMaxValue4(numArray4: unknown[]): number {
  validateMinTwoIntegersArray(numArray4);

  const arr4 = numArray4 as number[];
  let maxValue4: number = arr4[arr4.length - 1];

  let i = arr4.length - 2;

  while (i >= 0) {
    if (arr4[i] > maxValue4) {
      maxValue4 = arr4[i];
    }
    i--;
  }
  return maxValue4;
}
