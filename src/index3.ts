import { binary, number } from "joi";
import {
  checkIsArray,
  checkIsInteger,
  checkIsNumbersArray,
  checkIsPositiveNumberMinOne,
  checkIsString,
  validateMinTwoNumbersArray,
} from "./utils/CheckFunctions";
import { stringWithoutSpaces, wordsWithSpaces } from "./utils/Normalize";
import e from "express";
import { threadId } from "worker_threads";

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

{
  /*
  🔤 4. Anagramme
Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
📌 Exemple : "listen" et "silent" → ✅
 */
}

function isAnagram(str1: unknown, str2: unknown): boolean {
  if (str1 === undefined || str2 === undefined)
    throw new Error(`Deux arguments sont requis`);

  checkIsString(str1);
  checkIsString(str2);

  if (str1.length !== str2.length) return false;

  let sortedStr1: string = str1.split("").sort().join("");
  let sortedStr2: string = str2.split("").sort().join("");

  if (sortedStr1 !== sortedStr2) return false;

  return true;
}

const string1 = "listen";
const string2 = "silent";
const areAnagrams = isAnagram(string1, string2);
console.log(areAnagrams);

{
  /*
  🔤 4v2. Anagramme
Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
📌 Exemple : "listen" et "silent" → ✅
Méthode par comptage des occurrences des caractères.
 */
}

function isAnagram2(str1: unknown, str2: unknown): boolean {
  if (str1 === undefined || str2 === undefined)
    throw new Error(`Deux arguments sont requis`);

  checkIsString(str1);
  checkIsString(str2);

  const lengthStr1: number = str1.length;
  const lengthStr2: number = str2.length;

  if (lengthStr1 !== lengthStr2) return false;

  let map: Map<string, number> = new Map();

  for (let i = 0; i < lengthStr1; i++) {
    map.set(str1[i], (map.get(str1[i]) ?? 0) + 1);
  }

  for (let i = 0; i < lengthStr2; i++) {
    if (!map.has(str2[i])) {
      return false;
    }
    map.set(str2[i], map.get(str2[i])! - 1);
  }

  for (let value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
}

const string3 = "triangle";
const string4 = "integral";
const areAnagrams2 = isAnagram2(string3, string4);
console.log(`4v2`, areAnagrams2);

{
  /*
  🔤 4v2Bis (with comments). Anagramme
Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
📌 Exemple : "listen" et "silent" → ✅
Méthode par comptage des occurrences des caractères.
 */
}

function isAnagram2Bis(str1: unknown, str2: unknown): boolean {
  // Check if both arguments are provided
  if (str1 === undefined || str2 === undefined)
    throw new Error(`Deux arguments sont requis`);

  // Validate that both arguments are strings
  checkIsString(str1);
  checkIsString(str2);

  const lengthStr1: number = str1.length;
  const lengthStr2: number = str2.length;

  // If lengths differ, they cannot be anagrams
  if (lengthStr1 !== lengthStr2) return false;

  // Create a map to count occurrences of each character in str1
  let map: Map<string, number> = new Map();

  // Count each character in str1
  for (let i = 0; i < lengthStr1; i++) {
    // Increment the count for the character at str1[i]
    // If the character is not in the map, initialize its count to 0
    // then add 1 to it
    map.set(str1[i], (map.get(str1[i]) ?? 0) + 1);
  }
  // Decrease the count for each character found in str2
  for (let i = 0; i < lengthStr2; i++) {
    // If the character from str2 is not in the map,
    // str2 cannot be an anagram of str1
    if (!map.has(str2[i])) {
      return false;
    }
    // Decrement the count for the character at str2[i]
    // since we found a matching character
    // the resulting count could go to zero to indicate a perfect match
    map.set(str2[i], map.get(str2[i])! - 1);
  }
  // Check if all character counts are zero
  for (let value of map.values()) {
    // If any count is not zero, str2 has extra characters
    // or is missing characters compared to str1
    if (value !== 0) {
      return false;
    }
  }
  // If all counts are zero, str1 and str2 are anagrams
  return true;
}

// Test the function with two strings
const string5 = "triangle";
const string6 = "integral";
const areAnagrams2Bis = isAnagram2Bis(string5, string6);
console.log(areAnagrams2Bis);

{
  /*
  🔤 4v3. Anagramme
Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
📌 Exemple : "listen" et "silent" → ✅
Méthode par comptage des occurrences des caractères.
 */
}

function isAnagram3(str1: unknown, str2: unknown): boolean {
  if (str1 === undefined || str2 === undefined)
    throw new Error(`Deux arguments sont requis`);

  checkIsString(str1);
  checkIsString(str2);

  const a: string = stringWithoutSpaces(str1).toLowerCase();
  const b: string = stringWithoutSpaces(str2).toLowerCase();

  const lengthA: number = a.length;
  const lengthB: number = b.length;

  if (lengthA !== lengthB) return false;

  let count: Record<string, number> = {};

  for (let char of a) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of b) {
    if (!count[char]) return false;
    count[char]--;
  }

  for (let val of Object.values(count)) {
    if (val !== 0) return false;
  }

  return true;
}

const string7 = "conversation";
const string8 = "voices rant on";
const areAnagrams3 = isAnagram3(string7, string8);
console.log(`4v3`, areAnagrams3);

{
  /*
  🔤 4v3Bis (with comments). Anagramme
Écris une fonction qui vérifie si deux chaînes sont des anagrammes.
📌 Exemple : "listen" et "silent" → ✅
Méthode par comptage des occurrences des caractères avec normalisation et utilisation d'un objet pour le comptage.
 */
}

