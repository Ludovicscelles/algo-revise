import { validateMinTwoIntegersArray } from "../utils/CheckFunctions";

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
