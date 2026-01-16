import { checkIsInteger, checkIsPositiveNumberMinOne } from "../../utils/checkFunctions";

export function multiplicationTable(nb: unknown): string {
  checkIsInteger(nb);
  checkIsPositiveNumberMinOne(nb);

  let result: string = "";

  for (let i = 1; i <= 10; i++) {
    result += `${nb} x ${i} = ${nb * i}\n`;
  }
  return result;
}

export function multiplicationTable7(nb7: unknown): string {
  checkIsInteger(nb7);
  checkIsPositiveNumberMinOne(nb7);

  let result7: string = "";
  let valueArray: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  for (let i of valueArray) {
    result7 += `${nb7} x ${i} = ${nb7 * i}\n`;
  }
  return result7;
}
