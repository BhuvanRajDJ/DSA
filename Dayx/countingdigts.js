const readline = require("readline");
//const { google } = require("googleapis");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number:", function (input) {
  const n = input;
  let len = input.length;
  console.log(len);
  let i = 0;
  let k = 0;

  while (true) {
    if (n.charAt(i) == "") {
      break;
    } else {
      i++;
    }
  }
  console.log(i);
  r1.close();
});
