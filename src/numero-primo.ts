let ehPrimo: number = 7;

let qtdMultiplos: number = 0;
for (let i = 1; i <= ehPrimo; i++) {
  if (ehPrimo % i == 0) {
    if (i !== 1) {
      qtdMultiplos++;
    }
  }
}
if (qtdMultiplos == 1) {
  console.log("Esse número é primo");
} else if (qtdMultiplos > 1) {
  console.log("Não é primo");
} else {
  console.log("Não é primo");
}
