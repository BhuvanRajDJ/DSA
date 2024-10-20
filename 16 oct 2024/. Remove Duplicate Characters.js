const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the string: ", function (input) {
  let str = input;
  let len = str.length;
  let i = 0;
  while (i < len - 1) {
    let j = i + 1;
    while (j < len) {
      if (str[i] == str[j]) {
        str = str.replace(str[j], "");
      }
      j++;
    }
    i++;
  }
  console.log(str);
});
