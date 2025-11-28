// function displayMultiplicationTables2(number2: number): string {
//   checkIsInteger(number2);

//   let displayTimesTables2: string[] = [];

//   for (let i = number2; i >= 1; i--) {
//     let tablelines: string[] = [];

//     tablelines.push(`Table de ${i}\n`);
//     tablelines.push(`-----------------\n`);
//     for (let j = 10; j >= 1; j--) {
//       tablelines.push(`${i} x ${j} = ${i * j}\n`);
//     }

//     tablelines = [
//       tablelines[0],
//       tablelines[1],
//       ...tablelines.slice(2).reverse(),
//     ];

//     displayTimesTables2.push(tablelines.join(""));
//   }
//   return displayTimesTables2.reverse().join("\n");
// }

// const numberOfTables2: number = 3;
// const multiplicationTables2: string =
//   displayMultiplicationTables2(numberOfTables2);
// console.log(multiplicationTables2);
