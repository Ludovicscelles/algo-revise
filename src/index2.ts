import { func } from "joi";
import { checkIsInteger, checkIsString } from "./CheckFunctions";

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

function displayMultiplicationTables(number: number): string {
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

function displayMultiplicationTables2(number2: number): string {
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
