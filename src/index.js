"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    /*
  
    1. Pair ou impair
  Écris un programme qui prend un nombre entier et affiche s’il est pair ou impair.
    */
}
function evenOrOdd(nbr) {
    if (!Number.isInteger(nbr)) {
        throw new Error(`La saisie doit être un nombre entier`);
    }
    if (nbr % 2 !== 0) {
        return false;
    }
    return true;
}
let nbr = 16;
let isEven = evenOrOdd(nbr);
console.log(isEven);
//# sourceMappingURL=index.js.map