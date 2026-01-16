import { checkIsInteger } from "../../utils/checkFunctions"; 


{
  /*

  1v1. Pair ou impair
Écris un programme qui prend un nombre entier et affiche s’il est pair ou impair.
  */
}

export function evenOrOdd(nbr: unknown): boolean {
  checkIsInteger(nbr);
  if (nbr % 2 !== 0) {
    return false;
  }
  return true;
}

{
  /*

  1v2. Pair ou impair
Écris un programme qui prend un nombre entier et affiche s’il est pair ou impair.
  */
}

export function evenOrOdd2(nbr2: unknown): string {
  checkIsInteger(nbr2);
  if (nbr2 % 2 !== 0) {
    return `Ce nombre est impair.`;
  }
  return `Ce nombre est pair.`;
}