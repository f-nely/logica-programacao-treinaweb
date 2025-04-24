let numerosArray2: number[] = [20, 10, 130, 50, 40];

function exibirMaior(arr: number[]): number {
  let maior: number = arr[0];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  return maior;
}

console.log(exibirMaior(numerosArray2));
