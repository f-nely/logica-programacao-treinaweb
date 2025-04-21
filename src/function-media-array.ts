let array1: number[] = [5, 6, 8, 10, 1];
let somatorio: number = 0;

function mediaArray(numeros: number[]) {
  for (let i: number = 0; i < numeros.length; i++) {
    somatorio += numeros[i];
  }
  console.log(somatorio / numeros.length);
}

mediaArray(array1);
