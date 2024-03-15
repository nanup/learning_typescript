function add(
  n1: number,
  n2: number,
  printResult: boolean,
  resultPhrase: string
) {
  const result = n1 + n2;
  if (printResult) {
    console.log(resultPhrase + result);
  } else {
    return n1 + n2;
  }
}

const num1 = 5;
const num2 = 6.0;
const printResult = true;
const resultPhrase = 'The answer is ';

add(num1, num2, printResult, resultPhrase);
