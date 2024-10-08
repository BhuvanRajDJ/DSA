const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", function (input) {
  var num = input.split(" ").map(Number);
  let i = 0;
  let len = num.length;
  let flag = 0;
  while (i < len-1) {
    let j = i + 1;
    while (j < len) {
      if (num[i] == num[j]) {
        console.log(num[i]);
        flag = 1;
        break;
      }
      j++;
    }
    if (flag == 1) {
      break;
    }
    i++;
  }
  if (flag == 0) {
    console.log("No");
  }
});
