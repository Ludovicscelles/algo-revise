import {
  checkIsInteger,
  checkIsString,
  checkIsPositiveNumber,
} from "./CheckFunctions";

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