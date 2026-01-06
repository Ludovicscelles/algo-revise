import {
  checkIsInteger,
  checkIsPositiveNumberMinOne,
} from "../../utils/CheckFunctions";

export function sumOfNumbers(nbr: unknown): number {
  checkIsInteger(nbr);
  checkIsPositiveNumberMinOne(nbr);

  let total: number = 0;

  for (let i = 1; i <= nbr; i++) {
    total += i;
  }
  return total;
}

export function sumOfNumbers5(nbr5: unknown): number {
  checkIsInteger(nbr5);
  checkIsPositiveNumberMinOne(nbr5);

  let total: number = 0;

  let i = 1;

  do {
    total += i;
    i++;
  } while (i <= nbr5);
  return total;
}
