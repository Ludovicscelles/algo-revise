import {
  checkIsInteger,
  checkIsPositiveNumberMinOne,
} from "../../utils/checkFunctions";

export function multiplicationTablesUpTo(num: unknown): string[][] {
  checkIsInteger(num);

  checkIsPositiveNumberMinOne(num);

  let table: string[][] = [];

  for (let i = 1; i <= num; i++) {
    const row: string[] = [];
    for (let j = 1; j <= 10; j++) {
      row.push(`${i} x ${j} = ${i * j}`);
    }
    table.push(row);
  }
  return table;
}

export function multiplicationTablesUpToV3(num: unknown): string[][] {
  checkIsInteger(num);

  checkIsPositiveNumberMinOne(num);

  const table: string[][] = [];

  let i = 1;
  while (i <= num) {
    const row: string[] = [];
    let j = 1;
    while (j <= 10) {
      row.push(`${i} x ${j} = ${i * j}`);
      j++;
    }
    table.push(row);
    i++;
  }
  return table;
}

export class MultiplicationTableUpTo {
  constructor(private n: number) {
    checkIsInteger(n);
    checkIsPositiveNumberMinOne(n);
  }

  public generate(): string[][] {
    const table: string[][] = [];

    for (let i = 1; i <= this.n; i++) {
      const row: string[] = [];
      for (let j = 1; j <= 10; j++) {
        row.push(`${i} x ${j} = ${i * j}`);
      }
      table.push(row);
    }
    return table;
  }
}

export class MultiplicationTableUpToV2 {
  constructor(private n: number) {
    checkIsInteger(n);
    checkIsPositiveNumberMinOne(n);
  }

  public generate(): string[][] {
    const table: string[][] = [];

    let i = 1;
    while (i <= this.n) {
      const row: string[] = [];
      let j = 1;
      while (j <= 10) {
        row.push(`${i} x ${j} = ${i * j}`);
        j++;
      }
      table.push(row);
      i++;
    }
    return table;
  }
}

export class MultiplicationTableUpToV3 {
  constructor(private n: number) {
    checkIsInteger(n);
    checkIsPositiveNumberMinOne(n);
  }

  public generate(): string[][] {
    const table: string[][] = [];

    let i = 1;
    do {
      const row: string[] = [];
      let j = 1;
      do {
        row.push(`${i} x ${j} = ${i * j}`);
        j++;
      } while (j <= 10);
      table.push(row);
      i++;
    } while (i <= this.n);
    return table;
  }
}
