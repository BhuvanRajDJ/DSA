const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  let number = input.split(" ").map(Number);
  let len = number.length;
  let i = 0;
  let sum = 0;
  let sums = 0;
  let sumarray = [];

  while (i < len) {
    sum += number[i];
    let j = 1;
    i++;
  }
  let j = 0;
  while (j < len) {
    sums = sum - number[j];
    sumarray.push(sums);
    j++;
  }

  console.log(sumarray.join(" "));
});
