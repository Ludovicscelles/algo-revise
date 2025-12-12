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
  🔁 2v2. Inverser un nombre
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

{
  /*
  🔁 2v3. Inverser un nombre
Écris une fonction qui prend un entier et retourne son inverse.
📌 Exemple : 1234 → 4321
(sans convertir en string si tu veux un vrai défi)
Boucle do while inversé
*/
}

function reverseANumber3(num: unknown): number {
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

const num3 = 24680;
const reversedNum3 = reverseANumber3(num3);
console.log(reversedNum3);

{
  /*
  🧮 3. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
  Boucle for.
 */
}

function getGreatestCommonDivisor(int1: unknown, int2: unknown): number {
  if (arguments.length !== 2) {
    throw new Error(`La saisir doit contenir exactement deux arguments`);
  }

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0) {
    throw new Error(
      `Il n'est pas possible de définir le plus grand diviseur commun avec deux arguments nulls`
    );
  }

  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  const minArgument: number = Math.min(a, b);

  let gcd: number = 1;

  for (let i = 1; i <= minArgument; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

const int1 = 48;
const int2 = 18;
const gcd = getGreatestCommonDivisor(int1, int2);
console.log(gcd);

{
  /*
  🧮 3v2. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
  Boucle for inversé.
 */
}

function getGreatestCommonDivisor2(int1: unknown, int2: unknown): number {
  if (arguments.length !== 2) {
    throw new Error(`La saisir doit contenir exactement deux arguments`);
  }

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il est impossible de définir le PGCD de deux nombres nuls`
    );

  if (a === 0) return b;

  if (b === 0) return a;

  const minArgument: number = Math.min(a, b);

  let gcd: number = 1;

  for (let i = minArgument; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return gcd;
}

const int3 = 48;
const int4 = 18;
const gcd2 = getGreatestCommonDivisor2(int3, int4);
console.log(gcd2);

{
  /*
  🧮 3v3. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
  Boucle while.
 */
}

function getGreatestCommonDivisor3(int1: unknown, int2: unknown): number {
  if (arguments.length !== 2)
    throw new Error(`La saisie doit contenir exactement deux arguments`);

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il est impossible de déterminer le plus grand diviseur commun de deux nombres nuls`
    );

  if (a === 0) return b;

  if (b === 0) return a;

  const minArgument: number = Math.min(a, b);

  let gcd: number = 1;

  let i = 1;

  while (i <= minArgument) {
    if (a % i === 0 && b % i === 0) gcd = i;
    i++;
  }
  return gcd;
}

const int5 = 1224;
const int6 = 102;
const gcd3 = getGreatestCommonDivisor3(int5, int6);
console.log(gcd3);

{
  /*
  🧮 3v4. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
  Boucle while inversé.
 */
}

function getGreatestCommonDivisor4(int1: unknown, int2: unknown): number {
  if (arguments.length !== 2)
    throw new Error(`La saisie doit contenir précisément deux arguments`);

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il n'est pas possible de définir le plus grand diviseur commun de deux nombres nuls`
    );

  if (a === 0) return b;
  if (b === 0) return a;

  const minArgument: number = Math.min(a, b);

  let gcd: number = 1;

  let i = minArgument;

  while (i >= 1) {
    if (a % i === 0 && b % i === 0) return i;
    i--;
  }
  return gcd;
}

const int7 = 1224;
const int8 = 102;
const gcd4 = getGreatestCommonDivisor4(int7, int8);
console.log(gcd4);

{
  /*
  🧮 3v5. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
  Boucle do while.
 */
}

function getGreatestCommonDivisor5(int1: unknown, int2: unknown): number {
  if (arguments.length !== 2)
    throw new Error(`La saisie doit contenir précisément deux arguments`);

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il n'est pas possible de définir le plus grand diviseur commun de deux nombres nuls`
    );

  if (a === 0) return b;
  if (b === 0) return a;

  const minArgument: number = Math.min(a, b);

  let gcd: number = 1;

  let i = 1;

  do {
    if (a % i === 0 && b % i === 0) gcd = i;
    i++;
  } while (i <= minArgument);
  return gcd;
}

