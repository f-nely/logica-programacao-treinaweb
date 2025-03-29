/* let i: number = 1;
while (i <= 50) {
  console.log(i);
  i++;
} */

// Exibindo os dez primeiros números ímpares positivos
let qtdImpares: number = 0;
let j: number = 0;
while (qtdImpares < 10) {
  if (j % 2 != 0) {
    console.log(j);
    qtdImpares++;
  }
  j++;
}
