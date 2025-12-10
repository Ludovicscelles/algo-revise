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

  let sumOfEvenDigits: number = 0;

  let i = 0;

  do {
    const digit: number = parseInt(integerAsString[i]);
    if (digit % 2 === 0) sumOfEvenDigits += digit;
    i++;
  } while (i < integerAsString.length);
  return sumOfEvenDigits;
}

const integer5 = -24689;
const sumOfEvenDigits5 = evenDigitsSum5(integer5);
console.log(sumOfEvenDigits5);

{
  /*
  🔢 1v6. Somme des chiffres pairs
Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
📌 Exemple : 2489 → 2 + 4 + 8 = 14
Boucle do while inversé.
*/
}

function evenDigitsSum6(integer: unknown): number {
  checkIsInteger(integer);

  const integerAsString: string = Math.abs(integer).toString();

  let sumOfEvenDigits: number = 0;

  let i = integerAsString.length - 1;

  do {
    const digit: number = parseInt(integerAsString[i]);
    if (digit % 2 === 0) sumOfEvenDigits += digit;
    i--;
  } while (i >= 0);
  return sumOfEvenDigits;
}

const integer6 = 1357246849;
const sumOfEvenDigits6 = evenDigitsSum6(integer6);
console.log(sumOfEvenDigits6);

{
  /*
  🔢 1v7. Somme des chiffres pairs
Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
📌 Exemple : 2489 → 2 + 4 + 8 = 14
Boucle for ... of.
*/
}

function evenDigitsSum7(integer: unknown): number {
  checkIsInteger(integer);

  const integerAsString: string = Math.abs(integer).toString();

  let sumOfDigits: number = 0;

  for (const char of integerAsString) {
    const digit: number = parseInt(char);
    if (digit % 2 === 0) sumOfDigits += digit;
  }
  return sumOfDigits;
}

const integer7 = -11122;
const sumOfEvenDigits7 = evenDigitsSum7(integer7);
console.log(sumOfEvenDigits7);

{
  /*
  🔢 1v8. Somme des chiffres pairs
Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
📌 Exemple : 2489 → 2 + 4 + 8 = 14
Méthode reduce.
*/
}

function evenDigitsSum8(integer: unknown): number {
  checkIsInteger(integer);

  const integerAsString: string = Math.abs(integer).toString();

  const sumOfDigits: number = integerAsString
    .split("")
    .reduce((acc: number, val: string) => {
      const digit: number = parseInt(val);
      if (digit % 2 === 0) acc += digit;
      return acc;
    }, 0);
  return sumOfDigits;
}

const integer8 = 123456;
const sumOfEvenDigits8 = evenDigitsSum8(integer8);
console.log(sumOfEvenDigits8);

{
  /*
  🔢 1v9. Somme des chiffres pairs
Écris une fonction qui prend un nombre entier et retourne la somme de ses chiffres pairs.
📌 Exemple : 2489 → 2 + 4 + 8 = 14
Méthode forEach.
*/
}

function evenDigitsSum9(integer: unknown): number {
  checkIsInteger(integer);

  const intStrArray: string[] = Math.abs(integer).toString().split("");

  let sumOfEvenDigits: number = 0;

  intStrArray.forEach((char) => {
    const digit: number = parseInt(char);
    if (digit % 2 === 0) sumOfEvenDigits += digit;
  });
  return sumOfEvenDigits;
}

const integer9 = -86425;
const sumOfEvenDigits9 = evenDigitsSum9(integer9);
console.log(sumOfEvenDigits9);

{
  /*
  🔁 2. Inverser un nombre
Écris une fonction qui prend un entier et retourne son inverse.
📌 Exemple : 1234 → 4321
(sans convertir en string si tu veux un vrai défi)
Boucle while inversé
*/
}

function reverseANumber(num: unknown): number {
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

const num = -12345;
const reversedNum = reverseANumber(num);
console.log(reversedNum);

{
  /*
  🔁 2. Inverser un nombre
Écris une fonction qui prend un entier et retourne son inverse.
📌 Exemple : 1234 → 4321
(sans convertir en string si tu veux un vrai défi)
Boucle for inversé
*/
}

function reverseANumber2(num: unknown): number {
  checkIsInteger(num);

  let sign = Math.sign(num);
  let numToReverse: number = Math.abs(num);

  let revNum: number = 0;

  for (let n = numToReverse; n > 0; n = Math.floor(n / 10)) {
    revNum = revNum * 10 + (n % 10);
  }
  return revNum * sign;
}

const num2 = -67890;
const reversedNum2 = reverseANumber2(num2);
console.log(reversedNum2);
