function encontrePrimo(num: number): boolean {
  let qtdMultiplos: number = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      if (i !== 1) {
        qtdMultiplos++;
      }
    }
  }
  if (qtdMultiplos == 1) {
    return true;
  } else if (qtdMultiplos > 1) {
    return false;
  } else {
    return false;
  }
}

let numero: number = 12;
console.log(encontrePrimo(numero));
