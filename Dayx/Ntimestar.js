const readline = require("readline");
//const { google } = require("googleapis");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question(
  "Enter the number of times the stars should be print: ",
  function (input) {
    const n = parseInt(input);
    let star = "";
    let i = 0;
    let array = [];
    while (i < n) {
      star += "*";
      array.push("*");
      i++;
    }
    console.log(array.join(""));
    console.log(star);
  }
);
