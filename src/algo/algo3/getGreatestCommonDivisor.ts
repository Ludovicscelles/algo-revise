import { checkIsInteger } from "../../utils/checkFunctions";

export function getGreatestCommonDivisor(int1: unknown, int2: unknown): number {
  if (int1 === undefined || int2 === undefined) {
    throw new Error(`La saisie doit contenir exactement deux arguments`);
  }

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0) {
    throw new Error(
      `Il est impossible de déterminer le plus grand diviseur commun de deux nombres nuls`
    );
  }

  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  const minArgument: number = Math.min(a, b);

  let gcd: number = 1;

  for (let i = 1; i <= minArgument; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

export function getGreatestCommonDivisor3(
  int1: unknown,
  int2: unknown
): number {
  if (int1 === undefined || int2 === undefined) {
    throw new Error("La saisie doit contenir exactement deux arguments");
  }

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il est impossible de déterminer le plus grand diviseur commun de deux nombres nuls`
    );

  if (a === 0) return b;

  if (b === 0) return a;

  const minArgument: number = Math.min(a, b);

  let gcd: number = 1;

  let i = 1;

  while (i <= minArgument) {
    if (a % i === 0 && b % i === 0) gcd = i;
    i++;
  }
  return gcd;
}

export function getGreatestCommonDivisor7(
  int1: unknown,
  int2: unknown
): number {
  if (int1 === undefined || int2 === undefined) {
    throw new Error(`La saisie doit contenir exactement deux arguments`);
  }

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il est impossible de déterminer le plus grand diviseur commun de deux nombres nuls`
    );

  if (a === 0) return b;
  if (b === 0) return a;

  const remainder: number = a % b;

  if (remainder === 0) {
    return b;
  } else {
    return getGreatestCommonDivisor7(b, remainder);
  }
}

export function getGreatestCommonDivisor8(
  int1: unknown,
  int2: unknown
): number {
  if (int1 === undefined || int2 === undefined) {
    throw new Error(`La saisie doit contenir exactement deux arguments`);
  }

  checkIsInteger(int1);
  checkIsInteger(int2);

  let a: number = Math.abs(int1);
  let b: number = Math.abs(int2);

  if (a === 0 && b === 0)
    throw new Error(
      `Il est impossible de déterminer le plus grand diviseur commun de deux nombres nuls`
    );

  if (a === 0) return b;
  if (b === 0) return a;

  while (b !== 0) {
    const remainder: number = a % b;
    a = b;
    b = remainder;
  }
  return a;
}
