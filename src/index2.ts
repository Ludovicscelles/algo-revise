import { array, func, number } from "joi";
import {
  checkIsInteger,
  checkIsString,
  checkIsPositiveNumber,
  checkIsArray,
  checkIsIntegersArray,
  checkMinArrayLength2,
  checkMinArrayLength1,
  checkIsNumbersArray,
} from "./utils/CheckFunctions";

import { cleanString, words } from "./utils/Normalize";
import { max } from "class-validator";

/*
  1. Nombre de chiffres
Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
Exemple : 12345 → 5
Boucle for.
*/

function getDigitCount(int: unknown): number {
  checkIsInteger(int);

  const strInt: string = Math.abs(int).toString();
  let count: number = 0;

  for (let i = 0; i < strInt.length; i++) {
    count++;
  }
  return count;
}

const int = 12345;
const digitCount: number = getDigitCount(int);
console.log(digitCount);

/*
  1v2. Nombre de chiffres
Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
Exemple : 12345 → 5
Boucle for inversé.
*/

function getDigitCount2(int2: unknown): number {
  checkIsInteger(int2);

  const strInt2: string = Math.abs(int2).toString();

  let count2: number = 0;

  for (let i = strInt2.length - 1; i >= 0; i--) {
    count2++;
  }
  return count2;
}

const int2 = 1991;
const digitCount2: number = getDigitCount2(int2);
console.log(digitCount2);

/*
  1v3. Nombre de chiffres
Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
Exemple : 12345 → 5
Boucle while.
*/

function getDigitCount3(int3: unknown): number {
  checkIsInteger(int3);

  let strInt3: string = Math.abs(int3).toString();

  let count3: number = 0;

  let i = 0;

  while (i < strInt3.length) {
    count3++;
    i++;
  }
  return count3;
}

const int3 = 222332;
const digitCount3: number = getDigitCount3(int3);
console.log(digitCount3);

/*
  1v4. Nombre de chiffres
Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
Exemple : 12345 → 5
Boucle while inversé.
*/

function getDigitCount4(int4: unknown): number {
  checkIsInteger(int4);

  const strInt4: string = Math.abs(int4).toString();

  let count4: number = 0;

  let i = strInt4.length - 1;

  while (i >= 0) {
    count4++;
    i--;
  }
  return count4;
}

const int4 = 5269854;
const digitCount4: number = getDigitCount4(int4);
console.log(digitCount4);

/*
  1v5. Nombre de chiffres
Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
Exemple : 12345 → 5
Boucle do while.
*/

function getDigitCount5(int5: unknown): number {
  checkIsInteger(int5);

  const strInt5: string = Math.abs(int5).toString();

  let count5: number = 0;

  let i = 0;

  do {
    count5++;
    i++;
  } while (i < strInt5.length);
  return count5;
}

const int5 = 285;
const digitCount5: number = getDigitCount5(int5);
console.log(digitCount5);

/*
  1v6. Nombre de chiffres
Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
Exemple : 12345 → 5
Boucle do while inversé.
*/

function getDigitCount6(int6: unknown): number {
  checkIsInteger(int6);

  const strInt6: string = Math.abs(int6).toString();

  let count6: number = 0;

  let i = strInt6.length - 1;

  do {
    count6++;
    i--;
  } while (i >= 0);
  return count6;
}

const int6 = 10000000;
const digitCount6: number = getDigitCount6(int6);
console.log(digitCount6);

/*
  1v7. Nombre de chiffres
Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
Exemple : 12345 → 5
Boucle for ... of.
*/

function getDigitCount7(int7: unknown): number {
  checkIsInteger(int7);

  const strInt7: string = Math.abs(int7).toString();

  let count7: number = 0;

  for (let character of strInt7) {
    count7++;
  }
  return count7;
}

const int7 = 1231;
const digitCount7 = getDigitCount7(int7);
console.log(digitCount7);

/*
  1v8. Nombre de chiffres
Écris une fonction qui retourne le nombre de chiffres dans un entier donné.
Exemple : 12345 → 5
Boucle for ... in.
*/

function getDigitCount8(int8: unknown): number {
  checkIsInteger(int8);

  const strInt8: string = Math.abs(int8).toString();
  const chars: string[] = strInt8.split("");

  let count8: number = 0;

  for (let index in chars) {
    count8++;
  }
  return count8;
}

const int8 = 15559;
const digitCount8 = getDigitCount8(int8);
console.log(digitCount8);

{
  /*
  2. Inverser une chaîne
Écris une fonction qui retourne une chaîne inversée.

Exemple : "bonjour" → "ruojnob"
Boucle for.
*/
}

function reverseAString(string: unknown): string {
  checkIsString(string);

  let reversedString: string = "";

  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }
  return reversedString;
}

const stringToReverse: string = "civoduL";
const reversedString = reverseAString(stringToReverse);
console.log(reversedString);

{
  /*
  2v2. Inverser une chaîne
Écris une fonction qui retourne une chaîne inversée.

Exemple : "bonjour" → "ruojnob"
Boucle for inversé.
*/
}

function reverseAString2(string2: unknown): string {
  checkIsString(string2);

  let reversedString2: string = "";

  for (let i = string2.length - 1; i >= 0; i--) {
    reversedString2 += string2[i];
  }
  return reversedString2;
}

const stringToReverse2: string = "oduL";
const reversedString2 = reverseAString2(stringToReverse2);
console.log(reversedString2);

{
  /*
  2v3. Inverser une chaîne
Écris une fonction qui retourne une chaîne inversée.

Exemple : "bonjour" → "ruojnob"
Boucle while.
*/
}

function reverseAString3(string3: unknown): string {
  checkIsString(string3);

  let reversedString3: string = "";

  let i = 0;

  while (i < string3.length) {
    reversedString3 = string3[i] + reversedString3;
    i++;
  }
  return reversedString3;
}

const stringToReverse3: string = "12345";
const reversedString3 = reverseAString3(stringToReverse3);
console.log(reversedString3);

{
  /*
  2v4. Inverser une chaîne
Écris une fonction qui retourne une chaîne inversée.

Exemple : "bonjour" → "ruojnob"
Boucle while inversé.
*/
}

function reverseAString4(string4: unknown): string {
  checkIsString(string4);

  let reversedString4: string = "";

  let i = string4.length - 1;

  while (i >= 0) {
    reversedString4 = reversedString4 + string4[i];
    i--;
  }
  return reversedString4;
}

const stringToReverse4: string = "ruojnoB";
const reversedString4 = reverseAString4(stringToReverse4);
console.log(reversedString4);

{
  /*
  2v5. Inverser une chaîne
Écris une fonction qui retourne une chaîne inversée.

Exemple : "bonjour" → "ruojnob"
Boucle do while.
*/
}

function reverseAString5(string5: unknown): string {
  checkIsString(string5);

  let reversedString5: string = "";

  let i = 0;

  do {
    reversedString5 = string5[i] + reversedString5;
    i++;
  } while (i < string5.length);
  return reversedString5;
}

const stringToReverse5: string = "esreveR";
const reversedString5 = reverseAString5(stringToReverse5);
console.log(reversedString5);

{
  /*
  2v6. Inverser une chaîne
Écris une fonction qui retourne une chaîne inversée.

Exemple : "bonjour" → "ruojnob"
Boucle do while inversé.
*/
}

function reverseAString6(string6: unknown): string {
  checkIsString(string6);

  let reversedString6: string = "";

  let i = string6.length - 1;

  do {
    reversedString6 = reversedString6 + string6[i];
    i--;
  } while (i >= 0);
  return reversedString6;
}

const stringToReverse6: string = "gnirtS";
const reversedString6 = reverseAString6(stringToReverse6);
console.log(reversedString6);

{
  /*
  2v7. Inverser une chaîne
Écris une fonction qui retourne une chaîne inversée.

Exemple : "bonjour" → "ruojnob"
Boucle for ... of.
*/
}

function reverseAString7(string7: unknown): string {
  checkIsString(string7);

  let reversedString7: string = "";

  for (let str of string7) {
    reversedString7 = str + reversedString7;
  }
  return reversedString7;
}

const stringToReverse7: string = "olleH";
const reversedString7 = reverseAString7(stringToReverse7);
console.log(reversedString7);

{
  /*
  2v8. Inverser une chaîne
Écris une fonction qui retourne une chaîne inversée.

Exemple : "bonjour" → "ruojnob"
With split, reverse and join methods.
*/
}

