import {
  checkIsInteger,
  checkIsPositiveNumberMinOne,
} from "../../utils/checkFunctions";

export function checkPrimeNumber(nbr: unknown): string {
  checkIsInteger(nbr);
  checkIsPositiveNumberMinOne(nbr);

  if (nbr === 1) {
    return `Il ne s'agit pas d'un nombre premier`;
  }

  for (let i = 2; i < nbr; i++) {
    if (nbr % i === 0) {
      return `Il ne s'agit pas d'un nombre premier`;
    }
  }
  return `Il s'agit d'un nombre premier`;
}

export function checkPrimeNumber2(nbr2: unknown): string {
  checkIsInteger(nbr2);
  checkIsPositiveNumberMinOne(nbr2);

  if (nbr2 === 1) {
    return `Il ne s'agit pas d'un nombre premier`;
  }

  for (let i = nbr2 - 1; i >= 2; i--) {
    if (nbr2 % i === 0) {
      return `Il ne s'agit pas d'un nombre premier`;
    }
  }
  return `Il s'agit d'un nombre premier`;
}

export function checkPrimeNumber3(nbr3: unknown): string {
  checkIsInteger(nbr3);
  checkIsPositiveNumberMinOne(nbr3);

  if (nbr3 === 1) {
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

export function checkPrimeNumber4(nbr4: unknown): string {
  checkIsInteger(nbr4);
  checkIsPositiveNumberMinOne(nbr4);

  if (nbr4 === 1) {
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

export function checkPrimeNumber5(nbr5: unknown): string {
  checkIsInteger(nbr5);
  checkIsPositiveNumberMinOne(nbr5);

  if (nbr5 <= 3) {
    return nbr5 === 1
      ? `Il ne s'agit pas d'un nombre premier`
      : `Il s'agit d'un nombre premier`;
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

export function checkPrimeNumber6(nbr6: unknown): string {
  checkIsInteger(nbr6);
  checkIsPositiveNumberMinOne(nbr6);

  if (nbr6 <= 3) {
    return nbr6 === 1
      ? `Il ne s'agit pas d'un nombre premier`
      : `Il s'agit d'un nombre premier`;
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
