const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the grade: ", function (input) {
  const n = parseInt(input);
  if ((n >= 90) & (n <= 100)) {
    console.log(n + " Grade A");
  } else if ((n >= 80) & (n <= 89)) {
    console.log(n + " Grade B");
  } else if ((n >= 70) & (n <= 79)) {
    console.log(n + " Grade C");
  } else if ((n >= 60) & (n <= 69)) {
    console.log(n + " Grade D");
  } else if ((n >= 50) & (n <= 59)) {
    console.log(n + " Grade E");
  } else {
    console.log(n + " Grade F");
  }

  r1.close();
});
