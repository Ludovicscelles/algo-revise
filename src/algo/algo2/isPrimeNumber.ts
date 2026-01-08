import {
  checkIsInteger,
  checkIsPositiveNumberMinOne,
} from "../../utils/CheckFunctions";

export function isPrimeNumber(nbr7: unknown): boolean {
  checkIsInteger(nbr7);
  checkIsPositiveNumberMinOne(nbr7);

  if (nbr7 === 1) {
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

export function isPrimeNumber2(nbr8: unknown): boolean {
  checkIsInteger(nbr8);
  checkIsPositiveNumberMinOne(nbr8);

  if (nbr8 === 1) {
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

export function isPrimeNumber3(nbr9: unknown): boolean {
  checkIsInteger(nbr9);
  checkIsPositiveNumberMinOne(nbr9);

  if (nbr9 === 1) {
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

export function isPrimeNumber4(nbr10: unknown): boolean {
  checkIsInteger(nbr10);
  checkIsPositiveNumberMinOne(nbr10);

  if (nbr10 === 1) {
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

export function isPrimeNumber5(nbr11: unknown): boolean {
  checkIsInteger(nbr11);
  checkIsPositiveNumberMinOne(nbr11);

  if (nbr11 <= 3) {
    return nbr11 === 1 ? false : true;
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

export function isPrimeNumber6(nbr12: unknown): boolean {
  checkIsInteger(nbr12);
  checkIsPositiveNumberMinOne(nbr12);

  if (nbr12 <= 3) {
    return nbr12 === 1 ? false : true;
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
