const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter something: ", function (input) {
  const stri = input;
  console.log(" ");
  console.log("Using For Loop");
  console.log(" ");
  for (i = 0; i < 5; i++) {
    console.log(stri);
  }

  console.log(" ");
  console.log("Using While Loop");
  console.log(" ");
  let j = 0;
  while (j < 5) {
    console.log(stri);
    j++;
  }
  r1.close();
});
