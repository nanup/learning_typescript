const userName = 'Nanu';
let age = 25;

function addNumbers(a: number, b: number = 1) {
  var result;
  result = a + b;
  return result;
}

const addStrings = (a: string, b: string) => {
  return a + b;
};

console.log(addStrings('nanu', 'p'));
console.log(addNumbers(2));

const addMany = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(addMany(1, 2, 3, 4));
