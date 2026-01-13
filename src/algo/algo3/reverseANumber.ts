import { checkIsInteger } from "../../utils/CheckFunctions";

export function reverseANumber(num: unknown): number {
  checkIsInteger(num);

  let sign = Math.sign(num);
  let numToReverse: number = Math.abs(num);

  let revNum: number = 0;

  while (numToReverse > 0) {
    revNum = revNum * 10 + (numToReverse % 10);
    numToReverse = Math.floor(numToReverse / 10);
  }
  return revNum * sign;
}

export function reverseANumber2(num: unknown): number {
  checkIsInteger(num);

  let sign = Math.sign(num);
  let numToReverse: number = Math.abs(num);

  let revNum: number = 0;

  for (let n = numToReverse; n > 0; n = Math.floor(n / 10)) {
    revNum = revNum * 10 + (n % 10);
  }
  return revNum * sign;
}

export function reverseANumber3(num: unknown): number {
  checkIsInteger(num);

  let sign = Math.sign(num);

  let n: number = Math.abs(num);

  let revNum: number = 0;

  do {
    revNum = revNum * 10 + (n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return revNum * sign;
}
