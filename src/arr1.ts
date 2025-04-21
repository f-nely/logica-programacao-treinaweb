/* let primeiroArray: number[] = [2, 10, 8];
let segundoArray: number[] = [3, 15, 5]; */
let primeiroArray: number[] = [2, 10, 5];
let segundoArray: number[] = [3, 15, 5];

let temNumerosRepetidos: boolean = false;
for (let i: number = 0; i < primeiroArray.length; i++) {
  for (let j: number = 0; j < segundoArray.length; j++) {
    if (primeiroArray[i] == segundoArray[j]) {
      temNumerosRepetidos = true;
    } else {
      temNumerosRepetidos = false;
    }
  }
}

if (temNumerosRepetidos) {
  console.log("Existem números repetidos.");
} else {
  console.log(primeiroArray);
  console.log(segundoArray);
}