function isAnagram3Bis(str1: unknown, str2: unknown): boolean {
  // Check if both arguments are provided
  if (str1 === undefined || str2 === undefined)
    throw new Error(`Deux arguments sont requis`);

  // Validate that both arguments are strings
  checkIsString(str1);
  checkIsString(str2);

  // Normalize the strings by removing spaces and converting to lowercase
  const a: string = stringWithoutSpaces(str1).toLowerCase();
  const b: string = stringWithoutSpaces(str2).toLowerCase();

  const lengthA: number = a.length;
  const lengthB: number = b.length;

  // If lengths differ after normalization, they cannot be anagrams
  if (lengthA !== lengthB) return false;

  // Create an object to count occurrences of each character in string a
  let count: Record<string, number> = {};

  // Count each character in a
  for (let char of a) {
    // Increment the count for the character at a[char]
    // If the character is not in the object, initialize its count to 0
    // then add 1 to it
    count[char] = (count[char] || 0) + 1;
  }

  // Decrease the count for each character found in string b
  for (let char of b) {
    // If the character from b is not in the count object,
    // b cannot be an anagram of a
    if (!count[char]) return false;
    // Decrement the count for the character at b[char]
    // since we found a matching character
    // the resulting count could go to zero to indicate a perfect match
    count[char]--;
  }

  // Check if all character counts are zero
  for (let val of Object.values(count)) {
    // If any count is not zero, b has extra characters
    // or is missing characters compared to a
    if (val !== 0) return false;
  }

  // If all counts are zero, a and b are anagrams
  return true;
}

// Test the function with two strings
const string9 = "conversation";
const string10 = "voices rant on";
const areAnagrams3Bis = isAnagram3Bis(string9, string10);
console.log(areAnagrams3Bis);

{
  /*
🔤 🔠 5. Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
   Boucle for.
  */
}

function capitalizeWords(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

const str = "hello world";
const capitalizedStr = capitalizeWords(str);
console.log(capitalizedStr);

{
  /*
🔤 🔠 5v2. Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
   Boucle while.
  */
}

function capitalizeWords2(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  let i = 0;

  while (i < words.length) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    i++;
  }
  return words.join(" ");
}

const str2 = "GOOD MORNING everyone";
const capitalizedStr2 = capitalizeWords2(str2);
console.log(capitalizedStr2);

{
  /*
🔤 🔠 5v3. Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
   Boucle do while.
  */
}

function capitalizeWords3(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  let i = 0;

  do {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    i++;
  } while (i < words.length);
  return words.join(" ");
}

const str3 = "have a nice day";
const capitalizedStr3 = capitalizeWords3(str3);
console.log(capitalizedStr3);

{
  /*
🔤 🔠 5v4. Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
   Boucle for of.
  */
}

