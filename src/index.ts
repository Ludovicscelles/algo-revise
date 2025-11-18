import { error } from "console";
import { normalize } from "path";

{
  /*

  1. Pair ou impair
Écris un programme qui prend un nombre entier et affiche s’il est pair ou impair.
  */
}

function evenOrOdd(nbr: number): boolean {
  if (!Number.isInteger(nbr)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  if (nbr % 2 !== 0) {
    return false;
  }
  return true;
}

let nbr = 15;
let isEven: boolean = evenOrOdd(nbr);
console.log(isEven);

{
  /*

  1bis. Pair ou impair
Écris un programme qui prend un nombre entier et affiche s’il est pair ou impair.
  */
}

function evenOrOdd2(nbr2: number): string {
  if (!Number.isInteger(nbr2)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  if (nbr2 % 2 !== 0) {
    return `Ce nombre est impair`;
  }
  return `Ce nombre est pair`;
}

let nbr2 = 27;
let isEven2: string = evenOrOdd2(nbr2);
console.log(isEven2);

{
  /*
  2. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

function factorial(number: number): number {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error(`La saisie doit être un nombre entier positif`);
  }

  let factorialResult: number = 1;
  for (let i = 2; i <= number; i++) {
    factorialResult *= i;
  }
  return factorialResult;
}

let number = 5;
let factorialOfANumber: number = factorial(5);
console.log(factorialOfANumber);

{
  /*
  2bis. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

function factorial2(number2: number): number {
  if (!Number.isInteger(number2) || number2 < 0) {
    throw new Error(`La saisie doit être un nombre entier`);
  }

  let factorialResult2: number = 1;
  for (let i = number2; i >= 2; i--) {
    factorialResult2 *= i;
  }

  return factorialResult2;
}

let number2 = 5;
let factorialOfANumber2: number = factorial2(number2);
console.log(factorialOfANumber2);

{
  /*
  2ter. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

function factorial3(number3: number): number {
  if (!Number.isInteger(number3) || number3 < 0) {
    throw new Error(`La saisie doit être un nombre entier positif`);
  }

  let factorialResult3: number = 1;

  let i = 2;

  while (i <= number3) {
    factorialResult3 *= i;
    i++;
  }

  return factorialResult3;
}

let number3 = 5;
let factorialOfANumber3: number = factorial3(number3);
console.log(factorialOfANumber3);

{
  /*
  2quater. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

function factorial4(number4: number): number {
  if (!Number.isInteger(number4) || number4 < 0) {
    throw new Error(`La saisie doit être un nombre entier positif`);
  }

  let factorialOfANumber4: number = 1;

  let i = number4;

  while (i >= 2) {
    factorialOfANumber4 *= i;
    i--;
  }

  return factorialOfANumber4;
}

let number4 = 5;
let factorialOfANumber4: number = factorial4(number4);
console.log(factorialOfANumber4);

{
  /*
  3. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

function getMaxValue(numArray: number[]): number {
  if (!Array.isArray(numArray) || numArray.length < 2) {
    throw new Error(
      `La saisie d'entrée doit être un tableau comportant à minima deux éléments`
    );
  }

  if (!numArray.every((num) => Number.isInteger(num))) {
    throw new Error(`Chaque élément du tableau doit être un nombre entier`);
  }
  let maxValue: number = numArray[0];

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > maxValue) {
      maxValue = numArray[i];
    }
  }
  return maxValue;
}

let numArray = [51, 55, 58, 42, 43];
let maxValue = getMaxValue(numArray);
console.log(maxValue);

{
  /*
  3bis. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

function getMaxValue2(numArray2: number[]): number {
  if (!Array.isArray(numArray2) || numArray2.length < 2) {
    throw new Error(
      `La saisie doit être un tableau comportant à minima deux éléments`
    );
  }

  if (!numArray2.every((num) => Number.isInteger(num))) {
    throw new Error(`Chaque élément du tableau doit être un nombre entier`);
  }

  let maxValue2: number = numArray2[numArray2.length - 1];

  for (let i = numArray2.length - 2; i >= 0; i--) {
    if (numArray2[i] > maxValue2) {
      maxValue2 = numArray2[i];
    }
  }
  return maxValue2;
}

let numArray2 = [109, 112, 125, 98, 56];
let maxValue2 = getMaxValue2(numArray2);
console.log(maxValue2);

{
  /*
  3ter. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

function getMaxValue3(numArray3: number[]): number {
  if (!Array.isArray(numArray3) || numArray3.length < 2) {
    throw new Error(
      `La saisie doit être un tableau comportant à minima deux éléments`
    );
  }

  if (!numArray3.every((num) => Number.isInteger(num))) {
    throw new Error(`Chaque élément du tableau doit être un nombre entier`);
  }

  let maxValue3: number = numArray3[0];

  let i = 1;

  while (i < numArray3.length) {
    if (numArray3[i] > maxValue3) {
      maxValue3 = numArray3[i];
    }
    i++;
  }
  return maxValue3;
}

let numArray3 = [209, 224, 512, 301, 98];
let maxValue3 = getMaxValue3(numArray3);
console.log(maxValue3);

function getMaxValue4(numArray4: number[]): number {
  if (!Array.isArray(numArray4) || numArray4.length < 2) {
    throw new Error(
      `La saisie doit être un tableau comportant à minima deux éléments`
    );
  }

  if (!numArray4.every((num) => Number.isInteger(num))) {
    throw new Error(`Chaque élément du tableau doit être un nombre entier`);
  }

  let maxValue4: number = numArray4[numArray4.length - 1];

  let i = numArray4.length - 2;

  while (i >= 0) {
    if (numArray4[i] > maxValue4) {
      maxValue4 = numArray4[i];
    }
    i--;
  }
  return maxValue4;
}

let numArray4 = [1025, 1030, 1350, 1052, 999];
let maxValue4 = getMaxValue4(numArray4);
console.log(maxValue4);

function getMaxValue5(numArray5: number[]): number {
  if (!Array.isArray(numArray5) || numArray5.length < 2) {
    throw new Error(
      `La saisie doit être un tableau comportant à minima deux éléments`
    );
  }

  if (!numArray5.every((num) => Number.isInteger(num))) {
    throw new Error(`Chaque élément du tableau doit être un nombre entier`);
  }

  let maxValue5: number = numArray5[0];

  for (let num of numArray5) {
    if (num > maxValue5) {
      maxValue5 = num;
    }
  }
  return maxValue5;
}

let numArray5 = [201, 263, 298, 152, 175];
let maxValue5 = getMaxValue5(numArray5);
console.log(maxValue5);

function getMaxValue6(numArray6: number[]): number {
  if (!Array.isArray(numArray6) || numArray6.length < 2) {
    throw new Error(
      `La saisie d'entrée doit être un tableau comportant à minima deux éléments`
    );
  }

  if (!numArray6.every((num) => Number.isInteger(num))) {
    throw new Error(`Chaque élément du tableau doit être un nombre entier`);
  }

  let maxValue6: number = numArray6[0];

  let i = 1;

  do {
    if (numArray6[i] > maxValue6) {
      maxValue6 = numArray6[i];
    }
    i++;
  } while (i < numArray6.length);
  return maxValue6;
}

let numArray6 = [302, 352, 369, 301, 300];
let maxValue6 = getMaxValue6(numArray6);
console.log(maxValue6);

function getMaxValue7(numArray7: number[]): number {
  if (!Array.isArray(numArray7) || numArray7.length < 2) {
    throw new Error(
      `La saisie d'entrée doit être un tableau comportant à minima deux éléments`
    );
  }

  if (!numArray7.every((num) => Number.isInteger(num))) {
    throw new Error(`Chaque élément du tableau doit être un nombre entier`);
  }

  let maxValue7: number = numArray7[numArray7.length - 1];

  let i = numArray7.length - 2;

  do {
    if (numArray7[i] > maxValue7) {
      maxValue7 = numArray7[i];
    }
    i--;
  } while (i >= 0);
  return maxValue7;
}

let numArray7 = [505, 518, 596, 501, 499];
let maxValue7 = getMaxValue7(numArray7);
console.log(maxValue7);

{
  /*
  4. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

function checkPalindrome(str: string): string {
  if (typeof str !== "string") {
    throw new Error(`La saisie d'entrée doit être un chaîne de caractères`);
  }

  const normalizedStr = str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < normalizedStr.length / 2; i++) {
    if (normalizedStr[i] !== normalizedStr[normalizedStr.length - 1 - i]) {
      return `Ce n'est pas un palindrome`;
    }
  }
  return `C'est un palindrome`;
}

let str = "Tu l'as trop écrasé César, ce Port-Salut !";
let isPalindrome = checkPalindrome(str);
console.log(isPalindrome);

{
  /*
  4. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

// function to check if a string is a palindrome
function checkPalindromeWithComments(str: string): string {
  // check if the input is a string
  if (typeof str !== "string") {
    throw new Error(`La saisie d'entrée doit être un chaîne de caractères`);
  }

  // normalize the string: convert to lowercase, remove accents, and remove non-alphanumeric characters
  const normalizedStr = str
    // convert to lowercase
    .toLowerCase()
    // remove accents by normalizing to NFD form, NFD means Normalization Form Decomposition
    .normalize("NFD")
    // remove diacritical marks, diatritical means accent marks
    .replace(/[\u0300-\u036f]/g, "")
    // remove non-alphanumeric characters
    .replace(/[^a-z0-9]/g, "");

  // check if the normalized string is a palindrome using a for loop
  for (let i = 0; i < normalizedStr.length / 2; i++) {
    // compare characters from the start and end of the string
    if (normalizedStr[i] !== normalizedStr[normalizedStr.length - 1 - i]) {
      // if characters do not match, it's not a palindrome
      return `Ce n'est pas un palindrome`;
    }
  }
  // if all characters match, it is a palindrome
  return `C'est un palindrome`;
}

let strBis = "Tu l'as trop écrasé César, ce Port-Salut !";
let isPalindromeBis = checkPalindromeWithComments(strBis);
console.log(isPalindromeBis);

function checkPalindrome2(str2: string): string {
  if (typeof str2 !== "string") {
    throw new Error(`La saisie doit être une chaîne de caractères`);
  }

  const normalizedStr2: string = str2
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  for (let i = normalizedStr2.length - 1; i >= normalizedStr2.length / 2; i--) {
    if (normalizedStr2[i] !== normalizedStr2[normalizedStr2.length - 1 - i]) {
      return `Ce n'est pas un palindrome`;
    }
  }
  return `C'est un palindrome`;
}

let str2 = "Et la marine va venir à Malte";
let isPalindrome2: string = checkPalindrome2(str2);
console.log(isPalindrome2);
