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
