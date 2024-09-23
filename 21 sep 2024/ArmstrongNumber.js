const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  var n = input;
  let len = n.length;
  var count = 0;
  let i = 0;
  while (i < len) {
    let n1 = parseInt(n[i]) ** len;
    count = count + n1;
    i++;
  }
  if (count == n) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