function capitalizeWords4(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  for (const [index, word] of words.entries()) {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}

const str4 = "welcome to the jungle";
const capitalizedStr4 = capitalizeWords4(str4);
console.log(capitalizedStr4);

{
  /*
🔤 🔠 5v4Bis (avec commentaires). Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
   Boucle for of.
  */
}

// Added comments to explain the logic of capitalizing the first letter of each word
function capitalizeWords4Bis(string: unknown): string {
  // Validate that the input is a string
  checkIsString(string);

  // Split the string into words based on spaces
  let words: string[] = wordsWithSpaces(string);

  // Iterate over each word using for...of with entries to get index and word
  for (const [index, word] of words.entries()) {
    // Capitalize the first letter of the word and concatenate it with the rest of the word
    words[index] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  // Join the capitalized words back into a single string with spaces
  return words.join(" ");
}

const str4Bis = "welcome to the jungle";
const capitalizedStr4Bis = capitalizeWords4Bis(str4Bis);
console.log(capitalizedStr4Bis);

{
  /*
🔤 🔠 5v5. Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
   Méthode for each.
  */
}

function capitalizeWords5(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  words.forEach((word, index) => {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}

const str5 = "make every day count";
const capitalizedStr5 = capitalizeWords5(str5);
console.log(capitalizedStr5);

{
  /*
🔤 🔠 5v6. Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
   Méthode map.
  */
}

function capitalizeWords6(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  let capitalizeEachWord = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizeEachWord.join(" ");
}

const str6 = "seize the day";
const capitalizedStr6 = capitalizeWords6(str6);
console.log(capitalizedStr6);

{
  /*
🔤 🔠 5v6. Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
   Méthode reduce.
  */
}

function capitalizeWords7(string: unknown): string {
  checkIsString(string);

  let words: string[] = wordsWithSpaces(string);

  return words
    .reduce((acc: string[], val: string) => {
      return [...acc, val.charAt(0).toUpperCase() + val.slice(1)];
    }, [])
    .join(" ");
}

const str7 = "dream big";
const capitalizedStr7 = capitalizeWords7(str7);
console.log(capitalizedStr7);

{
  /*
🔤 🔠 5v6Bis (avec commentaires). Mettre en majuscules la première lettre de chaque mot
📌 Exemple : "bonjour ludovic" → "Bonjour Ludovic"
   Méthode reduce.
  */
}

// Added comments to explain the logic of capitalizing the first letter of each word using reduce
function capitalizeWords7Bis(string: unknown): string {
  // Validate that the input is a string
  checkIsString(string);

  // Split the string into words based on spaces
  let words: string[] = wordsWithSpaces(string);

  // Use reduce to iterate over each word and build a new array of capitalized words
  return (
    words
      // The accumulator 'acc' starts as an empty array
      // 'val' represents the current word being processed
      .reduce((acc: string[], val: string) => {
        // Capitalize the first letter of the current word and concatenate it with the rest of the word
        // ... acc spreads the existing capitalized words into the new array
        return [...acc, val.charAt(0).toUpperCase() + val.slice(1)];
      }, [])
      // Join the array of capitalized words back into a single string with spaces
      .join(" ")
  );
}

const str7Bis = "dream big";
const capitalizedStr7Bis = capitalizeWords7Bis(str7Bis);
console.log(capitalizedStr7Bis);

{
  /*
  🧠 6. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Boucle for.
  */
}

function multiplicationTablesUpTo(num: unknown): string[][] {
  checkIsInteger(num);

  checkIsPositiveNumberMinOne(num);

  let table: string[][] = [];

  for (let i = 1; i <= num; i++) {
    const row: string[] = [];
    for (let j = 1; j <= 10; j++) {
      row.push(`${i} x ${j} = ${i * j}`);
    }
    table.push(row);
  }
  return table;
}

const n = 5;
const multiplicationTable = multiplicationTablesUpTo(n);
console.log(multiplicationTable);

{
  /*
  🧠 6v1. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Boucle for inversé.
  */
}

function multiplicationTablesUpToV2(num: unknown): string[][] {
  checkIsInteger(num);

  checkIsPositiveNumberMinOne(num);

  const table: string[][] = [];

  for (let i = num; i >= 1; i--) {
    const row: string[] = [];
    for (let j = 10; j >= 1; j--) {
      row.unshift(`${i} x ${j} = ${i * j}`);
    }
    table.unshift(row);
  }
  return table;
}

const n2 = 3;
const multiplicationTable2 = multiplicationTablesUpToV2(n2);
console.log(multiplicationTable2);

{
  /*
  🧠 6v1Bis (avec commentaires). Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Boucle for inversé.
  */
}

// Added comments to explain the logic of generating multiplication tables in reverse order
function multiplicationTablesUpTo2VBis(num: unknown): string[][] {
  // Validate that the input is an integer
  checkIsInteger(num);

  // Ensure the input is a positive integer greater than or equal to 1
  checkIsPositiveNumberMinOne(num);

  // Initialize an empty 2D array to hold the multiplication tables
  const table: string[][] = [];

  // Outer loop iterates from 'num' down to 1 to create rows for each integer
  for (let i = num; i >= 1; i--) {
    // Initialize an empty array to hold the current row of multiplication results
    const row: string[] = [];
    // Inner loop iterates from 10 down to 1 to create multiplication entries
    for (let j = 10; j >= 1; j--) {
      // Prepend the multiplication result to the current row
      // Using unshift to maintain the correct order in the row
      // Unshift adds the new entry at the beginning of the array, in contrast to push
      row.unshift(`${i} x ${j} = ${i * j}`);
    }

    // Prepend the completed row to the table
    // This ensures that the rows are added in reverse order
    table.unshift(row);
  }

  // Return the completed 2D array representing the multiplication tables
  return table;
}

// Test the function with an integer
const n2Bis = 3;
const multiplicationTable2Bis = multiplicationTablesUpTo2VBis(n2Bis);
console.log(multiplicationTable2Bis);

{
  /*
  🧠 6v3. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Boucle while.
  */
}

function multiplicationTablesUpToV3(num: unknown): string[][] {
  checkIsInteger(num);

  checkIsPositiveNumberMinOne(num);

  const table: string[][] = [];

  let i = 1;
  while (i <= num) {
    const row: string[] = [];
    let j = 1;
    while (j <= 10) {
      row.push(`${i} x ${j} = ${i * j}`);
      j++;
    }
    table.push(row);
    i++;
  }
  return table;
}

const n3 = 4;
const multiplicationTable3 = multiplicationTablesUpToV3(n3);
console.log(multiplicationTable3);

{
  /*
  🧠 6v4. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Boucle while inversé.
  */
}

function multiplicationTablesUpToV4(num: unknown): string[][] {
  checkIsInteger(num);
  checkIsPositiveNumberMinOne(num);

  const table: string[][] = [];

  let i = num;
  while (i >= 1) {
    const row: string[] = [];
    let j = 10;
    while (j >= 1) {
      row.unshift(`${i} x ${j} = ${i * j}`);
      j--;
    }
    table.unshift(row);
    i--;
  }
  return table;
}

const n4 = 4;
const multiplicationTable4 = multiplicationTablesUpToV4(n4);
console.log(multiplicationTable4);

{
  /*
  🧠 6v5. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Boucle do while.
  */
}

function multiplicationTablesUpToV5(num: unknown): string[][] {
  checkIsInteger(num);
  checkIsPositiveNumberMinOne(num);

  const table: string[][] = [];

  let i = 1;

  do {
    const row: string[] = [];
    let j = 1;
    do {
      row.push(`${i} x ${j} = ${i * j}`);
      j++;
    } while (j <= 10);
    table.push(row);
    i++;
  } while (i <= num);
  return table;
}

const n5 = 7;
const multiplicationTable5 = multiplicationTablesUpToV5(n5);
console.log(multiplicationTable5);

{
  /*
  🧠 6v6. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Boucle do while inversé.
  */
}

function multiplicationTablesUpToV6(n: unknown): string[][] {
  checkIsInteger(n);
  checkIsPositiveNumberMinOne(n);

  const table: string[][] = [];

  let i = n;

  do {
    const row: string[] = [];
    let j = 10;
    do {
      row.unshift(`${i} x ${j} = ${i * j}`);
      j--;
    } while (j >= 1);
    table.unshift(row);
    i--;
  } while (i >= 1);
  return table;
}

const n6 = 3;
const multiplicationTable6 = multiplicationTablesUpToV6(n6);
console.log(multiplicationTable6);

{
  /*
  🧠 6v7. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Méthode de classe et boucles for imbriquées.
  */
}

class MultiplicationTableUpTo {
  constructor(private n: number) {
    checkIsInteger(n);
    checkIsPositiveNumberMinOne(n);
  }

  public generate(): string[][] {
    const table: string[][] = [];

    for (let i = 1; i <= this.n; i++) {
      const row: string[] = [];
      for (let j = 1; j <= 10; j++) {
        row.push(`${i} x ${j} = ${i * j}`);
      }
      table.push(row);
    }
    return table;
  }
}

const n7 = 6;
const multiplicationTable7 = new MultiplicationTableUpTo(n7);
console.log(
  "tables de mutiplication - classe",
  multiplicationTable7.generate()
);

{
  /*
  🧠 6v7Bis (avec commentaires). Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Méthode de classe et boucles for imbriquées.
  */
}

class MultiplicationTableUpToBis {
  // The constructor takes a number 'n' which defines the range of multiplication tables
  constructor(private n: number) {
    // Validate that 'n' is an integer
    checkIsInteger(n);
    // Ensure 'n' is a positive integer greater than or equal to 1
    checkIsPositiveNumberMinOne(n);
  }

  // Public method to generate the multiplication tables
  public generate(): string[][] {
    // Initialize an empty 2D array to hold the multiplication tables
    const table: string[][] = [];

    // Outer loop iterates from 1 to 'n' to create rows for each integer
    for (let i = 1; i <= this.n; i++) {
      // Initialize an empty array to hold the current row of multiplication results
      const row: string[] = [];
      // Inner loop iterates from 1 to 10 to create multiplication entries
      for (let j = 1; j <= 10; j++) {
        // Append the multiplication result to the current row
        row.push(`${i} x ${j} = ${i * j}`);
      }
      // Add the completed row to the table
      table.push(row);
    }
    // Return the completed 2D array representing the multiplication tables
    return table;
  }
}

// Test the class with an integer
const n7Bis = 6;
const multiplicationTable7Bis = new MultiplicationTableUpToBis(n7Bis);
console.log(
  "tables de mutiplication - classe avec commentaires",
  multiplicationTable7Bis.generate()
);

{
  /*
  🧠 6v8. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Méthode de classe et boucles while imbriquées.
  */
}

class MultiplicationTableUpToV2 {
  constructor(private n: number) {
    checkIsInteger(n);
    checkIsPositiveNumberMinOne(n);
  }

  public generate(): string[][] {
    const table: string[][] = [];

    let i = 1;
    while (i <= this.n) {
      const row: string[] = [];
      let j = 1;
      while (j <= 10) {
        row.push(`${i} x ${j} = ${i * j}`);
        j++;
      }
      table.push(row);
      i++;
    }
    return table;
  }
}

const n8 = 7;
const multiplicationTable8 = new MultiplicationTableUpToV2(n8).generate();
console.log(multiplicationTable8);

{
  /*
  🧠 6v9. Table de multiplication améliorée
Crée une fonction qui retourne la table de multiplication (jusqu’à 10) pour tous les entiers de 1 à n sous forme de tableau à 2 dimensions.
Méthode de classe et boucles do while imbriquées.
  */
}

class MultiplicationTableUpToV3 {
  constructor(private n: number) {
    checkIsInteger(n);
    checkIsPositiveNumberMinOne(n);
  }

  public generate(): string[][] {
    const table: string[][] = [];

    let i = 1;
    do {
      const row: string[] = [];
      let j = 1;
      do {
        row.push(`${i} x ${j} = ${i * j}`);
        j++;
      } while (j <= 10);
      table.push(row);
      i++;
    } while (i <= this.n);
    return table;
  }
}

const n9 = 10;
const multiplicationTable9 = new MultiplicationTableUpToV3(n9).generate();
console.log(multiplicationTable9);

{
  /*
  📊 7. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Boucle for.
*/
}

function getAverage(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numbersArray.length;

  let count: number = 0;

  for (let i = 0; i < lengthNumArray; i++) {
    const value: number = numbersArray[i];
    count += value;
  }

  const average = count / lengthNumArray;
  return Math.round(average * 100) / 100;
}

const numArray = [15.28, 15.2695, 14.5645, 17.45656];
const average = getAverage(numArray);
console.log(average);

{
  /*
  📊 7v2. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Boucle for inversé.
*/
}

function getAverage2(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numbersArray.length;

  let count: number = 0;

  for (let i = lengthNumArray - 1; i >= 0; i--) {
    const value: number = numbersArray[i];
    count += value;
  }

  const average: number = count / lengthNumArray;

  return Math.round(average * 100) / 100;
}

const numArray2 = [10.5, 20.3, 30.7, 40.2];
const average2 = getAverage2(numArray2);
console.log(average2);

{
  /*
  📊 7v3. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Boucle while.
*/
}

function getAverage3(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numbersArray.length;

  let count: number = 0;

  let i = 0;

  while (i < lengthNumArray) {
    const value: number = numbersArray[i];
    count += value;
    i++;
  }

  const average: number = count / lengthNumArray;

  return Math.round(average * 100) / 100;
}

const numArray3 = [5.75, 15.25, 25.5, 35.0];
const average3 = getAverage3(numArray3);
console.log(average3);

{
  /*
  📊 7v4. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Boucle while inversé.
*/
}

function getAverage4(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numbersArray.length;

  let count: number = 0;

  let i = lengthNumArray - 1;

  while (i >= 0) {
    const value = numbersArray[i];
    count += value;
    i--;
  }

  const average: number = count / lengthNumArray;

  return Math.round(average * 100) / 100;
}

const numArray4 = [12.34, 23.45, 34.56, 45.67];
const average4 = getAverage4(numArray4);
console.log(average4);

{
  /*
  📊 7v5. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Boucle do while.
*/
}

function getAverage5(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numArray.length;

  let count: number = 0;

  let i = 0;

  do {
    const value: number = numbersArray[i];
    count += value;
    i++;
  } while (i < lengthNumArray);

  const average: number = count / lengthNumArray;

  return Math.round(average * 100) / 100;
}

const numArray5 = [7.89, 8.76, 9.65, 10.54];
const average5 = getAverage5(numArray5);
console.log(average5);

{
  /*
  📊 7v6. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Boucle do while inversé.
*/
}

function getAverage6(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numbersArray.length;

  let count: number = 0;

  let i = lengthNumArray - 1;

  do {
    const value: number = numbersArray[i];
    count += value;
    i--;
  } while (i >= 0);

  const average: number = count / lengthNumArray;

  return Math.round(average * 100) / 100;
}

const numArray6 = [11.11, 22.22, 33.33, 44.44];
const average6 = getAverage6(numArray6);
console.log(average6);

{
  /*
  📊 7v7. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Boucle for of.
*/
}

function getAverage7(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray = numbersArray.length;

  let count: number = 0;

  for (let number of numbersArray) {
    count += number;
  }

  const average: number = count / lengthNumArray;

  return Math.round(average * 100) / 100;
}

const numArray7 = [100.1, 200.2, 300.3, 400.4];
const average7 = getAverage7(numArray7);
console.log(average7);

{
  /*
  📊 7v8. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthode Reduce.
*/
}

function getAverage8(numArray: unknown[]): number {
  validateMinTwoNumbersArray(numArray);

  const numbersArray = numArray;

  const lengthNumArray: number = numbersArray.length;

  const count: number = numArray.reduce((acc: number, val: number) => {
    return acc + val;
  }, 0);

  const average: number = count / lengthNumArray;

  return Math.round(average * 100) / 100;
}

const numArray8 = [9.99, 8.88, 7.77, 6.66];
const average8 = getAverage8(numArray8);
console.log(average8);

{
  /*
  📊 7v9. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthode de Classe et boucle for.
*/
}

class MathUtil {
  private numArray: number[];
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  public numbersAverage(): number {
    const numberArray = this.numArray;
    const lengthNumArray: number = numberArray.length;
    let sum: number = 0;

    for (let i = 0; i < lengthNumArray; i++) {
      const value: number = numberArray[i];
      sum += value;
    }
    const average: number = sum / lengthNumArray;
    return Math.round(average * 100) / 100;
  }
}

const numArray9 = [50.5, 60.6, 70.7, 80.8];
const average9 = new MathUtil(numArray9).numbersAverage();
console.log("moyenne - classe", average9);

{
  /*
  📊 7v9Bis (avec commentaires). Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthode de Classe et boucle for.
*/
}

// Added comments to explain the logic of calculating the average using a class
class MathUtilBis {
  // Private property to hold the array of numbers
  private numArray: number[];
  // Constructor takes an array of numbers and validates it
  // Constructor is responsible for initializing the class instance
  // Ensures that the array has at least two numbers
  // and assigns it to the private property
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  // Public method to calculate the average of the numbers in the array
  public numbersAverage(): number {
    // Retrieve the array of numbers from the private property
    const numbersArray = this.numArray;
    // Get the length of the number array
    const lengthNumArray: number = numbersArray.length;
    // Initialize a counter to accumulate the sum of the numbers
    let sum: number = 0;

    // Loop through each number in the array using a for loop
    for (let i = 0; i < lengthNumArray; i++) {
      // Get the current number at index i
      const value: number = numbersArray[i];
      // Add the current number to the count
      sum += value;
    }
    // Calculate the average by dividing the total count by the length of the array
    const average: number = sum / lengthNumArray;
    // Return the average rounded to two decimal places
    return Math.round(average * 100) / 100;
  }
}

// Test the MathUtilBis class with an array of numbers
const numArray9Bis = [50.5, 60.6, 70.7, 80.8];
const average9Bis = new MathUtilBis(numArray9Bis).numbersAverage();
console.log("moyenne - classe", average9Bis);

{
  /*
  📊 7v10. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthode de Classe et boucle for inversé.
*/
}

class MathUtilV2 {
  private numArray: number[];
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  public numbersAverage(): number {
    const numbersArray = this.numArray;
    const lengthNumArray: number = numbersArray.length;
    let sum: number = 0;

    for (let i = lengthNumArray - 1; i >= 0; i--) {
      const value: number = numbersArray[i];
      sum += value;
    }

    const average: number = sum / lengthNumArray;
    return Math.round(average * 100) / 100;
  }
}

const numArray10 = [105.99, 152.1584, 198.795, 500.25];
const average10 = new MathUtilV2(numArray10).numbersAverage();
console.log("moyenne class", average10);

{
  /*
  📊 7v11. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthode de Classe et boucle while.
*/
}

class MathUtilV3 {
  private numArray: number[];
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  public averageNumbers(): number {
    const numbersArray = this.numArray;
    const lengthNumArray: number = numbersArray.length;
    let sum: number = 0;

    let i = 0;
    while (i < lengthNumArray) {
      const value: number = numbersArray[i];
      sum += value;
      i++;
    }
    const average: number = sum / lengthNumArray;
    return Math.round(average * 100) / 100;
  }
}

const numArray11 = [1025.98, 1052.899, 1650.596, 1499.9856];
const average11 = new MathUtilV3(numArray11).averageNumbers();
console.log(average11);

{
  /*
  📊 7v12. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthode de Classe et boucle while inversé.
*/
}

class MathUtilV4 {
  private numArray: number[];
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  public averageNumbers(): number {
    const numbersArray = this.numArray;
    const lengthNumArray: number = numbersArray.length;
    let sum: number = 0;

    let i = lengthNumArray - 1;
    while (i >= 0) {
      const value: number = numbersArray[i];
      sum += value;
      i--;
    }
    const average: number = sum / lengthNumArray;
    return Math.round(average * 100) / 100;
  }
}

const numArray12 = [49.2552, 56.8965, 52.4593, 85.7596];
const average12 = new MathUtilV4(numArray12).averageNumbers();
console.log(average12);

{
  /*
  📊 7v13. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthode de Classe et boucle do while.
*/
}

class MathUtilV5 {
  private numArray: number[];
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  public averageNumbers(): number {
    const numbersArray = this.numArray;
    const lengthNumArray: number = numbersArray.length;
    let sum: number = 0;

    let i = 0;
    do {
      const value: number = numbersArray[i];
      sum += value;
      i++;
    } while (i < lengthNumArray);

    const average = sum / lengthNumArray;
    return Math.round(average * 100) / 100;
  }
}

const numArray13 = [33.33, 44.44, 55.55, 66.66];
const average13 = new MathUtilV5(numArray13).averageNumbers();
console.log(average13);

{
  /*
  📊 7v14. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthode de Classe et boucle do while inversé.
*/
}

class MathUtilV6 {
  private numArray: number[];
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  public averageNumbers(): number {
    const numbersArray = this.numArray;
    const lengthNumArray: number = numbersArray.length;
    let sum: number = 0;

    let i = lengthNumArray - 1;
    do {
      const value: number = numbersArray[i];
      sum += value;
      i--;
    } while (i >= 0);

    const average: number = sum / lengthNumArray;
    return Math.round(average * 100) / 100;
  }
}

const numArray14 = [88.88, 77.77, 66.66, 55.55];
const average14 = new MathUtilV6(numArray14).averageNumbers();
console.log(average14);

{
  /*
  📊 7v15. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthode de Classe et boucle for-of.
*/
}

class MathUtilV7 {
  private numArray: number[];
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  public averageNumbers(): number {
    const numbersArray = this.numArray;
    const lengthNumArray: number = numbersArray.length;
    let sum: number = 0;

    for (const number of numbersArray) {
      sum += number;
    }
    const average: number = sum / lengthNumArray;
    return Math.round(average * 100) / 100;
  }
}

const numArray15 = [1.4645, 3.456465, 2.45654, 3.4566545];
const average15 = new MathUtilV7(numArray15).averageNumbers();
console.log(average15);

{
  /*
  📊 7v16. Calcul de la moyenne
Écris une fonction qui prend un tableau de nombres et retourne la moyenne.
📌 Bonus : Arrondir à 2 décimales.
  Méthodes de Classe reduce.
*/
}

class MathUtilV8 {
  private numArray: number[];
  constructor(numbersArray: unknown[]) {
    validateMinTwoNumbersArray(numbersArray);
    this.numArray = numbersArray;
  }

  public averageNumbers(): number {
    const numbersArray = this.numArray;
    const lengthNumArray = numbersArray.length;

    const sum: number = numbersArray.reduce((acc, val) => {
      return acc + val;
    }, 0);
    const average: number = sum / lengthNumArray;
    return Math.round(average * 100) / 100;
  }
}

const numArray16 = [23.45, 34.56, 45.67, 56.78];
const average16 = new MathUtilV8(numArray16).averageNumbers();
console.log(average16);

{
  /*
  📦 8. Compresser une chaîne (Run-length encoding)
Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
📌 Exemple : "aaabbc" → "a3b2c1"
    Boucle for
*/
}

function compressString(str: unknown): string {
  checkIsString(str);

  if (str.length === 0) {
    return "";
  }

  let count: number = 1;
  let compressedString: string = "";

  for (let i = 0; i < str.length; i++) {
    const current: string = str[i];
    const next: string = str[i + 1];
    if (current === next) {
      count++;
    } else {
      compressedString += `${current}${count}`;
      count = 1;
    }
  }
  return compressedString;
}

const string: string = "aaabbc";
const compressedString = compressString(string);
console.log(compressedString);

{
  /*
  📦 8v2. Compresser une chaîne (Run-length encoding)
Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
📌 Exemple : "aaabbc" → "a3b2c1"
    Boucle while
*/
}

function compressString2(str: unknown): string {
  checkIsString(str);

  if (str.length === 0) {
    return "";
  }

  let compressedString: string = "";
  let count: number = 1;

  let i = 0;

  while (i < str.length) {
    const current: string = str[i];
    const next: string = str[i + 1];
    if (current === next) {
      count++;
    } else {
      compressedString += `${current}${count}`;
      count = 1;
    }
    i++;
  }
  return compressedString;
}

const stringV2: string = "wwwwaaadexxxxxx";
const compressedString2 = compressString2(stringV2);
console.log(compressedString2);

{
  /*
  📦 8v3. Compresser une chaîne (Run-length encoding)
Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
📌 Exemple : "aaabbc" → "a3b2c1"
    Boucle do while.
*/
}

function compressString3(str: unknown): string {
  checkIsString(str);

  if (str.length === 0) {
    return "";
  }

  let compressedString: string = "";
  let count: number = 1;

  let i = 0;

  do {
    const current: string = str[i];
    const next: string = str[i + 1];
    if (current === next) {
      count++;
    } else {
      compressedString += `${current}${count}`;
      count = 1;
    }
    i++;
  } while (i < str.length);
  return compressedString;
}

const stringV3: string =
  "zzzzzzzzzzzyyyyyyyyyyyxxxxxxwwwwwwvvvvuuutttsssrrqqppp";
const compressedString3 = compressString3(stringV3);
console.log(compressedString3);

{
  /*
  📦 8v4. Compresser une chaîne (Run-length encoding)
Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
📌 Exemple : "aaabbc" → "a3b2c1"
    Boucle for-of.
*/
}

function compressString4(str: unknown): string {
  checkIsString(str);

  if (str.length === 0) {
    return "";
  }

  let compressedString: string = "";
  let count: number = 1;
  let previous: string | null = null;

  for (let char of str) {
    if (char === previous) {
      count++;
    } else {
      if (previous !== null) {
        compressedString += `${previous}${count}`;
      }
      count = 1;
      previous = char;
    }
  }

  compressedString += `${previous}${count}`;

  return compressedString;
}

const stringV4: string = "ppppqqqqrrrrsssstttuuuvvvwwwxxxx";
const compressedString4 = compressString4(stringV4);
console.log(compressedString4);

{
  /*
  📦 8v4Bis (avec commentaires). Compresser une chaîne (Run-length encoding)
Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
📌 Exemple : "aaabbc" → "a3b2c1"
    Boucle for-of.
*/
}

// Added comments to explain the logic of run-length encoding using a for-of loop
function compressString4Bis(str: unknown): string {
  // Validate that the input is a string
  checkIsString(str);

  // Handle the edge case of an empty string
  if (str.length === 0) {
    return "";
  }

  // Initialize an empty string to hold the compressed result
  let compressedString: string = "";
  // Initialize a counter to track consecutive character occurrences
  let count: number = 1;
  // Variable to keep track of the previous character
  let previous: string | null = null;

  // Loop through each character in the string using a for-of loop
  for (let char of str) {
    // Check if the current character is the same as the previous one
    if (char === previous) {
      // If they are the same, increment the count
      count++;
    } else {
      // If they are different and previous is not null, append the previous character and its count to the result
      if (previous !== null) {
        compressedString += `${previous}${count}`;
      }
      // Reset the count for the new character
      count = 1;
      // Update the previous character to the current one
      previous = char;
    }
  }

  // Append the last character and its count to the result
  compressedString += `${previous}${count}`;

  // Return the final compressed string
  return compressedString;
}

// Test the function with a sample string
const stringV4Bis: string = "ppppqqqqrrrrsssstttuuuvvvwwwxxxx";
const compressedString4Bis = compressString4Bis(stringV4Bis);
console.log(compressedString4Bis);

{
  /*
  📦 8v5. Compresser une chaîne (Run-length encoding)
Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
📌 Exemple : "aaabbc" → "a3b2c1"
    Méthode d'encodage par longueur de série (RLE) utilisant une expression régulière avec rétro-référence.
*/
}

function compressString5(str: unknown): string {
  checkIsString(str);
  return str.replace(/(.)\1*/g, (match, char) => `${char}${match.length}`);
}

const stringV5: string = "hhhhhggggfffffeeeeddddccccbbbbaaa";
const compressedString5 = compressString5(stringV5);
console.log(compressedString5);

{
  /*
  📦 8v5bis (avec commentaires). Compresser une chaîne (Run-length encoding)
Écris une fonction qui compresse une chaîne en comptant les caractères consécutifs.
📌 Exemple : "aaabbc" → "a3b2c1"
    Méthode d'encodage par longueur de série (RLE) utilisant une expression régulière avec rétro-référence.
*/
}

// Added comments to explain the logic of run-length encoding using regex
function compressString5Bis(str: unknown): string {
  // Validate that the input is a string
  checkIsString(str);

  // Use a regular expression to find sequences of consecutive identical characters
  return str.replace(
    /(.)\1*/g, // This regex matches any character (.) followed by zero or more occurrences of the same character (\1*)
    //g is the global flag to find all matches in the string

    (match, char) => `${char}${match.length}` // For each match, return the character and the length of the match
  );
}

// Test the function with a sample string
const stringV5Bis: string = "hhhhhggggfffffeeeeddddccccbbbbaaa";
const compressedString5Bis = compressString5Bis(stringV5Bis);
console.log(compressedString5Bis);

{
  /*
  🎯 9. Trouver le deuxième plus grand nombre
Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
Boucle for
*/
}

function getSecondBiggestNumber(numArr: unknown[]): number {
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

const numbersArray: number[] = [4, 8, 15, 16, 23, 42];
const secondBiggestNumber = getSecondBiggestNumber(numbersArray);
console.log(secondBiggestNumber);

{
  /*
  🎯 9v2. Trouver le deuxième plus grand nombre
Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
Boucle for inversé
*/
}

function getSecondBiggestNumber2(numArr: unknown[]): number {
  validateMinTwoNumbersArray(numArr);

  const lengthNumArray: number = numArr.length;

  let biggestNumber: number = numArr[lengthNumArray - 1];
  let secondBiggestNumber: number = -Infinity;

  for (let i = lengthNumArray - 2; i >= 0; i--) {
    if (numArr[i] > biggestNumber) {
      secondBiggestNumber = biggestNumber;
      biggestNumber = numArr[i];
    } else if (numArr[i] < biggestNumber && numArr[i] > secondBiggestNumber) {
      secondBiggestNumber = numArr[i];
    }
  }
  if (secondBiggestNumber === -Infinity) {
    throw new Error(`Il n'y a pas de deuxème plus grand nombre distinct`);
  }
  return secondBiggestNumber;
}

const numbersArray2: number[] = [10, 20, 30, 40, 50, 60];
const secondBiggestNumber2 = getSecondBiggestNumber2(numbersArray2);
console.log(secondBiggestNumber2);

{
  /*
  🎯 9v3. Trouver le deuxième plus grand nombre
Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
Boucle while
*/
}

function getSecondBiggestNumber3(numArr: unknown[]): number {
  validateMinTwoNumbersArray(numArr);

  const lengthNumArray: number = numArr.length;

  let biggestNumber: number = numArr[0];
  let secondBiggestNumber: number = -Infinity;

  let i = 1;

  while (i < lengthNumArray) {
    const current: number = numArr[i];
    if (current > biggestNumber) {
      secondBiggestNumber = biggestNumber;
      biggestNumber = current;
    } else if (current < biggestNumber && current > secondBiggestNumber) {
      secondBiggestNumber = current;
    }
    i++;
  }

  if (secondBiggestNumber === -Infinity)
    throw new Error(`Il n'y a pas de deuxième plus grand nombre distinct`);

  return secondBiggestNumber;
}

const numbersArray3: number[] = [2.5, 3.5, 4.75, 5.0, 6.25, 7.5];
const secondBiggestNumber3 = getSecondBiggestNumber3(numbersArray3);
console.log(secondBiggestNumber3);

{
  /*
  🎯 9v4. Trouver le deuxième plus grand nombre
Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
Boucle while inversée.
*/
}

function getSecondBiggestNumber4(numArr: unknown[]): number {
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

const numbersArray4: number[] = [99, 150, 375, 200, 250, 300, 350];
const secondBiggestNumber4 = getSecondBiggestNumber4(numbersArray4);
console.log(secondBiggestNumber4);

{
  /*
  🎯 9v5. Trouver le deuxième plus grand nombre
Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
Boucle do while.
*/
}

function getSecondBiggestNumber5(numArr: unknown[]): number {
  validateMinTwoNumbersArray(numArr);

  const lengthNumArray: number = numArr.length;

  let biggestNumber: number = numArr[0];

  let secondBiggestNumber: number = -Infinity;

  let i = 1;

  do {
    const current: number = numArr[i];
    if (current > biggestNumber) {
      secondBiggestNumber = biggestNumber;
      biggestNumber = current;
    } else if (current < biggestNumber && current > secondBiggestNumber) {
      secondBiggestNumber = current;
    }
    i++;
  } while (i < lengthNumArray);

  if (secondBiggestNumber === -Infinity)
    throw new Error(`Il n'y a pas de deuxième plus grand nombre distinct`);

  return secondBiggestNumber;
}

const numbersArray5: number[] = [1055, 2045, 1500, 3000, 2500, 4000];
const secondBiggestNumber5 = getSecondBiggestNumber5(numbersArray5);
console.log(secondBiggestNumber5);

{
  /*
  🎯 9v6. Trouver le deuxième plus grand nombre
Écris une fonction qui retourne le deuxième plus grand nombre dans un tableau.
📌 Exemple : [4, 8, 15, 16, 23, 42] → 23
Boucle do while inversée.
*/
}

function getSecondBiggestNumber6(numArr: unknown[]): number {
  validateMinTwoNumbersArray(numArr);

  const lengthNumArray: number = numArr.length;

  let biggestNumber: number = numArr[lengthNumArray - 1];
  let secondBiggestNumber: number = -Infinity;

  let i = lengthNumArray - 2;

  do {
    const current: number = numArr[i];
    if (current > biggestNumber) {
      secondBiggestNumber = biggestNumber;
      biggestNumber = current;
    } else if (current < biggestNumber && current > secondBiggestNumber) {
      secondBiggestNumber = current;
    }
    i--;
  } while (i >= 0);

  if (secondBiggestNumber === -Infinity)
    throw new Error(`Il n'y a pas de deuxième plus grand nombre distinct`);

  return secondBiggestNumber;
}

const numbersArray6: number[] = [500, 600, 700, 800, 900, 1000];
const secondBiggestNumber6 = getSecondBiggestNumber6(numbersArray6);
console.log(secondBiggestNumber6);