function reverseAString8(string8: unknown): string {
  checkIsString(string8);

  let string8Array: string[] = string8.split("");

  return string8Array.reverse().join("");
}

const stringToReverse8: string = "dlroW ,olleH";
const reversedString8 = reverseAString8(stringToReverse8);
console.log(reversedString8);

{
  /*
  3. Écris une fonction qui affiche les tables de multiplication pour tous les nombres entiers allant de 1 jusqu’à un nombre n donné.
Pour chaque nombre, la table doit afficher les multiplications de x 1 à x 10.
Chaque table doit être précédée d’un titre (ex : “Table de 5”) et d’une ligne de séparation.
Chaque ligne doit être affichée sous la forme : 5 x 3 = 15
Boucle for.
*/
}

function displayMultiplicationTables(number: unknown): string {
  checkIsInteger(number);

  let displayTimesTables: string = "";

  for (let i = 1; i <= number; i++) {
    if (i > 1) displayTimesTables += `\n`;

    displayTimesTables += `Table de ${i}\n`;
    displayTimesTables += `-----------------\n`;
    for (let j = 1; j <= 10; j++) {
      displayTimesTables += `${i} x ${j} = ${i * j}\n`;
    }
  }
  return displayTimesTables;
}

const numberOfTables: number = 5;
const multiplicationTables: string =
  displayMultiplicationTables(numberOfTables);
console.log(multiplicationTables);

{
  /*
  3v2. Écris une fonction qui affiche les tables de multiplication pour tous les nombres entiers allant de 1 jusqu’à un nombre n donné.
Pour chaque nombre, la table doit afficher les multiplications de x 1 à x 10.
Chaque table doit être précédée d’un titre (ex : “Table de 5”) et d’une ligne de séparation.
Chaque ligne doit être affichée sous la forme : 5 x 3 = 15
Boucle for inversé.
*/
}

function displayMultiplicationTables2(number2: unknown): string {
  checkIsInteger(number2);

  let displayTimesTables2: string[] = [];

  for (let i = number2; i >= 1; i--) {
    let tablelines: string[] = [];

    tablelines.push(`Table de ${i}\n`);
    tablelines.push(`-----------------\n`);
    for (let j = 10; j >= 1; j--) {
      tablelines.push(`${i} x ${j} = ${i * j}\n`);
    }

    tablelines = [
      tablelines[0],
      tablelines[1],
      ...tablelines.slice(2).reverse(),
    ];

    displayTimesTables2.push(tablelines.join(""));
  }
  return displayTimesTables2.reverse().join("\n");
}

const numberOfTables2: number = 3;
const multiplicationTables2: string =
  displayMultiplicationTables2(numberOfTables2);
console.log(multiplicationTables2);

{
  /*
  3v2bis (with comments). Écris une fonction qui affiche les tables de multiplication pour tous les nombres entiers allant de 1 jusqu’à un nombre n donné.
Pour chaque nombre, la table doit afficher les multiplications de x 1 à x 10.
Chaque table doit être précédée d’un titre (ex : “Table de 5”) et d’une ligne de séparation.
Chaque ligne doit être affichée sous la forme : 5 x 3 = 15
Boucle for inversé.
*/
}

// function with comments for displayMultiplicationTables2
function displayMultiplicationTables2WithComments(number2Bis: unknown): string {
  // Check if the input is an integer
  checkIsInteger(number2Bis);

  // Initialize an array to hold the formatted multiplication tables
  let displayTimesTables2: string[] = [];

  // Loop through each number from number2Bis down to 1
  // This outer loop generates each multiplication table
  for (let i = number2Bis; i >= 1; i--) {
    // Initialize an array to hold the lines of the current multiplication table
    // This will include the title, separator, and multiplication lines
    let tablelines: string[] = [];

    // Add the title of the multiplication table
    tablelines.push(`Table de ${i}\n`);
    // Add the separator line
    tablelines.push(`-----------------\n`);

    // Inner loop to generate multiplication lines from 10 down to 1
    for (let j = 10; j >= 1; j--) {
      // Add each multiplication line in the format "i x j = result"
      tablelines.push(`${i} x ${j} = ${i * j}\n`);
    }

    // Reverse the order of multiplication lines to have them from 1 to 10
    // while keeping the title and separator at the top
    tablelines = [
      //  Keep the title line at the top
      tablelines[0],
      //  Keep the separator line second
      tablelines[1],
      //  Reverse the multiplication lines to be in ascending order
      //  slice(2) gets all lines after the first two (title and separator)
      ...tablelines.slice(2).reverse(),
    ];

    // Join the lines of the current table into a single string and add to the main array
    displayTimesTables2.push(tablelines.join(""));
  }
  // Reverse the order of the tables to have them from 1 to number2Bis
  return displayTimesTables2.reverse().join("\n");
}

// Testing the function with comments
const numberOfTables2Bis: number = 3;
const multiplicationTables2Bis: string =
  displayMultiplicationTables2WithComments(numberOfTables2Bis);
console.log(multiplicationTables2Bis);

{
  /*
  3v3. Écris une fonction qui affiche les tables de multiplication pour tous les nombres entiers allant de 1 jusqu’à un nombre n donné.
Pour chaque nombre, la table doit afficher les multiplications de x 1 à x 10.
Chaque table doit être précédée d’un titre (ex : “Table de 5”) et d’une ligne de séparation.
Chaque ligne doit être affichée sous la forme : 5 x 3 = 15
Boucle while.
*/
}

function displayMultiplicationTables3(number3: unknown): string {
  checkIsInteger(number3);

  let displayTimesTables3: string = "";

  let i = 1;

  while (i <= number3) {
    if (i > 1) displayTimesTables3 += `\n`;
    displayTimesTables3 += `Table de ${i}\n`;
    displayTimesTables3 += `---------------\n`;
    let j = 1;
    while (j <= 10) {
      displayTimesTables3 += `${i} x ${j} = ${i * j}\n`;
      j++;
    }
    i++;
  }
  return displayTimesTables3;
}

const numberOfTables3: number = 4;
const multiplicationTables3: string =
  displayMultiplicationTables3(numberOfTables3);
console.log(multiplicationTables3);

{
  /*
  3v4. Écris une fonction qui affiche les tables de multiplication pour tous les nombres entiers allant de 1 jusqu’à un nombre n donné.
Pour chaque nombre, la table doit afficher les multiplications de x 1 à x 10.
Chaque table doit être précédée d’un titre (ex : “Table de 5”) et d’une ligne de séparation.
Chaque ligne doit être affichée sous la forme : 5 x 3 = 15
Boucle while inversé.
*/
}

function displayMultiplicationTables4(number4: unknown): string {
  checkIsInteger(number4);

  let displayTimesTables4: string[] = [];

  let i = number4;

  while (i >= 1) {
    let tablelines: string[] = [];
    tablelines.push(`Table de ${i}\n`);
    tablelines.push(`--------------------\n`);
    let j = 10;
    while (j >= 1) {
      tablelines.push(`${i} x ${j} = ${i * j}\n`);
      j--;
    }
    tablelines = [
      tablelines[0],
      tablelines[1],
      ...tablelines.slice(2).reverse(),
    ];
    displayTimesTables4.push(tablelines.join(""));
    i--;
  }
  return displayTimesTables4.reverse().join(`\n`);
}

const numberOfTables4: number = 2;
const multiplicationTables4: string =
  displayMultiplicationTables4(numberOfTables4);
console.log(multiplicationTables4);

{
  /*
  3v5. Écris une fonction qui affiche les tables de multiplication pour tous les nombres entiers allant de 1 jusqu’à un nombre n donné.
Pour chaque nombre, la table doit afficher les multiplications de x 1 à x 10.
Chaque table doit être précédée d’un titre (ex : “Table de 5”) et d’une ligne de séparation.
Chaque ligne doit être affichée sous la forme : 5 x 3 = 15
Boucle do while.
*/
}

function displayMultiplicationTables5(number5: unknown): string {
  checkIsInteger(number5);

  let displayTimesTables5: string = "";

  let i = 1;

  do {
    if (i > 1) {
      displayTimesTables5 += `\n`;
    }
    displayTimesTables5 += `Table de ${i}\n`;
    displayTimesTables5 += `-----------------\n`;

    let j = 1;

    do {
      displayTimesTables5 += `${i} x ${j} = ${i * j}\n`;
      j++;
    } while (j <= 10);

    i++;
  } while (i <= number5);
  return displayTimesTables5;
}

