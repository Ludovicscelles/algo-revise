import { array } from "joi";

export const checkIsInteger: (nb: unknown) => asserts nb is number = (nb) => {
  if (!Number.isInteger(nb)) {
    throw new Error(`La saisie doit être un nombre entier`);
  }
};

// type guard to check if input is an integer
// throws an error if not
// asserts nb is number tells TypeScript that after calling this function, nb can be treated as a number
const checkIsIntegerWithComments: (nb: unknown) => asserts nb is number = (
  nb
) => {
  // check if the input is a number and an integer
  if (!Number.isInteger(nb)) {
    // throw an error if not
    // message in French: "Input must be an integer."
    throw new Error(`La saisie doit être un nombre entier.`);
  }
};

export const checkIsPositiveNumber: (nb: number) => asserts nb is number = (
  nb
) => {
  if (nb < 0) {
    throw new Error(`Le nombre saisi doit être positif.`);
  }
};

// type guard to check if input is a positive number
// throws an error if not
// asserts nb is number tells TypeScript that after calling this function, nb can be treated as a number
const checkIsPositiveNumberWithComments: (
  nb: number
) => asserts nb is number = (nb) => {
  // check if the input is a positive number
  if (nb < 0) {
    // throw an error if not
    // message in French: "Number must be positive."
    throw new Error(`Le nombre saisi doit être positif.`);
  }
};

export const checkIsString: (str: unknown) => asserts str is string = (str) => {
  if (typeof str !== "string") {
    throw new Error(`La saisie d'entrée doit être une chaîne de caractères`);
  }
};

// type guard to check if input is a string
// throws an error if not
// asserts str is string tells TypeScript that after calling this function, str can be treated as a string
const checkIsStringWithComments: (str: unknown) => asserts str is string = (
  str
) => {
  // check if the input is a string
  if (typeof str !== "string") {
    // throw an error if not
    // message in French: "Input must be a string."
    throw new Error(`La saisie d'entrée doit être une chaîne de caractères. `);
  }
};

export const checkIsArray: (
  array: unknown
) => asserts array is Array<unknown> = (array) => {
  if (!Array.isArray(array)) {
    throw new Error(`La saisie d'entrée doit être un tableau.`);
  }
};

// type guard to check if input is an array
// throws an error if not
// asserts array is Array<unknown> tells TypeScript that after calling this function, array can be treated as an array
const checkIsArrayWithComments: (
  array: unknown
) => asserts array is Array<unknown> = (
  //  check if the input is an array
  array
) => {
  // throw an error if not
  if (!Array.isArray(array)) {
    // message in French: "Input must be an array."
    throw new Error(`La saisie d'entrée doit être un tableau.`);
  }
};

export const checkMinArrayLength2: (
  array: unknown[]
) => asserts array is unknown[] = (array) => {
  if (array.length < 2) {
    throw new Error(`La tableau doit contenir au minimum deux éléments`);
  }
};

// check fonction to ensure array has at least 2 elements
// throws an error if not
const checkMinArrayLength2WithComments: (
  array: unknown[]
) => asserts array is unknown[] = (array) => {
  // check if the array has at least 2 elements
  if (array.length < 2) {
    // throw an error if not
    throw new Error(`Le tableau doit contenir au minimum deux éléments.`);
  }
};

export const checkMinArrayLength1: (
  array: unknown[]
) => asserts array is unknown[] = (array) => {
  if (array.length < 1) {
    throw new Error(`Le tableau doit contenir au mininum un élément`);
  }
};

export const checkIsIntegersArray = (array: unknown[]) => {
  if (!array.every((element) => Number.isInteger(element))) {
    throw new Error(`Chaque élément du tableau doit être un nombre entier.`);
  }
};

// check fonction to ensure all elements in the array are integers
// throws an error if not
const checkIsIntegersArrayWithComments = (array: unknown[]) => {
  // check if all elements in the array are integers
  if (!array.every((element) => Number.isInteger(element))) {
    // throw an error if not
    // message in French: "Each element of the array must be an integer."
    throw new Error(`Chaque élément du tableau doit être un nombre entier.`);
  }
};

export const checkIsNumbersArray = (array: unknown[]) => {
  if (!array.every((element) => typeof element === "number")) {
    throw new Error(`Chaque élément du tableau doit être un nombre`);
  }
};
