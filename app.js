function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result ' + num);
}
printResult(add(5, 7));
var combineValues = add;
console.log(combineValues(8, 8));
