function sum(num1: number, num2: number): number {
  return num1 + num2;
}

/* console.log(sum(10, 30));
console.log(sum(2, 4));
console.log(sum(1, 2)); */

let resultado: number = sum(15, 25);
let resultado2: number = sum(resultado, 5);
console.log(resultado2);
