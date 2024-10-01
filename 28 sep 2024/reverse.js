const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the array: ", function (input) {
  let number = input.split(" ").map(Number);
  let len = number.length - 1;
  let reverse = [];
  while (len >= 0) {
    reverse.push(number[len]);
    len--;
  }
  console.log(reverse.join(" "));
});
