import { checkIsInteger } from "../../utils/checkFunctions";

export function displayMultiplicationTables(number: unknown): string {
  checkIsInteger(number);

  let displayTimesTables: string = "";

  for (let i = 1; i <= number; i++) {
    if (i > 1) displayTimesTables += `\n`;

    displayTimesTables += `Table de ${i}\n`;
    displayTimesTables += `-----------------\n`;
    for (let j = 1; j <= 10; j++) {
      displayTimesTables += `${i} x ${j} = ${i * j}\n`;
    }
  }
  return displayTimesTables;
}

export function displayMultiplicationTables5(number5: unknown): string {
  checkIsInteger(number5);

  let displayTimesTables5: string = "";

  let i = 1;

  do {
    if (i > 1) {
      displayTimesTables5 += `\n`;
    }
    displayTimesTables5 += `Table de ${i}\n`;
    displayTimesTables5 += `-----------------\n`;

    let j = 1;

    do {
      displayTimesTables5 += `${i} x ${j} = ${i * j}\n`;
      j++;
    } while (j <= 10);

    i++;
  } while (i <= number5);
  return displayTimesTables5;
}

export class Tables {
  constructor(private n: number) {
    checkIsInteger(n);
  }
  private generateSingleTable(value: number): string {
    const lines = Array.from(
      { length: 10 },
      (_, i) => `${value} x ${i + 1} = ${value * (i + 1)}`
    ).join(`\n`);
    return `Table de ${value}\n-----------------\n${lines}`;
  }

  generate(): string {
    return (
      Array.from({ length: this.n }, (_, i) =>
        this.generateSingleTable(i + 1)
      ).join(`\n\n`) + `\n`
    );
  }
}
