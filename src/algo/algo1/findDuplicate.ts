import { validateMinTwoNumbersArray } from "../../utils/checkFunctions";

export function findDuplicate3(nbArray3: unknown[]): number[] {
  validateMinTwoNumbersArray(nbArray3);

  let duplicateNumbers3: number[] = [];

  const lengthNbArray3: number = nbArray3.length;

  let i = 0;

  while (i < lengthNbArray3) {
    let j = i + 1;
    while (j < lengthNbArray3) {
      if (nbArray3[i] === nbArray3[j]) {
        if (!duplicateNumbers3.includes(nbArray3[i])) {
          duplicateNumbers3.push(nbArray3[i]);
        }
      }
      j++;
    }
    i++;
  }
  return duplicateNumbers3;
}

export function findDuplicate5(nbArray5: unknown[]): number[] {
  validateMinTwoNumbersArray(nbArray5);

  let sortedNbArray5 = [...nbArray5].sort((a, b) => a - b);

  let duplicateNumbers5: number[] = [];

  const lengthNbArray5: number = sortedNbArray5.length;

  let i = 0;

  do {
    if (
      sortedNbArray5[i] === sortedNbArray5[i + 1] &&
      !duplicateNumbers5.includes(sortedNbArray5[i])
    ) {
      duplicateNumbers5.push(sortedNbArray5[i]);
    }
    i++;
  } while (i < lengthNbArray5 - 1);
  return duplicateNumbers5;
}

export function findDuplicate7(nbArray7: unknown[]): number[] {
  validateMinTwoNumbersArray(nbArray7);

  let justOnce: number[] = [];

  let duplicates: number[] = [];

  for (let num of nbArray7) {
    if (justOnce.includes(num) && !duplicates.includes(num)) {
      duplicates.push(num);
    }
    justOnce.push(num);
  }
  return duplicates;
}
