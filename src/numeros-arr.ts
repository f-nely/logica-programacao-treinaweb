//let numerosArray: number[] = [5, 80, 4];
let numerosArray: number[] = [5, 80, -4];
let temNegativo: boolean = false;

function findNegativeNumbers(arr: number[]): boolean {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      temNegativo = true;
      break;
    }
  }
  return temNegativo;
}

if (findNegativeNumbers(numerosArray)) {
  console.log("Esse array possui números negativos");
} else {
  console.log(numerosArray);
}
