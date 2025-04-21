let numerosArray1: number[] = [1, 2, 3, 4, 5];
let numero2: number = 5;

let verifica: boolean = false;
function verificarParametros(numbers: number[], n1: number) {
  for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] == n1) {
      verifica = true;
    } else {
      verifica = false;
    }
  }

  if (verifica) {
    console.log("Número existe no array");
  } else {
    console.log("Número não existente no array");
  }
}

verificarParametros(numerosArray1, numero2);
