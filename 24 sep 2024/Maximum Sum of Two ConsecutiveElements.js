const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the numbers: ", function (input1) {
  var n = input1.split(" ").map(Number);
  let len = n.length;
  let maxsum = 0;
  let i = 0;
  while (i < len - 1) {
    if (n[i] + n[i + 1] >= maxsum) {
      maxsum = n[i] + n[i + 1];
    }
    i++;
  }
  console.log(maxsum);
});
