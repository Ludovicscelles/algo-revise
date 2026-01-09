import { validateMinTwoIntegersArray } from "../../utils/CheckFunctions";

export function filterOddNumbers(nbrArray: unknown[]): number[] {
  validateMinTwoIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 !== 0) {
      oddNbrArray.push(numbersArray[i]);
    }
  }
  return oddNbrArray;
}

export function filterOddNumbers3(nbrArray: unknown[]): number[] {
  validateMinTwoIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  let i = 0;

  while (i < numbersArray.length) {
    if (numbersArray[i] % 2 !== 0) {
      oddNbrArray.push(numbersArray[i]);
    }
    i++;
  }
  return oddNbrArray;
}

export function filterOddNumbers7(nbrArray: unknown[]): number[] {
  validateMinTwoIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  for (let number of numbersArray) {
    if (number % 2 !== 0) {
      oddNbrArray.push(number);
    }
  }
  return oddNbrArray;
}

export function filterOddNumbers8(nbrArray: unknown[]): number[] {
  validateMinTwoIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  const oddNumbersArray: number[] = numbersArray.reduce(
    (odd: number[], number: number) => {
      if (number % 2 !== 0) {
        odd.push(number);
      }
      return odd;
    },
    []
  );
  return oddNumbersArray;
}
