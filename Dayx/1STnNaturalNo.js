const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the Numbers To be print: ", function (input) {
  const n = parseInt(input);
  let i = 1;
  var numbers = [];
  while (i <= n) {
    //numbers.push(i);
    numbers.push(i);
    i++;
  }
  console.log(numbers.join(","));
  console.log(numbers);
  r1.close();
});
