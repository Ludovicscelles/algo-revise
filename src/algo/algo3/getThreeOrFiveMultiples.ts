import {
  checkIsInteger,
  checkIsPositiveNumberMinOne,
} from "../../utils/checkFunctions";

export function getThreeOrFiveMultiples(number: unknown): number[] {
  checkIsInteger(number);
  checkIsPositiveNumberMinOne(number);

  const threeOrFiveMultiples: number[] = [];

  for (let i = 3; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      threeOrFiveMultiples.push(i);
    }
  }
  return threeOrFiveMultiples;
}

export function getThreeOrFiveMultiples3(number: unknown): number[] {
  checkIsInteger(number);
  checkIsPositiveNumberMinOne(number);

  const threeOrFiveMultiples: number[] = [];

  let i = 3;

  while (i <= number) {
    if (i % 3 === 0 || i % 5 === 0) {
      threeOrFiveMultiples.push(i);
    }
    i++;
  }
  return threeOrFiveMultiples;
}

export function* getThreeOrFiveMultiples7(number: unknown): Generator<number> {
  checkIsInteger(number);
  checkIsPositiveNumberMinOne(number);
  for (let i = 3; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) yield i;
  }
}

export function* getThreeOrFiveMultiples9(number: unknown): Generator<number> {
  checkIsInteger(number);
  checkIsPositiveNumberMinOne(number);

  let i = 3;
  while (i <= number) {
    if (i % 3 === 0 || i % 5 === 0) {
      yield i;
    }
    i++;
  }
}
