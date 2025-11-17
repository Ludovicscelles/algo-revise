import { error } from "console";

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
