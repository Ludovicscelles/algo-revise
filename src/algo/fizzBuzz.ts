import { checkIsInteger, checkIsPositiveNumber, checkIsPositiveNumberMinOne } from "../utils/CheckFunctions";

export function fizzBuzz3(number3: unknown): string[] {
  checkIsInteger(number3);
  checkIsPositiveNumberMinOne(number3);

  let arrayFizzBuzz3: string[] = [];

  let i = 1;

  while (i <= number3) {
    if (i % 3 === 0 && i % 5 === 0) arrayFizzBuzz3.push(`FizzBuzz`);
    else if (i % 5 === 0) arrayFizzBuzz3.push(`Buzz`);
    else if (i % 3 === 0) arrayFizzBuzz3.push(`Fizz`);
    else arrayFizzBuzz3.push(i.toString());
    i++;
  }
  return arrayFizzBuzz3;
}

export function fizzBuzz5(number5: number): string[] {
  checkIsInteger(number5);
  checkIsPositiveNumberMinOne(number5);

  let arrayFizzBuzz5: string[] = [];

  let i = 1;

  do {
    if (i % 3 === 0 && i % 5 === 0) arrayFizzBuzz5.push(`FizzBuzz`);
    else if (i % 5 === 0) arrayFizzBuzz5.push(`Buzz`);
    else if (i % 3 === 0) arrayFizzBuzz5.push(`Fizz`);
    else arrayFizzBuzz5.push(i.toString());
    i++;
  } while (i <= number5);
  return arrayFizzBuzz5;
}
