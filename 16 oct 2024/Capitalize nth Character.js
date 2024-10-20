const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the string: ", function (input) {
  let str = input;
  r1.question("Enter the string: ", function (input) {
    let n = parseInt(input);

    str = str.replace(str[n], str[n].toUpperCase());
    console.log(str);
  });
});
