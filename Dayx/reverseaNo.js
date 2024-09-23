const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  const n = input;
  let len = n.length;
  let i = len - 1;
  let reverse = "";
  while (i >= 0) {
    reverse += n.charAt(i);
    i--;
  }
  console.log(reverse);
});
