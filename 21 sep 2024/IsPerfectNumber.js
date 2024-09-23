const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  var n = parseInt(input);
  let count = 0;
  let i = 1;
  while (i < n) {
    if (n % i == 0) {
      count = count + i;
    }
    i++;
  }
  if (count == n) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