const numberOfTables5: number = 6;
const multiplicationTables5: string =
  displayMultiplicationTables5(numberOfTables5);
console.log(multiplicationTables5);

{
  /*
  3v6. Écris une fonction qui affiche les tables de multiplication pour tous les nombres entiers allant de 1 jusqu’à un nombre n donné.
Pour chaque nombre, la table doit afficher les multiplications de x 1 à x 10.
Chaque table doit être précédée d’un titre (ex : “Table de 5”) et d’une ligne de séparation.
Chaque ligne doit être affichée sous la forme : 5 x 3 = 15
Boucle do while inversé.
*/
}

function displayMultiplicationTables6(number6: unknown): string {
  checkIsInteger(number6);

  let displayTimesTables6: string[] = [];

  let i = number6;

  do {
    let tablelines6: string[] = [];

    tablelines6.push(`Table de ${i}\n`);
    tablelines6.push(`----------------\n`);

    let j = 10;

    do {
      tablelines6.push(`${i} x ${j} = ${i * j}\n`);
      j--;
    } while (j >= 1);

    tablelines6 = [
      tablelines6[0],
      tablelines6[1],
      ...tablelines6.slice(2).reverse(),
    ];

    displayTimesTables6.push(tablelines6.join(""));

    i--;
  } while (i >= 1);
  return displayTimesTables6.reverse().join(`\n`);
}

const numberOfTables6: number = 2;
const multiplicationTables6: string =
  displayMultiplicationTables6(numberOfTables6);
console.log(multiplicationTables6);

{
  /*
  3v7. Écris une fonction qui affiche les tables de multiplication pour tous les nombres entiers allant de 1 jusqu’à un nombre n donné.
Pour chaque nombre, la table doit afficher les multiplications de x 1 à x 10.
Chaque table doit être précédée d’un titre (ex : “Table de 5”) et d’une ligne de séparation.
Chaque ligne doit être affichée sous la forme : 5 x 3 = 15

*/
}

class Table {
  constructor(private n: number) {}

  // constructor (private n: number) {} is same as:
  // private n: number;
  // constructor(n: number) {
  //   this.n = n;
  // }

  generate(): string {
    const lines = Array.from(
      { length: 10 },
      (_, i) => `${this.n} x ${i + 1} = ${this.n * (i + 1)}`
    ).join(`\n`);
    return `Table de ${this.n}\n-----------------\n${lines}`;
  }
}

const table5 = new Table(5);
console.log(table5.generate());

{
  /*
  3v7Bis (with comments). Écris une fonction qui affiche les tables de multiplication pour tous les nombres entiers allant de 1 jusqu’à un nombre n donné.
Pour chaque nombre, la table doit afficher les multiplications de x 1 à x 10.
Chaque table doit être précédée d’un titre (ex : “Table de 5”) et d’une ligne de séparation.
Chaque ligne doit être affichée sous la forme : 5 x 3 = 15

*/
}

// class with comments for TableWithComments
class TableWithComments {
  // Constructor to initialize the table with a specific number
  // The number for which the multiplication table will be generated
  constructor(private n: number) {}

  // Method to generate the multiplication table as a formatted string
  // This method creates the multiplication lines and formats them with a title and separator
  generate(): string {
    // Create an array of multiplication lines using Array.from
    // The array has 10 elements, each representing a multiplication from 1 to 10
    const lines = Array.from(
      // Create an array with 10 elements
      //  The underscore (_) is a placeholder for the unused first argument (the current element)
      { length: 10 },
      // For each index (i), generate the multiplication line in the format "n x (i+1) = result"
      (_, i) => `${this.n} x ${i + 1} = ${this.n * (i + 1)}`
      // Join the array of lines into a single string with newline characters between each line
    ).join(`\n`);
    // Return the complete formatted multiplication table with title and separator
    return `Table de ${this.n}\n-----------------\n${lines}`;
  }
}

const table5Bis = new TableWithComments(5);
console.log(table5Bis.generate());

{
  /*
  4. Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Boucle for.
*/
}

function digitsSum(integer: unknown): number {
  checkIsInteger(integer);

  let sum: number = 0;

  let integerAsString: string = Math.abs(integer).toString();

  for (let i = 0; i < integerAsString.length; i++) {
    const digit: number = Number(parseInt(integerAsString[i]));
    sum += digit;
  }
  return sum;
}

const inputNumber: number = -456;
const sumOfDigits: number = digitsSum(inputNumber);
console.log(sumOfDigits);

{
  /*
  4v2. Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Boucle for inversé.
*/
}

function digitsSum2(integer2: unknown): number {
  checkIsInteger(integer2);

  let sum2: number = 0;

  let integerAsString2: string = Math.abs(integer2).toString();

  for (let i = integerAsString2.length - 1; i >= 0; i--) {
    const digit2: number = Number(parseInt(integerAsString2[i]));
    sum2 += digit2;
  }
  return sum2;
}

const inputNumber2: number = 789;
const sumOfDigits2: number = digitsSum2(inputNumber2);
console.log(sumOfDigits2);

{
  /*
  4v3. Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Boucle while.
*/
}

function digitsSum3(integer3: unknown): number {
  checkIsInteger(integer3);

  let sum3: number = 0;

  let integerAsString3: string = Math.abs(integer3).toString();

  let i = 0;

  while (i < integerAsString3.length) {
    const digit3: number = Number(parseInt(integerAsString3[i]));
    sum3 += digit3;
    i++;
  }
  return sum3;
}

const inputNumber3: number = 321;
const sumOfDigits3: number = digitsSum3(inputNumber3);
console.log(sumOfDigits3);

{
  /*
  4v4. Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Boucle while inversé.
*/
}

function digitsSum4(integer4: unknown): number {
  checkIsInteger(integer4);

  let sum4: number = 0;

  let integerAsString4: string = Math.abs(integer4).toString();

  let i = integerAsString4.length - 1;

  while (i >= 0) {
    const digit4: number = Number(parseInt(integerAsString4[i]));
    sum4 += digit4;
    i--;
  }
  return sum4;
}

const inputNumber4: number = 654;
const sumOfDigits4: number = digitsSum4(inputNumber4);
console.log(sumOfDigits4);

{
  /*
  4v5. Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Boucle do while.
*/
}

function digitsSum5(integer5: unknown): number {
  checkIsInteger(integer5);

  let sum5: number = 0;

  let integerAsString5: string = Math.abs(integer5).toString();

  let i = 0;

  do {
    const digit5: number = Number(parseInt(integerAsString5[i]));
    sum5 += digit5;
    i++;
  } while (i < integerAsString5.length);
  return sum5;
}

const inputNumber5: number = 1011;
const sumOfDigits5: number = digitsSum5(inputNumber5);
console.log(sumOfDigits5);

{
  /*
  4v6. Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Boucle do while inversé.
*/
}

function digitsSum6(integer6: unknown): number {
  checkIsInteger(integer6);

  let sum6: number = 0;

  let integerAsString6: string = Math.abs(integer6).toString();

  let i = integerAsString6.length - 1;

  do {
    const digit6: number = Number(parseInt(integerAsString6[i]));
    sum6 += digit6;
    i--;
  } while (i >= 0);
  return sum6;
}

const inputNumber6: number = 2022;
const sumOfDigits6: number = digitsSum6(inputNumber6);
console.log(sumOfDigits6);

{
  /*
  4v7. Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Boucle for ... of .
*/
}

function digitsSum7(integer7: unknown): number {
  checkIsInteger(integer7);

  let sum7: number = 0;

  let integerAsString7: string = Math.abs(integer7).toString();

  for (let str of integerAsString7) {
    const digit7: number = Number(parseInt(str));
    sum7 += digit7;
  }
  return sum7;
}

const inputNumber7: number = 30303;
const sumOfDigits7: number = digitsSum7(inputNumber7);
console.log(sumOfDigits7);

{
  /*
  4v8. Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Boucle for ... in .
*/
}

function digitsSum8(integer8: unknown): number {
  checkIsInteger(integer8);

  let sum8: number = 0;

  let integerAsString8: string = Math.abs(integer8).toString();
  const chars: string[] = [...integerAsString8];

  for (const index in chars) {
    const digit8: number = Number(parseInt(integerAsString8[index]));
    sum8 += digit8;
  }
  return sum8;
}

