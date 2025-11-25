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
