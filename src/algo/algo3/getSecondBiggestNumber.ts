import { validateMinTwoNumbersArray } from "../../utils/checkFunctions";

export function getSecondBiggestNumber(numArr: unknown[]): number {
  validateMinTwoNumbersArray(numArr);

  let biggestNumber: number = numArr[0];
  let secondBiggestNumber: number = -Infinity;

  const lengthNumArray: number = numArr.length;

  for (let i = 1; i < lengthNumArray; i++) {
    if (numArr[i] > biggestNumber) {
      secondBiggestNumber = biggestNumber;
      biggestNumber = numArr[i];
    } else if (numArr[i] < biggestNumber && numArr[i] > secondBiggestNumber) {
      secondBiggestNumber = numArr[i];
    }
  }

  if (secondBiggestNumber === -Infinity)
    throw new Error(`Il n'existe pas de deuxième plus grand nombre distinct`);
  return secondBiggestNumber;
}

export function getSecondBiggestNumber4(numArr: unknown[]): number {
  validateMinTwoNumbersArray(numArr);

  const lengthNumArray: number = numArr.length;

  let biggestNumber: number = numArr[lengthNumArray - 1];

  let secondBiggestNumber: number = -Infinity;

  let i = lengthNumArray - 2;

  while (i >= 0) {
    const current: number = numArr[i];
    if (current > biggestNumber) {
      secondBiggestNumber = biggestNumber;
      biggestNumber = current;
    } else if (current < biggestNumber && current > secondBiggestNumber) {
      secondBiggestNumber = current;
    }
    i--;
  }

  if (secondBiggestNumber === -Infinity)
    throw new Error(`Il n'y a pas de deuxième nombre distinct`);

  return secondBiggestNumber;
}

export function getSecondBiggestNumber8(numArr: unknown[]): number {
  validateMinTwoNumbersArray(numArr);

  const sortedNumArray: number[] = [...numArr]
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort((a, b) => a - b);

  if (sortedNumArray.length < 2)
    throw new Error(`Il n'y a pas de deuxième plus grand nombre distinct`);

  return sortedNumArray[sortedNumArray.length - 2];
}

export function getSecondBiggestNumber9(numArr: unknown[]): number {
  validateMinTwoNumbersArray(numArr);

  const { biggestNumber, secondBiggestNumber } = numArr.reduce(
    (acc, val) => {
      if (val > acc.biggestNumber) {
        return {
          biggestNumber: val,
          secondBiggestNumber: acc.biggestNumber,
        };
      }
      if (val < acc.biggestNumber && val > acc.secondBiggestNumber) {
        return { biggestNumber: acc.biggestNumber, secondBiggestNumber: val };
      }
      return acc;
    },
    { biggestNumber: -Infinity, secondBiggestNumber: -Infinity },
  );

  if (secondBiggestNumber === -Infinity)
    throw new Error(`Il n'y a pas de deuxième plus grand nombre distinct`);

  return secondBiggestNumber;
}
