/* let primeiroArray: number[] = [2, 10, 8];
let segundoArray: number[] = [3, 15, 5]; */
let primeiroArray: number[] = [2, 10, 5];
let segundoArray: number[] = [3, 15, 5];

let temNumerosRepetidos: boolean = false;
//there are repeated numbers in the array
function thereAreRepeatedNumbers(arr1: number[], arr2: number[]): boolean {
  for (let i: number = 0; i < arr1.length; i++) {
    for (let j: number = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        temNumerosRepetidos = true;
        break;
      }
    }
  }
  return temNumerosRepetidos;
}

if (thereAreRepeatedNumbers(primeiroArray, segundoArray)) {
  console.log("Existem números repetidos.");
} else {
  console.log(primeiroArray);
  console.log(segundoArray);
}
