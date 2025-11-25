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
