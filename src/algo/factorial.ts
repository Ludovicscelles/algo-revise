import { checkIsInteger, checkIsPositiveNumber } from "../utils/CheckFunctions";

{
  /*
  2v1. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

export function factorial(number: unknown): number {
  checkIsInteger(number);
  checkIsPositiveNumber(number);
  let factorialResult: number = 1;
  for (let i = 2; i <= number; i++) {
    factorialResult *= i;
  }
  return factorialResult;
}

{
  /*
  2v2. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

export function factorial2(number2: unknown): number {
  checkIsInteger(number2);
  checkIsPositiveNumber(number2);
  let factorialResult2: number = 1;
  for (let i = number2; i >= 2; i--) {
    factorialResult2 *= i;
  }

  return factorialResult2;
}

{
  /*
  2v3. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

export function factorial3(number3: unknown): number {
  checkIsInteger(number3);
  checkIsPositiveNumber(number3);
  let factorialResult3: number = 1;

  let i = 2;

  while (i <= number3) {
    factorialResult3 *= i;
    i++;
  }

  return factorialResult3;
}

{
  /*
  2v4. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

export function factorial4(number4: unknown): number {
  checkIsInteger(number4);
  checkIsPositiveNumber(number4);
  let factorialOfANumber4: number = 1;

  let i = number4;

  while (i >= 2) {
    factorialOfANumber4 *= i;
    i--;
  }

  return factorialOfANumber4;
}