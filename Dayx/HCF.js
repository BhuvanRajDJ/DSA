const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the number: ", (input) => {
  let inputstr = input.split(" ");
  let n1 = parseFloat(inputstr[0]);
  let n2 = parseFloat(inputstr[1]);
  console.log(n1);
  console.log(n2);
  r1.close();
  let ht = 0;
  let hcf = 1;
  if (n1 > n1) {
    ht = n2;
  } else {
    ht = n1;
  }
  let i = 1;
  while (i <= ht) {
    if ((n1 % i === 0) & (n2 % i === 0)) {
      hcf = i;
    }
    i++;
  }
  console.log("HCF of " + n1 + " " + "and " + n2 + " is " + hcf);
  r1.close();
});
