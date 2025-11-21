import { func } from "joi";
import { fileURLToPath } from "url";

{
  /*

  1v1. Pair ou impair
Écris un programme qui prend un nombre entier et affiche s’il est pair ou impair.
  */
}

// type guard to check if input is an integer
// throws an error if not
// asserts nb is number tells TypeScript that after calling this function, nb can be treated as a number
const checkIsInteger: (nb: unknown) => asserts nb is number = (nb) => {
  // check if the input is a number and an integer
  if (!Number.isInteger(nb)) {
    // throw an error if not
    // message in French: "Input must be an integer."
    throw new Error(`La saisie doit être un nombre entier.`);
  }
};

function evenOrOdd(nbr: unknown): boolean {
  checkIsInteger(nbr);
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

  1v2. Pair ou impair
Écris un programme qui prend un nombre entier et affiche s’il est pair ou impair.
  */
}

function evenOrOdd2(nbr2: unknown): string {
  checkIsInteger(nbr2);
  if (nbr2 % 2 !== 0) {
    return `Ce nombre est impair.`;
  }
  return `Ce nombre est pair.`;
}

let nbr2 = 27;
let isEven2: string = evenOrOdd2(nbr2);
console.log(isEven2);

{
  /*
  2v1. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

// type guard to check if input is a positive number
// throws an error if not
// asserts nb is number tells TypeScript that after calling this function, nb can be treated as a number
const checkIsPositifNumber: (nb: number) => asserts nb is number = (nb) => {
  // check if the input is a positive number
  if (nb < 0) {
    // throw an error if not
    // message in French: "Number must be positive."
    throw new Error(`Le nombre doit être positif.`);
  }
};

function factorial(number: unknown): number {
  checkIsInteger(number);
  checkIsPositifNumber(number);
  let factorialResult: number = 1;
  for (let i = 2; i <= number; i++) {
    factorialResult *= i;
  }
  return factorialResult;
}

let number = 5;
let factorialOfANumber: number = factorial(number);
console.log(factorialOfANumber);

{
  /*
  2v2. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

function factorial2(number2: unknown): number {
  checkIsInteger(number2);
  checkIsPositifNumber(number2);
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
  2v3. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

function factorial3(number3: unknown): number {
  checkIsInteger(number3);
  checkIsPositifNumber(number3);
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
  2v4. Factorielle
Écris une fonction qui calcule la factorielle d’un nombre entier n (par exemple, factorielle(5) = 120).
*/
}