const inputNumber8: number = 40404;
const sumOfDigits8: number = digitsSum8(inputNumber8);
console.log(sumOfDigits8);

{
  /*
  4v9. Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Class POO.
*/
}

class DigitsSumUtils {
  constructor(private integer: number) {
    checkIsInteger(integer);
  }

  sum(): number {
    let sum: number = 0;
    let integerAsString: string = Math.abs(this.integer).toString();

    for (let str of integerAsString) {
      const digit: number = Number(parseInt(str));
      sum += digit;
    }
    return sum;
  }
}

const digitsSumUtil = new DigitsSumUtils(-50505);
const sumOfDigitsUtil: number = digitsSumUtil.sum();
console.log(sumOfDigitsUtil);

{
  /*
  4v9bis (with comments). Somme des chiffres
Écris une fonction qui retourne la somme de tous les chiffres d’un nombre entier.
Exemple : 123 → 1 + 2 + 3 = 6
Class POO.
*/
}

// class with comments for DigitsSumUtilsWithComments
class DigitsSumUtilsWithComments {
  // Constructor to initialize the class with an integer
  // The integer whose digits will be summed
  constructor(private integer: number) {
    // Validate that the input is an integer
    checkIsInteger(integer);
  }

  // Method to calculate the sum of the digits of the integer
  sum(): number {
    // Initialize sum variable to hold the total sum of digits
    let sum: number = 0;
    // Convert the absolute value of the integer to a string
    let integerAsString: string = Math.abs(this.integer).toString();

    // Loop through each character in the string representation of the integer
    for (let str of integerAsString) {
      // Parse the character to an integer digit
      const digit: number = Number(parseInt(str));
      // Add the digit to the sum
      sum += digit;
    }
    // Return the final sum of the digits
    return sum;
  }
}
// Testing the class with comments
const digitsSumUtilBis = new DigitsSumUtilsWithComments(-60606);
const sumOfDigitsUtilBis: number = digitsSumUtilBis.sum();
console.log(sumOfDigitsUtilBis);

{
  /*
  5. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle for.
*/
}

function checkPrimeNumber(nbr: unknown): string {
  checkIsInteger(nbr);
  checkIsPositiveNumber(nbr);

  if (nbr <= 1) {
    return `Il ne s'agit pas d'un nombre premier`;
  }

  for (let i = 2; i < nbr; i++) {
    if (nbr % i === 0) {
      return `Il ne s'agit pas d'un nombre premier`;
    }
  }
  return `Il s'agit d'un nombre premier`;
}

const nbr: number = 7;
const primeNumber: string = checkPrimeNumber(nbr);
console.log(primeNumber);

{
  /*
  5v2. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle for inversé.
*/
}

function checkPrimeNumber2(nbr2: unknown): string {
  checkIsInteger(nbr2);
  checkIsPositiveNumber(nbr2);

  if (nbr2 <= 1) {
    return `Il s'agit pas d'un nombre premier`;
  }

  for (let i = nbr2 - 1; i >= 2; i--) {
    if (nbr2 % i === 0) {
      return `Il ne s'agit pas d'un nombre premier`;
    }
  }
  return `Il ne s'agit d'un nombre premier`;
}

const nbr2: number = 11;
const primeNumber2: string = checkPrimeNumber2(nbr2);
console.log(primeNumber2);

{
  /*
  5v3. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle while.
*/
}

function checkPrimeNumber3(nbr3: unknown): string {
  checkIsInteger(nbr3);
  checkIsPositiveNumber(nbr3);

  if (nbr3 <= 1) {
    return `Il ne s'agit pas d'un nombre premier`;
  }

  let i = 2;

  while (i < nbr3) {
    if (nbr3 % i === 0) {
      return `Il ne s'agit pas d'un nombre premier`;
    }
    i++;
  }
  return `Il s'agit d'un nombre premier`;
}

const nbr3: number = 13;
const primeNumber3: string = checkPrimeNumber3(nbr3);
console.log(primeNumber3);

{
  /*
  5v4. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle while inversé.
*/
}

function checkPrimeNumber4(nbr4: unknown): string {
  checkIsInteger(nbr4);
  checkIsPositiveNumber(nbr4);

  if (nbr4 <= 1) {
    return `Il ne s'agit pas d'un nombre premier`;
  }

  let i = nbr4 - 1;

  while (i >= 2) {
    if (nbr4 % i === 0) {
      return `Il ne s'agit pas d'un nombre premier`;
    }
    i--;
  }
  return `Il s'agit d'un nombre premier`;
}

const nbr4: number = 18;
const primeNumber4: string = checkPrimeNumber4(nbr4);
console.log(primeNumber4);

{
  /*
  5v5. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle do while.
*/
}

function checkPrimeNumber5(nbr5: unknown): string {
  checkIsInteger(nbr5);
  checkIsPositiveNumber(nbr5);

  if (nbr5 <= 1) {
    return `Il ne s'agit pas d'un nombre premier`;
  }

  let i = 2;

  do {
    if (nbr5 % i === 0) {
      return `Il ne s'agit pas d'un nombre premier`;
    }
    i++;
  } while (i < nbr5);
  return `Il s'agit d'un nombre premier`;
}

const nbr5: number = 19;
const primeNumber5: string = checkPrimeNumber5(nbr5);
console.log(primeNumber5);

{
  /*
  5v6. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle do while inversé.
*/
}

function checkPrimeNumber6(nbr6: unknown): string {
  checkIsInteger(nbr6);
  checkIsPositiveNumber(nbr6);

  if (nbr6 <= 1) {
    return `Il ne s'agit pas d'un nombre premier`;
  }

  let i = nbr6 - 1;

  do {
    if (nbr6 % i === 0) {
      return `Il ne s'agit pas d'un nombre premier`;
    }
    i--;
  } while (i >= 2);
  return `Il s'agit d'un nombre premier`;
}

const nbr6: number = 24;
const primeNumber6: string = checkPrimeNumber6(nbr6);
console.log(primeNumber6);

{
  /*
  5v7. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle for.
Boolean return.
Limite des itérations à la racine carrée du nombre.
*/
}

function isPrimeNumber(nbr7: unknown): boolean {
  checkIsInteger(nbr7);
  checkIsPositiveNumber(nbr7);

  if (nbr7 <= 1) {
    return false;
  }

  const squareNbr7: number = Math.sqrt(nbr7);

  for (let i = 2; i <= squareNbr7; i++) {
    if (nbr7 % i === 0) {
      return false;
    }
  }
  return true;
}

const nbr7: number = 30;
const primeNumber7: boolean = isPrimeNumber(nbr7);
console.log(primeNumber7);

{
  /*
  5v8. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle for inversé.
Boolean return.
Limite des itérations à la racine carrée du nombre.
*/
}

function isPrimeNumber2(nbr8: unknown): boolean {
  checkIsInteger(nbr8);
  checkIsPositiveNumber(nbr8);

  if (nbr8 <= 1) {
    return false;
  }

  const squareNbr8: number = Math.floor(Math.sqrt(nbr8));

  for (let i = squareNbr8; i >= 2; i--) {
    if (nbr8 % i === 0) {
      return false;
    }
  }
  return true;
}

const nbr8: number = 38;
const primeNumber8: boolean = isPrimeNumber2(nbr8);
console.log(primeNumber8);

{
  /*
  5v9. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle while.
Boolean return.
Limite des itérations à la racine carrée du nombre.
*/
}

