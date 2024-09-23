//Odd or even
const readline = require("readline");

// Set up the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user to enter a positive integer
rl.question("Enter a positive integer: ", function (input) {
  const n = parseInt(input);

  // Check if n is odd or even
  if (n % 2 === 0) {
    console.log(n + " is even.");
  } else {
    console.log(n + " is odd.");
  }

  // Close the readline interface
  rl.close();
});
