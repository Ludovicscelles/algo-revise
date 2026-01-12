import { validateMinOneNumbersArray } from "../../utils/CheckFunctions";

export function arraysFusion(
  nbArray1: unknown[],
  nbArray2: unknown[]
): number[] {
  validateMinOneNumbersArray(nbArray1);
  validateMinOneNumbersArray(nbArray2);

  const lengthOfArray1: number = nbArray1.length;

  const lengthOfArray2: number = nbArray2.length;

  let mergedArray: number[] = [];

  for (let i = 0; i < lengthOfArray1; i++) {
    if (!mergedArray.includes(nbArray1[i])) {
      mergedArray.push(nbArray1[i]);
    }
  }
  for (let i = 0; i < lengthOfArray2; i++) {
    if (!mergedArray.includes(nbArray2[i])) {
      mergedArray.push(nbArray2[i]);
    }
  }

  const sortedArray: number[] = mergedArray.sort((a, b) => a - b);

  return sortedArray;
}

export function arraysFusion3(
  nbArray1: unknown[],
  nbArray2: unknown[]
): number[] {
  validateMinOneNumbersArray(nbArray1);
  validateMinOneNumbersArray(nbArray2);

  const lengthOfArray1: number = nbArray1.length;
  const lengthOfArray2: number = nbArray2.length;

  let mergedArray: number[] = [];

  let i = 0;
  while (i < lengthOfArray1) {
    if (!mergedArray.includes(nbArray1[i])) mergedArray.push(nbArray1[i]);
    i++;
  }
  i = 0;
  while (i < lengthOfArray2) {
    if (!mergedArray.includes(nbArray2[i])) mergedArray.push(nbArray2[i]);
    i++;
  }

  const sortedArray: number[] = mergedArray.sort((a, b) => a - b);

  return sortedArray;
}

export function arraysFusion8(
  nbArray1: unknown[],
  nbArray2: unknown[]
): number[] {
  validateMinOneNumbersArray(nbArray1);
  validateMinOneNumbersArray(nbArray2);

  let mergedArray: number[] = [...nbArray1, ...nbArray2].reduce(
    (acc: number[], val: number) => {
      if (!acc.includes(val)) acc.push(val);

      return acc;
    },
    []
  );

  const sortedArray: number[] = mergedArray.sort((a, b) => a - b);

  return sortedArray;
}

export function arraysFusion9(
  nbArray1: unknown[],
  nbArray2: unknown[]
): number[] {
  validateMinOneNumbersArray(nbArray1);
  validateMinOneNumbersArray(nbArray2);

  const mergedArray: number[] = nbArray1
    .concat(nbArray2)
    .filter((value, pos, arr) => arr.indexOf(value) === pos);

  const sortedArray: number[] = mergedArray.sort((a, b) => a - b);

  return sortedArray;
}
