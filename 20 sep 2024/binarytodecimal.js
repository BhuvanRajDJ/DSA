const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter the number: ", function (input) {
  let n1 = input;

  let length = n1.length - 1;
  let i = 0;
  let sum = 0;
  let x = 0;
  while (length >= 0) {
    if (parseInt(n1[i]) == 1) {
      x = 2 ** length;
      sum = sum + x;
    }

    i++;
    length--;
  }
  console.log(sum);
  r1.close();
});
