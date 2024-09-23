const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the age ", function (input) {
  const n = parseInt(input);

  if ((n >= 0) & (n < 3)) {
    console.log("Infant");
  } else if ((n >= 3) & (n < 13)) {
    console.log("Child");
  } else if ((n >= 13) & (n < 20)) {
    console.log("Teenager");
  } else if ((n >= 20) & (n < 66)) {
    console.log("Adult");
  } else if (n > 65) {
    console.log("Senior");
  } else {
    console.log("Please Enter Valid number");
  }

  r1.close();
});
