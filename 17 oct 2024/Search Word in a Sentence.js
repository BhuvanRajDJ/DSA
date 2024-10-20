const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the sentence: ", function (input) {
  let sentence = input.split(" ");
  r1.question("Enter the word: ", function (input) {
    let word = toString(input);
    let flag = false;

    let i = 0;
    while (i < sentence.length) {
      if (sentence[i].toLowerCase() == word.toLowerCase()) {
        flag = true;
      } else {
        let j = 0;
        let sent = toString(sentence[i]);
        while (j < sentence.length) {
          if (
            sent[i] == "?" ||
            sent[i] == "!" ||
            sent[i] == "$" ||
            sent[i] == "'" ||
            sent[i] == "#" ||
            sent[i] == "@" ||
            sent[i] == "." ||
            sent[i] == "(" ||
            sent[i] == ")" ||
            sent[i] == "{" ||
            sent[i] == "}" ||
            sent[i] == "[" ||
            sent[i] == "]" ||
            sent[i] == "<" ||
            sent[i] == ">"
          )
            sent = sent.replace(sent[i], "");
          j++;
        }
        sentence[i] = sent;
        i--;
      }
      i++;
    }

    if (flag == true) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  });
});