function isPrimeNumber3(nbr9: unknown): boolean {
  checkIsInteger(nbr9);
  checkIsPositiveNumber(nbr9);

  if (nbr9 <= 1) {
    return false;
  }

  const sqrtNbr9: number = Math.sqrt(nbr9);

  let i = 2;

  while (i <= sqrtNbr9) {
    if (nbr9 % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

const nbr9: number = 42;
const primeNumber9: boolean = isPrimeNumber3(nbr9);
console.log(primeNumber9);

{
  /*
  5v10. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle while inversé.
Boolean return.
Limite des itérations à la racine carrée du nombre.
*/
}

function isPrimeNumber4(nbr10: unknown): boolean {
  checkIsInteger(nbr10);
  checkIsPositiveNumber(nbr10);

  if (nbr10 <= 1) {
    return false;
  }

  const sqrtNbr10: number = Math.floor(Math.sqrt(nbr10));

  let i = sqrtNbr10;

  while (i >= 2) {
    if (nbr10 % i === 0) {
      return false;
    }
    i--;
  }
  return true;
}

const nbr10: number = 48;
const primeNumber10: boolean = isPrimeNumber4(nbr10);
console.log(primeNumber10);

{
  /*
  5v11. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle do while.
Boolean return.
Limite des itérations à la racine carrée du nombre.
*/
}

function isPrimeNumber5(nbr11: unknown): boolean {
  checkIsInteger(nbr11);
  checkIsPositiveNumber(nbr11);

  if (nbr11 <= 1) {
    return false;
  }

  const sqrtNbr11: number = Math.sqrt(nbr11);

  let i = 2;

  do {
    if (nbr11 % i === 0) {
      return false;
    }
    i++;
  } while (i <= sqrtNbr11);
  return true;
}

const nbr11: number = 54;
const primeNumber11: boolean = isPrimeNumber5(nbr11);
console.log(primeNumber11);

{
  /*
  5v12. Nombre premier
Écris une fonction qui vérifie si un nombre est premier (divisible uniquement par 1 et lui-même).
Boucle do while inversé.
Boolean return.
Limite des itérations à la racine carrée du nombre.
*/
}

function isPrimeNumber6(nbr12: unknown): boolean {
  checkIsInteger(nbr12);
  checkIsPositiveNumber(nbr12);

  if (nbr12 <= 1) {
    return false;
  }

  const sqrtNbr12: number = Math.floor(Math.sqrt(nbr12));

  let i = sqrtNbr12;

  do {
    if (nbr12 % i === 0) {
      return false;
    }
    i--;
  } while (i >= 2);
  return true;
}

const nbr12: number = 59;
const primeNumber12: boolean = isPrimeNumber6(nbr12);
console.log(primeNumber12);

{
  /*
  6. Compter les lettres
Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).
Boucle for.
*/
}

function countLettersInAString(sentence: unknown): number {
  checkIsString(sentence);

  const normalizeSentence: string = cleanString(sentence);

  let count: number = 0;

  for (let i = 0; i < normalizeSentence.length; i++) {
    count++;
  }
  return count;
}

const sentenceToCount: string = "Bonjour, ça va 123 ?";
const letterCount: number = countLettersInAString(sentenceToCount);
console.log(letterCount);

{
  /*
  6v2. Compter les lettres
Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).
Boucle for inversé.
*/
}

function countLettersInAString2(sentence: unknown): number {
  checkIsString(sentence);

  const normalizeSentence: string = cleanString(sentence);

  let count: number = 0;

  for (let i = normalizeSentence.length - 1; i >= 0; i--) {
    count++;
  }
  return count;
}

const sentenceToCount2: string = "Salut! Comment ça va 456 ?";
const letterCount2: number = countLettersInAString2(sentenceToCount2);
console.log(letterCount2);

{
  /*
  6v3. Compter les lettres
Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).
Boucle while.
*/
}

function countLettersInAString3(sentence: unknown): number {
  checkIsString(sentence);

  const normalizeSentence: string = cleanString(sentence);

  let count: number = 0;

  let i = 0;

  while (i < normalizeSentence.length) {
    count++;
    i++;
  }
  return count;
}

const sentenceToCount3: string = "Coucou! Ça roule 789 ?";
const letterCount3: number = countLettersInAString3(sentenceToCount3);
console.log(letterCount3);

{
  /*
  6v4. Compter les lettres
Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).
Boucle while inversé.
*/
}

function countLettersInAString4(sentence: unknown): number {
  checkIsString(sentence);

  const normalizeSentence: string = cleanString(sentence);

  let count: number = 0;

  let i = normalizeSentence.length - 1;

  while (i >= 0) {
    count++;
    i--;
  }
  return count;
}

const sentenceToCount4: string = "Hey! Quoi de neuf 1010 ?";
const letterCount4: number = countLettersInAString4(sentenceToCount4);
console.log(letterCount4);

{
  /*
  6v5. Compter les lettres
Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).
Boucle do while.
*/
}

function countLettersInAString5(sentence: unknown): number {
  checkIsString(sentence);

  const normalizeSentence: string = cleanString(sentence);

  let count: number = 0;

  let i = 0;

  do {
    count++;
    i++;
  } while (i < normalizeSentence.length);
  return count;
}

const sentenceToCount5: string = "Salut! Tout baigne 1112 ?";
const letterCount5: number = countLettersInAString5(sentenceToCount5);
console.log(letterCount5);

{
  /*
  6v6. Compter les lettres
Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).
Boucle do while inversé.
*/
}

function countLettersInAString6(sentence: unknown): number {
  checkIsString(sentence);

  const normalizeSentence: string = cleanString(sentence);

  let count: number = 0;

  let i = normalizeSentence.length - 1;

  do {
    count++;
    i--;
  } while (i >= 0);
  return count;
}

const sentenceToCount6: string = "Hello! Ça gaze 1314 ?";
const letterCount6: number = countLettersInAString6(sentenceToCount6);
console.log(letterCount6);

{
  /*
  6v7. Compter les lettres
Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).
Boucle for ... of .
*/
}

function countLettersInAString7(sentence: unknown): number {
  checkIsString(sentence);

  const cleanStringArray: string[] = cleanString(sentence).split("");

  let count: number = 0;

  for (let string of cleanStringArray) {
    count++;
  }
  return count;
}

const sentenceToCount7: string = "Yo! Quoi de beau 1516 ?";
const letterCount7: number = countLettersInAString7(sentenceToCount7);
console.log(letterCount7);

{
  /*
  6v8. Compter les lettres
Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).
Méthode reduce .
*/
}

function countLettersInAString8(sentence: unknown): number {
  checkIsString(sentence);

  const cleanStringArray: string[] = cleanString(sentence).split("");

  const count = cleanStringArray.reduce((total, character) => {
    return total + 1;
  }, 0);

  return count;
}

const sentenceToCount8: string = "Salut! La vie est belle 1718 ?";
const letterCount8: number = countLettersInAString8(sentenceToCount8);
console.log(letterCount8);

{
  /*
  6v8bis (avec commentaires). Compter les lettres
Écris une fonction qui retourne le nombre de lettres dans une chaîne (en ignorant les espaces, chiffres, ponctuations).
Méthode reduce .
*/
}

// function with comments for countLettersInAString8
function countLettersInAString8WithCmments(sentence: unknown): number {
  // Validate that the input is a string
  checkIsString(sentence);

  // Clean the string to remove unwanted characters and split it into an array of characters
  const cleanStringArray: string[] = cleanString(sentence).split("");

  // Use the reduce method to count the number of characters in the cleaned string array
  // The reduce function iterates over each character and increments the total count by 1
  const count = cleanStringArray.reduce((total, character) => {
    // Increment the total count for each character
    return total + 1;
    // Initial value of total is set to 0
  }, 0);

  // Return the final count of letters
  return count;
}

const sentenceToCount8Bis: string = "Salut! La vie est belle 1718 ?";
const letterCount8Bis: number =
  countLettersInAString8WithCmments(sentenceToCount8Bis);
console.log(letterCount8Bis);

{
  /*
  7. Mot le plus long
Écris une fonction qui retourne le mot le plus long dans une phrase.
Boucle for.
*/
}

function findTheLongestWord(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  let longestWord: string = "";

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
}

const inputSentence: string =
  "Le développement logiciel est une discipline passionnante";
const longestWord: string = findTheLongestWord(inputSentence);
console.log(longestWord);

{
  /*
  7v2. Mot le plus long
Écris une fonction qui retourne le mot le plus long dans une phrase.
Boucle for inversé.
*/
}

function findTheLongestWord2(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  let longestWord: string = "";

  for (let i = wordsArray.length - 1; i >= 0; i--) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
}

const inputSentence2: string =
  "La programmation est un art qui demande de la créativité";
const longestWord2: string = findTheLongestWord2(inputSentence2);
console.log(longestWord2);

{
  /*
  7v3. Mot le plus long
Écris une fonction qui retourne le mot le plus long dans une phrase.
Boucle while.
*/
}

function findTheLongestWord3(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  let longestWord: string = "";

  let i = 0;

  while (i < wordsArray.length) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
    i++;
  }
  return longestWord;
}

const inputSentence3: string =
  "Apprendre à coder ouvre de nombreuses opportunités professionnelles";
const longestWord3: string = findTheLongestWord3(inputSentence3);
console.log(longestWord3);

{
  /*
  7v4. Mot le plus long
Écris une fonction qui retourne le mot le plus long dans une phrase.
Boucle while inversé.
*/
}

function findTheLongestWord4(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  let longestWord: string = "";

  let i = wordsArray.length - 1;

  while (i >= 0) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
    i--;
  }
  return longestWord;
}

const inputSentence4: string =
  "Les algorithmes sont essentiels pour résoudre des problèmes complexes";
const longestWord4: string = findTheLongestWord4(inputSentence4);
console.log(longestWord4);

{
  /*
  7v5. Mot le plus long
Écris une fonction qui retourne le mot le plus long dans une phrase.
Boucle do while.
*/
}

function findTheLongestWord5(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  let longestWord: string = "";

  let i = 0;

  do {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
    i++;
  } while (i < wordsArray.length);
  return longestWord;
}

const inputSentence5: string = "Écartons ton carton car ton carton nous gêne.";
const longestWord5: string = findTheLongestWord5(inputSentence5);
console.log(longestWord5);

{
  /*
  7v6. Mot le plus long
Écris une fonction qui retourne le mot le plus long dans une phrase.
Boucle do while.
*/
}

function findTheLongestWord6(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  let longestWord: string = "";

  let i = wordsArray.length - 1;

  do {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
    i--;
  } while (i >= 0);
  return longestWord;
}

const inputSentence6: string =
  "Un chasseur sachant chasser doit savoir chasser sans son chien.";
const longestWord6: string = findTheLongestWord6(inputSentence6);
console.log(longestWord6);

{
  /*
  7v7. Mot le plus long
Écris une fonction qui retourne le mot le plus long dans une phrase.
Boucle for ... of.
*/
}

function findTheLongestWord7(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  let longestWord: string = "";

  for (let word of wordsArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const inputSentence7: string =
  "Si mon tonton tond ton tonton, ton tonton sera tondu.";
const longestWord7: string = findTheLongestWord7(inputSentence7);
console.log(longestWord7);

{
  /*
  7v8. Mot le plus long
Écris une fonction qui retourne le mot le plus long dans une phrase.
Méthode reduce.
*/
}

function findTheLongestWord8(sentence: unknown): string {
  checkIsString(sentence);

  const wordsArray: string[] = words(sentence);

  const longestWord = wordsArray.reduce((longest, word) => {
    if (word.length > longest.length) return word;
    else return longest;
  }, "");
  return longestWord;
}

const inputSentence8: string =
  "Je veux et j'exige du jasmin et des jasmins pour mon jardin.";
const longestWord8: string = findTheLongestWord8(inputSentence8);
console.log(longestWord8);

{
  /*
  8. Filtrer les impairs
Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.
Boucle for.
*/
}

function filterOddNumbers(nbrArray: unknown[]): number[] {
  checkIsArray(nbrArray);
  checkMinArrayLength2(nbrArray);
  checkIsIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 !== 0) {
      oddNbrArray.push(numbersArray[i]);
    }
  }
  return oddNbrArray;
}

const numbersArray = [7, 8, 16, 21, 31, 38, 43];
const oddNbrArray = filterOddNumbers(numbersArray);
console.log(oddNbrArray);

{
  /*
  8v2. Filtrer les impairs
Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.
Boucle for inversé.
*/
}

function filterOddNumbers2(nbrArray: unknown[]): number[] {
  checkIsArray(nbrArray);
  checkMinArrayLength2(nbrArray);
  checkIsIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  for (let i = numbersArray.length - 1; i >= 0; i--) {
    if (numbersArray[i] % 2 !== 0) {
      oddNbrArray.push(numbersArray[i]);
    }
  }
  return oddNbrArray.reverse();
}

const numbersArray2 = [10, 15, 22, 27, 34, 39, 44];
const oddNbrArray2 = filterOddNumbers2(numbersArray2);
console.log(oddNbrArray2);

{
  /*
  8v3. Filtrer les impairs
Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.
Boucle while.
*/
}

function filterOddNumbers3(nbrArray: unknown[]): number[] {
  checkIsArray(nbrArray);
  checkMinArrayLength2(nbrArray);
  checkIsIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  let i = 0;

  while (i < numbersArray.length) {
    if (numbersArray[i] % 2 !== 0) {
      oddNbrArray.push(numbersArray[i]);
    }
    i++;
  }
  return oddNbrArray;
}

const numbersArray3 = [5, 12, 19, 26, 33, 40, 47];
const oddNbrArray3 = filterOddNumbers3(numbersArray3);
console.log(oddNbrArray3);

{
  /*
  8v4. Filtrer les impairs
Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.
Boucle while inversé.
*/
}

function filterOddNumbers4(nbrArray: unknown[]): number[] {
  checkIsArray(nbrArray);
  checkMinArrayLength2(nbrArray);
  checkIsIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  let i = numbersArray.length - 1;

  while (i >= 0) {
    if (numbersArray[i] % 2 !== 0) {
      oddNbrArray.push(numbersArray[i]);
    }
    i--;
  }
  return oddNbrArray.reverse();
}

const numbersArray4 = [2, 9, 14, 23, 28, 37, 50];
const oddNbrArray4 = filterOddNumbers4(numbersArray4);
console.log(oddNbrArray4);

{
  /*
  8v5. Filtrer les impairs
Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.
Boucle do while.
*/
}

function filterOddNumbers5(nbrArray: unknown[]): number[] {
  checkIsArray(nbrArray);
  checkMinArrayLength2(nbrArray);
  checkIsIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  let i = 0;

  do {
    if (numbersArray[i] % 2 !== 0) {
      oddNbrArray.push(numbersArray[i]);
    }
    i++;
  } while (i < numbersArray.length);
  return oddNbrArray;
}

const numbersArray5 = [1, 6, 13, 18, 25, 32, 49];
const oddNbrArray5 = filterOddNumbers5(numbersArray5);
console.log(oddNbrArray5);

{
  /*
  8v6. Filtrer les impairs
Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.
Boucle do while inversé.
*/
}

function filterOddNumbers6(nbrArray: unknown): number[] {
  checkIsArray(nbrArray);
  checkMinArrayLength2(nbrArray);
  checkIsIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  let i = numbersArray.length - 1;

  do {
    if (numbersArray[i] % 2 !== 0) {
      oddNbrArray.push(numbersArray[i]);
    }
    i--;
  } while (i >= 0);
  return oddNbrArray.reverse();
}

const numbersArray6 = [4, 11, 20, 29, 36, 45, 52];
const oddNbrArray6 = filterOddNumbers6(numbersArray6);
console.log(oddNbrArray6);

{
  /*
  8v7. Filtrer les impairs
Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.
Boucle for ... of.
*/
}

function filterOddNumbers7(nbrArray: unknown[]): number[] {
  checkIsArray(nbrArray);
  checkMinArrayLength2(nbrArray);
  checkIsIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  let oddNbrArray: number[] = [];

  for (let number of numbersArray) {
    if (number % 2 !== 0) {
      oddNbrArray.push(number);
    }
  }
  return oddNbrArray;
}

const numbersArray7 = [3, 14, 17, 24, 35, 42, 55];
const oddNbrArray7 = filterOddNumbers7(numbersArray7);
console.log(oddNbrArray7);

{
  /*
  8v8. Filtrer les impairs
Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.
Méthode reduce.
*/
}

function filterOddNumbers8(nbrArray: unknown[]): number[] {
  checkIsArray(nbrArray);
  checkMinArrayLength2(nbrArray);
  checkIsIntegersArray(nbrArray);

  const numbersArray = nbrArray as number[];

  const oddNumbersArray: number[] = numbersArray.reduce(
    (odd: number[], number: number) => {
      if (number % 2 !== 0) {
        odd.push(number);
      }
      return odd;
    },
    []
  );
  return oddNumbersArray;
}

const numbersArray8 = [9, 18, 27, 34, 41, 58, 63];
const oddNbrArray8 = filterOddNumbers8(numbersArray8);
console.log(oddNbrArray8);

{
  /*
  8v8Bis (avec commentaires ). Filtrer les impairs
Écris une fonction qui retourne un nouveau tableau contenant uniquement les nombres impairs.
Méthode reduce.
*/
}

// function with comments for filterOddNumbers8
function filterOddNumbers8WithComments(nbrArray: unknown[]): number[] {
  // Validate that the input is an array
  checkIsArray(nbrArray);
  // Validate that the array has at least 2 elements
  checkMinArrayLength2(nbrArray);
  // Validate that all elements in the array are integers
  checkIsIntegersArray(nbrArray);

  // Cast the input array to an array of numbers
  const numbersArray = nbrArray as number[];

  // Use the reduce method to filter out odd numbers from the array
  const oddNumbersArray: number[] = numbersArray.reduce(
    (odd: number[], number: number) => {
      // Check if the current number is odd
      if (number % 2 !== 0) {
        // If it is odd, add it to the accumulator array
        odd.push(number);
      }
      // Return the accumulator for the next iteration
      return odd;
    },
    // Initialize the accumulator as an empty array
    []
  );
  // Return the array of odd numbers
  return oddNumbersArray;
}

const numbersArray8Bis = [14, 23, 30, 47, 52, 69, 78];
const oddNbrArray8Bis = filterOddNumbers8WithComments(numbersArray8Bis);
console.log(oddNbrArray8Bis);

{
  /*
  9. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Double boucle for.
 */
}

function getMostCommunValue(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  let maxCount: number = 0;
  let mostCommonValue: number = numbersArray[0];

  for (let i = 0; i < numbersArray.length; i++) {
    let count: number = 0;
    for (let j = 0; j < numbersArray.length; j++) {
      if (numbersArray[i] === numbersArray[j]) {
        count++;
      }
    }
    if (
      count > maxCount ||
      (count === maxCount && numbersArray[i] > mostCommonValue)
    ) {
      maxCount = count;
      mostCommonValue = numbersArray[i];
    }
  }
  return mostCommonValue;
}

const nbArray: number[] = [1, 3, 2, 3, 4, 2, 3, 5, 1, 2, 2, 3];
const mostCommonValue: number = getMostCommunValue(nbArray);
console.log(mostCommonValue);
{
  /*
  9Bis (with comments). Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Double boucle for.
 */
}

// function with comments for mostCommunValue
function getMostCommunValueWithComments(nbArray: unknown[]): number {
  // Validate that the input is an array
  checkIsArray(nbArray);
  // Validate that the array has at least 2 elements
  checkMinArrayLength2(nbArray);
  // Validate that all elements in the array are numbers
  checkIsNumbersArray(nbArray);

  // Cast the input array to an array of numbers
  const numbersArray = nbArray as number[];

  // Initialize variables to track the maximum count and the most frequent value
  let maxCount: number = 0;
  let mostCommonValue: number = numbersArray[0];

  // Outer loop to iterate through each number in the array
  for (let i = 0; i < numbersArray.length; i++) {
    // Initialize a count for the current number
    let count: number = 0;
    // Inner loop to count occurrences of the current number
    for (let j = 0; j < numbersArray.length; j++) {
      // If the numbers match, increment the count
      if (numbersArray[i] === numbersArray[j]) {
        count++;
      }
    }
    // Check if the current count is greater than the maximum count found so far
    // or if it's equal but the current number is greater than the most frequent value
    if (
      count > maxCount ||
      (count === maxCount && numbersArray[i] > mostCommonValue)
    ) {
      // Update the maximum count and the most frequent value
      maxCount = count;
      mostCommonValue = numbersArray[i];
    }
  }
  // Return the most frequent value found in the array
  return mostCommonValue;
}

const nbArrayBis: number[] = [1, 3, 2, 3, 4, 2, 3, 5, 1, 2, 2, 3];
const mostCommonValueBis: number = getMostCommunValueWithComments(nbArrayBis);
console.log(mostCommonValueBis);

{
  /*
  9v2. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Double boucle for inversé.
 */
}

function getMostCommunValue2(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  let maxCount: number = 0;
  let mostCommunValue: number = numbersArray[0];

  for (let i = numbersArray.length - 1; i >= 0; i--) {
    let count: number = 0;
    for (let j = numbersArray.length - 1; j >= 0; j--) {
      if (numbersArray[i] === numbersArray[j]) {
        count++;
      }
    }
    if (
      count > maxCount ||
      (count === maxCount && numbersArray[i] > mostCommunValue)
    ) {
      maxCount = count;
      mostCommunValue = numbersArray[i];
    }
  }
  return mostCommunValue;
}

const nbArray2: number[] = [4, 5, 4, 6, 7, 5, 4, 8, 9, 5, 4, 5];
const mostCommunValue2: number = getMostCommunValue2(nbArray2);
console.log(mostCommunValue2);

{
  /*
  9v3. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Double boucle while.
 */
}

function getMostCommunValue3(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  let i = 0;

  while (i < numbersArray.length) {
    let count: number = 0;
    let j = 0;
    while (j < numbersArray.length) {
      if (numbersArray[i] === numbersArray[j]) {
        count++;
      }
      j++;
    }
    if (
      count > maxCount ||
      (count === maxCount && numbersArray[i] > mostCommonValue)
    ) {
      maxCount = count;
      mostCommonValue = numbersArray[i];
    }
    i++;
  }
  return mostCommonValue;
}

const nbArray3: number[] = [6, 7, 8, 6, 9, 7, 6, 10, 11, 7, 6];
const mostCommonValue3: number = getMostCommunValue3(nbArray3);
console.log(mostCommonValue3);

{
  /*
  9v4. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Double boucle reverse while.
 */
}

function getMostCommunValue4(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  let i = numbersArray.length - 1;

  while (i >= 0) {
    let count: number = 0;
    let j = numbersArray.length - 1;
    while (j >= 0) {
      if (numbersArray[i] === numbersArray[j]) {
        count++;
      }
      j--;
    }
    if (
      count > maxCount ||
      (count === maxCount && numbersArray[i] > mostCommonValue)
    ) {
      maxCount = count;
      mostCommonValue = numbersArray[i];
    }
    i--;
  }
  return mostCommonValue;
}

const nbArray4: number[] = [8, 9, 8, 10, 11, 9, 8, 12, 13, 9, 8, 9];
const mostCommonValue4: number = getMostCommunValue4(nbArray4);
console.log(mostCommonValue4);

{
  /*
  9v5. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Double boucle do while.
 */
}

function getMostCommunValue5(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  let i = 0;

  do {
    let count: number = 0;
    let j = 0;
    do {
      if (numbersArray[i] === numbersArray[j]) {
        count++;
      }
      j++;
    } while (j < numbersArray.length);
    if (
      count > maxCount ||
      (count === maxCount && numbersArray[i] > mostCommonValue)
    ) {
      maxCount = count;
      mostCommonValue = numbersArray[i];
    }
    i++;
  } while (i < numbersArray.length);
  return mostCommonValue;
}

const nbArray5: number[] = [
  2.25, 3.5, 4.75, 2.25, 4.75, 5.0, 3.5, 2.25, 6.0, 4.75,
];
const mostCommonValue5: number = getMostCommunValue5(nbArray5);
console.log(mostCommonValue5);

{
  /*
  9v6. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Double boucle reverse do while.
 */
}

function getMostCommunValue6(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  let i = numbersArray.length - 1;

  do {
    let count: number = 0;
    let j = numbersArray.length - 1;
    do {
      if (numbersArray[i] === numbersArray[j]) {
        count++;
      }
      j--;
    } while (j >= 0);
    if (
      count > maxCount ||
      (count === maxCount && numbersArray[i] > mostCommonValue)
    ) {
      maxCount = count;
      mostCommonValue = numbersArray[i];
    }
    i--;
  } while (i >= 0);
  return mostCommonValue;
}

const nbArray6: number[] = [5.5, 6.5, 5.5, 7.5, 8.5, 6.5, 5.5, 9.5];
const mostCommonValue6: number = getMostCommunValue6(nbArray6);
console.log(mostCommonValue6);

{
  /*
  9v7. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Double boucle for ... of.
 */
}

function getMostCommunValue7(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  for (let number of numbersArray) {
    let count: number = 0;
    for (let otherNumber of numbersArray) {
      if (number === otherNumber) {
        count++;
      }
    }
    if (count > maxCount || (count === maxCount && number > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = number;
    }
  }
  return mostCommonValue;
}

const nbArray7: number[] = [10, 11, 10, 12, 13, 11, 10, 14, 15, 11];
const mostCommonValue7: number = getMostCommunValue7(nbArray7);
console.log(mostCommonValue7);

{
  /*
  9v8. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Methode structure de données avec un map
Boucle for.
 */
}

function getMostCommunValue8(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  const lengthOfArray: number = numbersArray.length;

  let freq: Map<number, number> = new Map();

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  for (let i = 0; i < lengthOfArray; i++) {
    const value = numbersArray[i];
    let count = (freq.get(value) || 0) + 1;
    freq.set(value, count);
    if (count > maxCount || (count === maxCount && value > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = value;
    }
  }
  return mostCommonValue;
}

const nbArray8: number[] = [20, 21, 20, 22, 23, 21, 20, 24, 25, 21];
const mostCommonValue8: number = getMostCommunValue8(nbArray8);
console.log(mostCommonValue8);

{
  /*
  9v8 - Bis (with comments). Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Methode structure de données avec un map
Boucle for.
 */
}

// function with comments for getMostCommunValue8
function getMostCommunValue8Bis(nbArray: unknown[]): number {
  // Validate that the input is an array
  checkIsArray(nbArray);
  // Validate that the array has at least 2 elements
  checkMinArrayLength2(nbArray);
  // Validate that all elements in the array are numbers
  checkIsNumbersArray(nbArray);

  // Cast the input array to an array of numbers
  const numbersArray = nbArray as number[];

  const lengthOfArray: number = numbersArray.length;

  // Create a Map to store the frequency of each number
  let freq: Map<number, number> = new Map();

  // Initialize variable to track the maximum count
  let maxCount: number = 0;

  // Initialize variable to track the most common value
  let mostCommonValue: number = numbersArray[0];

  // Loop through each number in the array
  for (let i = 0; i < lengthOfArray; i++) {
    // Retrieve the current count for this number, or 0 if the number has not been seen yet
    // Add 1 to this count to account for the current occurrence
    const value = numbersArray[i];
    let count = (freq.get(value) || 0) + 1;
    // Update the frequency Map with the new count
    freq.set(value, count);
    if (
      // Check if the current count is greater than the maximum count found so far
      count > maxCount ||
      // Or if the current count is equal to the maximum count but the current number is greater than the most common value
      (count === maxCount && value > mostCommonValue)
    ) {
      // Update the maximum count and the most common value
      maxCount = count;
      // Update the most common value to the current number
      mostCommonValue = value;
    }
  }
  return mostCommonValue;
}

const nbArray8Bis: number[] = [
  19, 20, 21, 19, 20, 22, 19, 23, 21, 19, 20, 19, 24, 19, 19, 25, 21,
];
const mostCommonValue8Bis: number = getMostCommunValue8Bis(nbArray8Bis);
console.log(mostCommonValue8Bis);

{
  /*
  9v9. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Methode structure de données avec un map
Boucle for inversé.
 */
}

function getMostCommunValue9(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  const lengthOfArray: number = nbArray.length;

  let freq: Map<number, number> = new Map();

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  for (let i = lengthOfArray - 1; i >= 0; i--) {
    const value: number = numbersArray[i];
    let count: number = (freq.get(value) || 0) + 1;
    freq.set(value, count);
    if (count > maxCount || (count === maxCount && value > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = value;
    }
  }
  return mostCommonValue;
}

const nbArray9: number[] = [30, 31, 30, 32, 33, 31, 30, 34, 35, 31, 30, 30];
const mostCommonValue9: number = getMostCommunValue9(nbArray9);
console.log(mostCommonValue9);

{
  /*
  9v10. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Methode structure de données avec un map
Boucle while.
 */
}

function getMostCommunValue10(nbArray: unknown): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  const lengthOfArray: number = numbersArray.length;

  let freq: Map<number, number> = new Map();

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  let i = 0;

  while (i < lengthOfArray) {
    const value: number = numbersArray[i];
    let count: number = (freq.get(value) || 0) + 1;
    freq.set(value, count);
    if (count > maxCount || (count === maxCount && value > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = value;
    }
    i++;
  }
  return mostCommonValue;
}

const nbArray10: number[] = [40, 41, 40, 42, 43, 41, 40, 44, 45, 41];
const mostCommonValue10: number = getMostCommunValue10(nbArray10);
console.log(mostCommonValue10);

{
  /*
  9v11. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Methode structure de données avec un map
Boucle while inversé.
 */
}

function getMostCommunValue11(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  const lengthOfArray: number = numbersArray.length;

  let freq: Map<number, number> = new Map();

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  let i = lengthOfArray - 1;

  while (i >= 0) {
    const value: number = numbersArray[i];
    let count = (freq.get(value) || 0) + 1;
    freq.set(value, count);
    if (count > maxCount || (count === maxCount && value > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = value;
    }
    i--;
  }
  return mostCommonValue;
}

const nbArray11: number[] = [50.8, 51.9, 50.8, 52.1, 53.2, 51.9, 50.8, 54.3];
const mostCommonValue11: number = getMostCommunValue11(nbArray11);
console.log(mostCommonValue11);

{
  /*
  9v12. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Methode structure de données avec un map
Boucle do while.
 */
}

function getMostCommunValue12(nbArray: unknown): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  const lengthOfArray: number = numbersArray.length;

  let freq: Map<number, number> = new Map();

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  let i = 0;

  do {
    const value: number = numbersArray[i];
    let count = (freq.get(value) || 0) + 1;
    freq.set(value, count);
    if (count > maxCount || (count === maxCount && value > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = value;
    }
    i++;
  } while (i < lengthOfArray);
  return mostCommonValue;
}

const nbArray12: number[] = [
  59, 25, 60.5, 59.25, 61.75, 62.0, 60.5, 59.25, 63.5,
];
const mostCommonValue12: number = getMostCommunValue12(nbArray12);
console.log(mostCommonValue12);

{
  /*
  9v13. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Methode structure de données avec un map
Boucle do while inversé.
 */
}

function getMostCommunValue13(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  const lengthOfArray = numbersArray.length;

  let freq: Map<number, number> = new Map();

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  let i = lengthOfArray - 1;

  do {
    const value: number = numbersArray[i];
    let count = (freq.get(value) || 0) + 1;
    freq.set(value, count);
    if (count > maxCount || (count === maxCount && value > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = value;
    }
    i--;
  } while (i >= 0);
  return mostCommonValue;
}

const nbArray13: number[] = [70, 71, 70, 72, 73, 71, 70, 74, 75, 71];
const mostCommonValue13: number = getMostCommunValue13(nbArray13);
console.log(mostCommonValue13);

{
  /*
  9v14. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Méthode structure de données avec un map
Méthode reduce.
 */
}

function getMostCommunValue14(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  let freq: Map<number, number> = new Map();

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  numbersArray.reduce((_, value: number) => {
    let count = (freq.get(value) || 0) + 1;
    freq.set(value, count);
    if (count > maxCount || (count === maxCount && value > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = value;
    }
    return _;
  }, null);
  return mostCommonValue;
}

const nbArray14: number[] = [-5, -4, -5, -3, -2, -4, -5, -1, 0, -4];
const mostCommonValue14: number = getMostCommunValue14(nbArray14);
console.log(mostCommonValue14);

{
  /*
  9v15. Valeur la plus fréquente
Écris une fonction qui retourne la valeur la plus présente dans un tableau de nombres.
Exemple : [1, 2, 2, 3, 1, 2] → 2
Méthode structure de données avec un map
Boucle for ... of.
 */
}

function getMostCommonValue15(nbArray: unknown[]): number {
  checkIsArray(nbArray);
  checkMinArrayLength2(nbArray);
  checkIsNumbersArray(nbArray);

  const numbersArray = nbArray as number[];

  let freq: Map<number, number> = new Map();

  let maxCount: number = 0;

  let mostCommonValue: number = numbersArray[0];

  for (let value of numbersArray) {
    let count = (freq.get(value) || 0) + 1;
    freq.set(value, count);
    if (count > maxCount || (count === maxCount && value > mostCommonValue)) {
      maxCount = count;
      mostCommonValue = value;
    }
  }
  return mostCommonValue;
}

const nbArray15: number[] = [
  -10.99, -9.88, -10.99, -8.77, -7.66, -9.88, -10.99,
];
const mostCommonValue15: number = getMostCommonValue15(nbArray15);
console.log(mostCommonValue15);

{
  /*
  10. Fusion de tableaux
Écris une fonction qui fusionne deux tableaux sans doublons.

Exemple : [1, 2, 3] et [3, 4, 5] → [1, 2, 3, 4, 5]
 */
}

function arraysFusion(nbArray1: unknown[], nbArray2: unknown[]): number[] {
  checkIsArray(nbArray1);
  checkIsArray(nbArray2);
  checkMinArrayLength1(nbArray1);
  checkMinArrayLength1(nbArray2);
}
