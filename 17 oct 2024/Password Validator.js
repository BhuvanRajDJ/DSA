const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the string: ", function (input) {
  let password = input;
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*_?:";'.,])[A-Za-z\d\s!@#$%^&*_?:";'.,]{8,}$/;

  if (passwordPattern.test(password)) {
    console.log("Yes");
  } else {
    console.log("No");
  }

  r1.close();
});
