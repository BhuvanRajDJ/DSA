const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  const n = parseInt(input);
  let Fabinacciseries = "0,1";
  let n1 = 0;
  let n2 = 1;
  let sum = 0;
  let i = 0;
  while (i < n - 2) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    Fabinacciseries += "," + sum;
    i++;
  }
  console.log(Fabinacciseries);
  r1.close();
});
