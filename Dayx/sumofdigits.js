const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the string: ", function (input) {
  const n = input;
  let count = 0;
  let sum = 0;
  while (true) {
    if (n.charAt(count) == "") {
      break;
    } else {
      sum += parseInt(n.charAt(count));
      count++;
    }
  }
  console.log(sum);
});
