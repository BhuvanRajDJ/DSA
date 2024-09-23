const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("enter the numbers to be print: ", function (input) {
  let stringinpt = input.split(" ");
  let n1 = parseFloat(stringinpt[0]);
  let n2 = parseFloat(stringinpt[1]);
  r1.close();
  console.log(n1);
  console.log(n2);
  let i = 0;
  if (n1 <= n2) {
    i = n1;
  } else {
    i = n2;
  }
  lcm = 1;
  let j = 2;
  while (j <= i) {
    if ((n1 % j === 0) & (n2 % j === 0)) {
      lcm = j * lcm;
      n1 = n1 / j;
      n2 = n2 / j;
    } else {
      j++;
    }
  }
  lcm = lcm * n1 * n2;
  console.log(lcm);
});