const int9 = 81;
const int10 = 27;
const gcd5 = getGreatestCommonDivisor5(int9, int10);
console.log(gcd5);

{
  /*
  🧮 3v6. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
  Boucle do while inversé.
 */
}

function getGreatestCommonDivisor6(int1: unknown, int2: unknown): number {
  if (arguments.length !== 2)
    throw new Error(`La saisie doit contenir précisément deux arguments`);

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il n'est pas possible de définir le plus grand diviseur commun de deux nombres nuls`
    );

  if (a === 0) return b;
  if (b === 0) return a;

  const minArgument: number = Math.min(a, b);

  let gcd: number = 1;

  let i = minArgument;

  do {
    if (a % i === 0 && b % i === 0) return i;
    i--;
  } while (i >= 1);
  return gcd;
}

const int11 = 81;
const int12 = 27;
const gcd6 = getGreatestCommonDivisor6(int11, int12);
console.log(gcd6);

{
  /*
  🧮 3v7. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
Méthode Euclyde récursive.
 */
}

function getGreatestCommonDivisor7(int1: unknown, int2: unknown): number {
  if (arguments.length !== 2)
    throw new Error(`La saisie doit contenir précisément deux arguments`);

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il est impossible de déterminer le plus grand diviseur commun de deux nombres nuls`
    );

  if (a === 0) return b;
  if (b === 0) return a;

  const remainder: number = a % b;

  if (remainder === 0) {
    return b;
  } else {
    return getGreatestCommonDivisor7(b, remainder);
  }
}

const int13 = 1224;
const int14 = 104;
const gcd7 = getGreatestCommonDivisor7(int13, int14);
console.log(gcd7);

{
  /*
  🧮 3v7Bis (with comments). PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
Méthode Euclide.
 */
}

// Added comments to explain the Euclidean algorithm
// for finding the greatest common divisor (GCD) of two integers.
function getGreatestCommonDivisor7Bis(int1: unknown, int2: unknown): number {
  // Check if exactly two arguments are provided
  if (arguments.length !== 2)
    throw new Error(`La saisie doit contenir exactement deux arguments`);

  // Validate that both arguments are integers
  checkIsInteger(int1);
  checkIsInteger(int2);

  // Work with absolute values to handle negative integers
  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  // Handle edge case where both numbers are zero
  if (a === 0 && b === 0)
    throw new Error(
      `Il est impossible de définir le plus grand diviseur commun deux nombre nuls`
    );

  // If one number is zero, return the other number as GCD
  if (a === 0) return b;
  if (b === 0) return a;

  // Calculate the remainder of a divided by b
  const remainder: number = a % b;

  // If remainder is zero, b is the GCD
  if (remainder === 0) {
    return b;
  } else {
    // Recursively call the function with b and the remainder
    // This continues until the remainder is zero
    // at which point the current value of b is the GCD
    // This is the essence of the Euclidean algorithm
    // which efficiently finds the GCD through repeated division
    return getGreatestCommonDivisor7Bis(b, remainder);
  }
}

// Test the function with two integers
const int15 = 1224;
const int16 = 103;
const gcd7Bis = getGreatestCommonDivisor7Bis(int15, int16);
console.log(gcd7Bis);

{
  /*
  🧮 3v8. PGCD (Plus Grand Commun Diviseur)
Écris une fonction qui retourne le PGCD de deux nombres entiers.
📌 Exemple : PGCD(48, 18) → 6
Méthode Euclyde while.
 */
}

function getGreatestCommonDivisor8(int1: unknown, int2: unknown): number {
  if (arguments.length !== 2)
    throw new Error(`La saisie doit contenir exactement deux arguments`);

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il n'est pas possible de déterminer le plus grand diviseur commun de deux nombres nuls`
    );

  if (a === 0) return b;
  if (b === 0) return a;

  while (b !== 0) {
    const remainder: number = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

const int17 = 1224;
const int18 = 118;
const gcd8 = getGreatestCommonDivisor8(int17, int18);
console.log(gcd8);