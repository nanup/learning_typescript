type NumString = number | string;

function add(n1: NumString, n2: number | string) {
  return n1 + n2;
}

const num1 = 2;
const num2 = 3;

console.log(add(num1, num2));