function factorial4(number4: unknown): number {
  checkIsInteger(number4);
  checkIsPositifNumber(number4);
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
  3v1. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

// type guard to check if input is an array
// throws an error if not
// asserts array is Array<unknown> tells TypeScript that after calling this function, array can be treated as an array
const checkIsArray: (array: unknown) => asserts array is Array<unknown> = (
  //  check if the input is an array
  array
) => {
  // throw an error if not
  if (!Array.isArray(array)) {
    // message in French: "Input must be an array."
    throw new Error(`La saisie d'entrée doit être un tableau.`);
  }
};

// check fonction to ensure array has at least 2 elements
// throws an error if not
const checkMinArrayLength2: (array: unknown[]) => asserts array is unknown[] = (
  array
) => {
  // check if the array has at least 2 elements
  if (array.length < 2) {
    // throw an error if not
    throw new Error(`Le tableau doit contenir au minimum deux éléments.`);
  }
};

// check fonction to ensure all elements in the array are integers
// throws an error if not
const checkIsNumbersArray = (array: unknown[]) => {
  // check if all elements in the array are integers
  if (!array.every((element) => Number.isInteger(element))) {
    // throw an error if not
    // message in French: "Each element of the array must be an integer."
    throw new Error(`Chaque élément du tableau doit être un nombre entier.`);
  }
};

function getMaxValue(numArray: unknown[]): number {
  checkIsArray(numArray);
  checkMinArrayLength2(numArray);
  checkIsNumbersArray(numArray);

  const arr = numArray as number[];

  let maxValue: number = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

let numArray = [51, 55, 58, 42, 43];
let maxValue = getMaxValue(numArray);
console.log(maxValue);

{
  /*
  3v2. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

function getMaxValue2(numArray2: unknown[]): number {
  checkIsArray(numArray2);
  checkMinArrayLength2(numArray2);
  checkIsNumbersArray(numArray2);

  const arr2 = numArray2 as number[];

  let maxValue2: number = arr2[arr2.length - 1];

  for (let i = arr2.length - 2; i >= 0; i--) {
    if (arr2[i] > maxValue2) {
      maxValue2 = arr2[i];
    }
  }
  return maxValue2;
}

let numArray2 = [109, 112, 125, 98, 56];
let maxValue2 = getMaxValue2(numArray2);
console.log(maxValue2);

{
  /*
  3v3. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

function getMaxValue3(numArray3: unknown[]): number {
  checkIsArray(numArray3);
  checkMinArrayLength2(numArray3);
  checkIsNumbersArray(numArray3);

  const arr3 = numArray3 as number[];

  let maxValue3: number = arr3[0];

  let i = 1;

  while (i < arr3.length) {
    if (arr3[i] > maxValue3) {
      maxValue3 = arr3[i];
    }
    i++;
  }
  return maxValue3;
}

let numArray3 = [209, 224, 512, 301, 98];
let maxValue3 = getMaxValue3(numArray3);
console.log(maxValue3);

{
  /*
  3v4. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

function getMaxValue4(numArray4: unknown[]): number {
  checkIsArray(numArray4);
  checkMinArrayLength2(numArray4);
  checkIsNumbersArray(numArray4);

  const arr4 = numArray4 as number[];
  let maxValue4: number = arr4[arr4.length - 1];

  let i = arr4.length - 2;

  while (i >= 0) {
    if (arr4[i] > maxValue4) {
      maxValue4 = arr4[i];
    }
    i--;
  }
  return maxValue4;
}

let numArray4 = [1025, 1030, 1350, 1052, 999];
let maxValue4 = getMaxValue4(numArray4);
console.log(maxValue4);

{
  /*
  3v5. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

function getMaxValue5(numArray5: unknown[]): number {
  checkIsArray(numArray5);
  checkMinArrayLength2(numArray5);
  checkMinArrayLength2(numArray5);

  const arr5 = numArray5 as number[];

  let maxValue5: number = arr5[0];

  for (let num of arr5) {
    if (num > maxValue5) {
      maxValue5 = num;
    }
  }
  return maxValue5;
}

let numArray5 = [201, 263, 298, 152, 175];
let maxValue5 = getMaxValue5(numArray5);
console.log(maxValue5);

{
  /*
  3v6. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

function getMaxValue6(numArray6: unknown[]): number {
  checkIsArray(numArray6);
  checkMinArrayLength2(numArray6);
  checkIsNumbersArray(numArray6);

  const arr6 = numArray6 as number[];

  let maxValue6: number = arr6[0];

  let i = 1;

  do {
    if (arr6[i] > maxValue6) {
      maxValue6 = arr6[i];
    }
    i++;
  } while (i < arr6.length);
  return maxValue6;
}

let numArray6 = [302, 352, 369, 301, 300];
let maxValue6 = getMaxValue6(numArray6);
console.log(maxValue6);

{
  /*
  3v7. Plus grand élément d’un tableau
Écris un algorithme qui retourne le plus grand nombre dans un tableau d’entiers.
*/
}

function getMaxValue7(numArray7: unknown[]): number {
  checkIsArray(numArray7);
  checkMinArrayLength2(numArray7);
  checkIsNumbersArray(numArray7);

  const arr7 = numArray7 as number[];
  let maxValue7: number = arr7[arr7.length - 1];

  let i = arr7.length - 2;

  do {
    if (arr7[i] > maxValue7) {
      maxValue7 = arr7[i];
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
  4v1. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

// type guard to check if input is a string
// throws an error if not
// asserts str is string tells TypeScript that after calling this function, str can be treated as a string
const checkIsString: (str: unknown) => asserts str is string = (str) => {
  // check if the input is a string
  if (typeof str !== "string") {
    // throw an error if not
    // message in French: "Input must be a string."
    throw new Error(`La saisie d'entrée doit être une chaîne de caractères. `);
  }
};

// helper function to normalize a string
// removes accents, converts to lowercase, and removes non-alphanumeric characters
const normalizedStr = (str: string): string =>
  // normalize the input string
  str
    // convert to lowercase
    .toLocaleLowerCase()
    // remove accents by normalizing to NFD form, NFD means Normalization Form Decomposition
    .normalize("NFD")
    // remove diacritical marks, diatritical means accent marks
    .replace(/[\u0300-\u036f]/g, "")
    // remove non-alphanumeric characters
    .replace(/[^a-z0-9]/g, "");

// ************

function checkPalindrome(str1: unknown): string {
  checkIsString(str1);
  const normalizedStr1: string = normalizedStr(str1);

  for (let i = 0; i < normalizedStr1.length / 2; i++) {
    if (normalizedStr1[i] !== normalizedStr1[normalizedStr1.length - 1 - i]) {
      return `Ce n'est pas un palindrome.`;
    }
  }
  return `C'est un palindrome.`;
}

let str1 = "Tu l'as trop écrasé César, ce Port-Salut !";
let isPalindrome = checkPalindrome(str1);
console.log(isPalindrome);

{
  /*
  4bis. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

// function to check if a string is a palindrome
function checkPalindromeWithComments(strBis: unknown): string {
  // type guard to ensure input is a string
  checkIsString(strBis);

  // normalize the string
  // this involves converting to lowercase, removing accents, and stripping non-alphanumeric characters
  // we use a helper function for this
  const normalizedStrBis: string = normalizedStr(strBis);

  // check if the normalized string is a palindrome using a for loop
  for (let i = 0; i < normalizedStrBis.length / 2; i++) {
    // compare characters from the start and end of the string
    if (
      normalizedStrBis[i] !== normalizedStrBis[normalizedStrBis.length - 1 - i]
    ) {
      // if characters do not match, it's not a palindrome
      return `Ce n'est pas un palindrome.`;
    }
  }
  // if all characters match, it is a palindrome
  return `C'est un palindrome.`;
}

let strBis = "Tu l'as trop écrasé César, ce Port-Salut !";
let isPalindromeBis = checkPalindromeWithComments(strBis);
console.log(isPalindromeBis);

{
  /*
  4v2. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

function checkPalindrome2(str2: unknown): string {
  checkIsString(str2);
  const normalizedStr2: string = normalizedStr(str2);

  for (let i = normalizedStr2.length - 1; i >= normalizedStr2.length / 2; i--) {
    if (normalizedStr2[i] !== normalizedStr2[normalizedStr2.length - 1 - i]) {
      return `Ce n'est pas un palindrome.`;
    }
  }
  return `C'est un palindrome.`;
}

let str2 = "Et la marine va venir à Malte";
let isPalindrome2: string = checkPalindrome2(str2);
console.log(isPalindrome2);

{
  /*
  4v3. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

function checkPalindrome3(str3: unknown): string {
  checkIsString(str3);
  const normalizedStr3: string = normalizedStr(str3);

  let i = 0;

  while (i < normalizedStr3.length / 2) {
    if (normalizedStr3[i] !== normalizedStr3[normalizedStr3.length - 1 - i]) {
      return `Ce n'est pas un palindrome.`;
    }
    i++;
  }
  return `Il s'agit bien d'un palindrome.`;
}

let str3 = "À l'étape, épate-la";
let isPalindrome3: string = checkPalindrome3(str3);
console.log(isPalindrome3);

{
  /*
  4v4. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

function checkPalindrome4(str4: unknown): string {
  checkIsString(str4);
  const normalizedStr4: string = normalizedStr(str4);

  let i = normalizedStr4.length - 1;

  while (i >= normalizedStr4.length / 2) {
    if (normalizedStr4[i] !== normalizedStr4[normalizedStr4.length - 1 - i]) {
      return `Ceci n'est pas un palindrome.`;
    }
    i--;
  }
  return `Il s'agit bien d'un palindrome.`;
}

let str4 = "Engage le jeu que je le gagne";
let isPalindrome4: string = checkPalindrome4(str4);
console.log(isPalindrome4);

{
  /*
  4v5. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

function checkPalindrome5(str5: unknown): string {
  checkIsString(str5);
  const normalizedStr5: string = normalizedStr(str5);

  let i = 0;

  do {
    if (normalizedStr5[i] !== normalizedStr5[normalizedStr5.length - 1 - i]) {
      return `Ceci n'est pas un palindrome.`;
    }
    i++;
  } while (i < normalizedStr5.length / 2);

  return `Il s'agit bien d'un palindrome.`;
}

let str5 = "À révéler mon nom, mon nom relèvera.";
let isPalindrome5: string = checkPalindrome5(str5);
console.log(isPalindrome5);

{
  /*
  4v6. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

function checkPalindrome6(str6: unknown): string {
  checkIsString(str6);
  const normalizedStr6: string = normalizedStr(str6);

  let i = normalizedStr6.length - 1;

  do {
    if (normalizedStr6[i] !== normalizedStr6[normalizedStr6.length - 1 - i]) {
      return `Ceci n'est pas un palindrome.`;
    }
    i--;
  } while (i >= normalizedStr6.length / 2);
  return `Ceci est un palindrome.`;
}

let str6 = "La mère Gide digère mal";
let isPalindrome6 = checkPalindrome6(str6);
console.log(isPalindrome6);

{
  /*
  4v7. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

function checkPalindrome7(str7: unknown): string {
  checkIsString(str7);
  const normalizedStr7: string = normalizedStr(str7);

  let i = 0;

  for (let str of normalizedStr7) {
    let oppositeI = normalizedStr7.length - 1 - i;

    if (i >= oppositeI) break;

    if (str !== normalizedStr7[oppositeI]) {
      return `Ceci n'est pas un palindrome.`;
    }

    i++;
  }
  return `Il s'agit bien d'un palindrome`;
}

let str7 = "Et la marine va venir à Malte";
let isPalindrome7 = checkPalindrome7(str7);
console.log(isPalindrome7);

{
  /*
  4v7Bis. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

{
  /*
  4v7. Palindrome
Vérifie si une chaîne de caractères est un palindrome (ex : « kayak », « radar »).
*/
}

// function to check if a string is a palindrome with comments
function checkPalindrome7WithComments(str7Bis: unknown): string {
  // type guard to ensure input is a string
  checkIsString(str7Bis);
  // normalize the string
  // this involves converting to lowercase, removing accents, and stripping non-alphanumeric characters
  // we use a helper function for this
  const normalizedStr7Bis: string = normalizedStr(str7Bis);

  // initialize index variable
  let i = 0;

  // iterate over each character in the normalized string
  // we use a for...of loop to access each character directly
  for (let str of normalizedStr7Bis) {
    // calculate the index of the character from the opposite end of the string
    let oppositeI = normalizedStr7Bis.length - 1 - i;

    // if the current index has reached or passed the opposite index, we can stop checking
    if (i >= oppositeI) break;

    // compare the character at the current index with the character at the opposite index
    // if they do not match, the string is not a palindrome
    if (str !== normalizedStr7Bis[oppositeI]) {
      return `Ceci n'est pas un palindrome.`;
    }
    // increment the index for the next iteration
    i++;
  }
  // if all character comparisons passed, the string is a palindrome
  return `Il s'agit bien d'un palindrome`;
}

// test the function with a sample string
let str7Bis = "Et la marine va venir à Malte";
let isPalindrome7Bis = checkPalindrome7(str7Bis);
console.log(isPalindrome7Bis);

{
  /*
    5. Somme des nombres de 1 à n
Écris une fonction qui retourne la somme des nombres de 1 à n.
Boucle for.
    */
}

function sumOfNumbers(nbr: unknown): number {
  checkIsInteger(nbr);

  let total: number = 0;

  for (let i = 1; i <= nbr; i++) {
    total += i;
  }
  return total;
}

let nb: number = 5;
let totalOfNumbers: number = sumOfNumbers(nb);
console.log(totalOfNumbers);

{
  /*
    5v2. Somme des nombres de 1 à n
Écris une fonction qui retourne la somme des nombres de 1 à n.
Boucle for inversée.
*/
}

function sumOfNumbers2(nbr2: unknown): number {
  checkIsInteger(nbr2);

  let total: number = 0;

  for (let i = nbr2; i >= 1; i--) {
    total += i;
  }
  return total;
}

let nb2: number = 4;
let totalOfNumbers2: number = sumOfNumbers2(nb2);
console.log(totalOfNumbers2);

{
  /*
    5v3. Somme des nombres de 1 à n
Écris une fonction qui retourne la somme des nombres de 1 à n.
Boucle while.
    */
}

function sumOfNumbers3(nbr3: unknown): number {
  checkIsInteger(nbr3);

  let total: number = 0;

  let i = 0;

  while (i <= nbr3) {
    total += i;
    i++;
  }
  return total;
}

let nb3: number = 5;
let totalOfNumbers3: number = sumOfNumbers3(nb3);
console.log(totalOfNumbers3);

{
  /*
    5v4. Somme des nombres de 1 à n
Écris une fonction qui retourne la somme des nombres de 1 à n.
Boucle while inversée.
    */
}

function sumOfNumbers4(nbr4: unknown): number {
  checkIsInteger(nbr4);

  let total: number = 0;

  let i = nbr4;

  while (i >= 1) {
    total += i;
    i--;
  }
  return total;
}

let nb4: number = 5;
let totalOfNumbers4: number = sumOfNumbers4(nb4);
console.log(totalOfNumbers4);

{
  /*
    5v5. Somme des nombres de 1 à n
Écris une fonction qui retourne la somme des nombres de 1 à n.
Boucle do while.
    */
}

function sumOfNumbers5(nbr5: unknown): number {
  checkIsInteger(nbr5);

  let total: number = 0;

  let i = 1;

  do {
    total += i;
    i++;
  } while (i <= nbr5);
  return total;
}

let nb5: number = 7;
let totalOfNumbers5: number = sumOfNumbers5(nb5);
console.log(totalOfNumbers5);

{
  /*
    5v6. Somme des nombres de 1 à n
Écris une fonction qui retourne la somme des nombres de 1 à n.
Boucle do while.
    */
}

function sumOfNumbers6(nbr6: unknown): number {
  checkIsInteger(nbr6);

  let total: number = 0;

  let i = nbr6;

  do {
    total += i;
    i--;
  } while (i >= 1);
  return total;
}

let nb6: number = 8;
let totalOfNumbers6: number = sumOfNumbers6(nb6);
console.log(totalOfNumbers6);

{
  /*
  6. Compter les voyelles
Écris une fonction qui compte le nombre de voyelles dans une chaîne donnée.
Boucle for.
 */
}

const vowels: string =
  `aeiouyAEIOUY` +
  `àáâãäåÀÁÂÃÄÅ` +
  `èéêëÈÉÊË` +
  `ìíîïÌÍÎÏ` +
  `òóôõöÒÓÔÕÖ` +
  `ùúûüÙÚÛÜ` +
  `ÿŸ`;

function countVowels(string: unknown): number {
  checkIsString(string);

  let count: number = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}

const sentence: string = `Je m'appelle Ludovic`;
const totalOfVowels: number = countVowels(sentence);
console.log(totalOfVowels);

{
  /*
  6v2. Compter les voyelles
Écris une fonction qui compte le nombre de voyelles dans une chaîne donnée.
Boucle for inversé.
 */
}

function countVowels2(string2: unknown): number {
  checkIsString(string2);

  let count: number = 0;

  for (let i = string2.length - 1; i >= 0; i--) {
    if (vowels.includes(string2[i])) {
      count++;
    }
  }
  return count;
}

const sentence2: string = "Je m'appelle Ludovic Scelles";
const totalOfVowels2: number = countVowels2(sentence2);
console.log(totalOfVowels2);

{
  /*
  6v3. Compter les voyelles
Écris une fonction qui compte le nombre de voyelles dans une chaîne donnée.
Boucle while.
 */
}

function countVowels3(string3: unknown): number {
  checkIsString(string3);

  let count: number = 0;

  let i = 0;

  while (i < string3.length) {
    if (vowels.includes(string3[i])) {
      count++;
    }
    i++;
  }
  return count;
}

const sentence3: string = `Hello Everybody`;
const totalOfVowels3: number = countVowels3(sentence3);
console.log(totalOfVowels3);

{
  /*
  6v4. Compter les voyelles
Écris une fonction qui compte le nombre de voyelles dans une chaîne donnée.
Boucle while inversé.
 */
}

function countVowels4(string4: unknown): number {
  checkIsString(string4);

  let count: number = 0;

  let i = string4.length - 1;

  while (i >= 0) {
    if (vowels.includes(string4[i])) {
      count++;
    }
    i--;
  }
  return count;
}

const sentence4: string = `Hello Everyone`;
const totalOfVowels4: number = countVowels4(sentence4);
console.log(totalOfVowels4);

{
  /*
  6v5. Compter les voyelles
Écris une fonction qui compte le nombre de voyelles dans une chaîne donnée.
Boucle do while.
 */
}

function countVowels5(string5: unknown): number {
  checkIsString(string5);

  let count: number = 0;

  let i = 0;

  do {
    if (vowels.includes(string5[i])) {
      count++;
    }
    i++;
  } while (i < string5.length);

  return count;
}

const sentence5: string = `Angèle et Gilles en gilet gèlent.`;
const totalOfVowels5: number = countVowels5(sentence5);
console.log(totalOfVowels5);

{
  /*
  6v6. Compter les voyelles
Écris une fonction qui compte le nombre de voyelles dans une chaîne donnée.
Boucle do while inversé.
 */
}

function countVowels6(string6: unknown): number {
  checkIsString(string6);

  let count: number = 0;

  let i = string6.length - 1;

  do {
    if (vowels.includes(string6[i])) {
      count++;
    }
    i--;
  } while (i >= 0);
  return count;
}

const sentence6: string = `La mouche rousse touche la mousse`;
const totalOfVowels6: number = countVowels6(sentence6);
console.log(totalOfVowels6);

{
  /*
  6v7. Compter les voyelles
Écris une fonction qui compte le nombre de voyelles dans une chaîne donnée.
Boucle for ... of .
 */
}

function countVowels7(string7: unknown): number {
  checkIsString(string7);

  let count: number = 0;

  for (let str of string7) {
    if (vowels.includes(str)) {
      count++;
    }
  }
  return count;
}

const sentence7: string = `Une bête noire se baigne dans une baignoire noire`;
const totalOfVowels7: number = countVowels7(sentence7);
console.log(totalOfVowels7);

{
  /*
  7. FizzBuzz
Affiche les nombres de 1 à N. Pour chaque nombre divisible par 3, affiche « Fizz », par 5 « Buzz », et par les deux « FizzBuzz ».
Boucle for.
*/
}

function fizzBuzz(number: unknown): string[] {
  checkIsInteger(number);
  checkIsPositifNumber(number);

  let arrayFizzBuzz: string[] = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) arrayFizzBuzz.push(`FizzBuzz`);
    else if (i % 5 === 0) arrayFizzBuzz.push(`Buzz`);
    else if (i % 3 === 0) arrayFizzBuzz.push(`Fizz`);
    else arrayFizzBuzz.push(i.toString());
  }
  return arrayFizzBuzz;
}

const numberFB: number = 100;
const arrayFizzBuzz = fizzBuzz(numberFB);
console.log(arrayFizzBuzz);
