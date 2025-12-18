import {
  checkIsInteger,
  checkIsPositiveNumberMinOne,
  checkIsString,
} from "./utils/CheckFunctions";
import { stringWithoutSpaces, wordsWithSpaces } from "./utils/Normalize";

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