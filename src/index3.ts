import { func } from "joi";
import { checkIsInteger } from "./utils/CheckFunctions";

{
  /*
  🔢 1. Somme des chiffres pairs
Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
📌 Exemple : 2489 → 2 + 4 + 8 = 14
Boucle for.
*/
}

function evenDigitsSum(integer: unknown): number {
  checkIsInteger(integer);

  const integerAsString: string = Math.abs(integer).toString();

  let sumOfEvenDigits: number = 0;

  for (let i = 0; i < integerAsString.length; i++) {
    const digit: number = parseInt(integerAsString[i]);
    if (digit % 2 === 0) sumOfEvenDigits += digit;
  }
  return sumOfEvenDigits;
}

const integer = 2021;
const sumOfEvenDigits = evenDigitsSum(integer);
console.log(sumOfEvenDigits);

{
  /*
  🔢 1v2. Somme des chiffres pairs
Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
📌 Exemple : 2489 → 2 + 4 + 8 = 14
Boucle for inversé.
*/
}

function evenDigitsSum2(integer: unknown): number {
  checkIsInteger(integer);

  const integerAsString: string = Math.abs(integer).toString();

  let sumOfEvenDigits: number = 0;

  for (let i = integerAsString.length - 1; i >= 0; i--) {
    const digit: number = parseInt(integerAsString[i]);
    if (digit % 2 === 0) sumOfEvenDigits += digit;
  }
  return sumOfEvenDigits;
}

const integer2 = -2489;
const sumOfEvenDigits2 = evenDigitsSum2(integer2);
console.log(sumOfEvenDigits2);

{
  /*
  🔢 1v3. Somme des chiffres pairs
Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
📌 Exemple : 2489 → 2 + 4 + 8 = 14
Boucle while.
*/
}

function evenDigitsSum3(integer: unknown): number {
  checkIsInteger(integer);

  const integerAsString: string = Math.abs(integer).toString();

  let sumOfEvenDigits: number = 0;

  let i = 0;

  while (i < integerAsString.length) {
    const digit: number = parseInt(integerAsString[i]);
    if (digit % 2 === 0) sumOfEvenDigits += digit;
    i++;
  }
  return sumOfEvenDigits;
}

const integer3 = 13579;
const sumOfEvenDigits3 = evenDigitsSum3(integer3);
console.log(sumOfEvenDigits3);

{
  /*
  🔢 1v4. Somme des chiffres pairs
Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
📌 Exemple : 2489 → 2 + 4 + 8 = 14
Boucle while inversé.
*/
}

function evenDigitsSum4(integer: unknown): number {
  checkIsInteger(integer);

  const integerAsString: string = Math.abs(integer).toString();

  let sumOfEvenDigits: number = 0;

  let i = integerAsString.length - 1;

  while (i >= 0) {
    const digit: number = parseInt(integerAsString[i]);
    if (digit % 2 === 0) sumOfEvenDigits += digit;
    i--;
  }
  return sumOfEvenDigits;
}

const integer4 = 24681;
const sumOfEvenDigits4 = evenDigitsSum4(integer4);
console.log(sumOfEvenDigits4);

{
  /*
  🔢 1v5. Somme des chiffres pairs
Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
📌 Exemple : 2489 → 2 + 4 + 8 = 14
Boucle do while.
*/
}

function evenDigitsSum5(integer: unknown): number {
  checkIsInteger(integer);

  const integerAsString: string = Math.abs(integer).toString();

  let sumOfDigits: number = 0;

  let i = 0;

  do {
    const digit: number = parseInt(integerAsString[i]);
    if (digit % 2 === 0) sumOfDigits += digit;
    i++;
  } while (i < integerAsString.length);
  return sumOfDigits;
}

const integer5 = -24689;
const sumOfEvenDigits5 = evenDigitsSum5(integer5);
console.log(sumOfEvenDigits5);