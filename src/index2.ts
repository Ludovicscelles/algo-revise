import { func } from "joi";
import { checkIsInteger } from "./CheckFunctions";

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
