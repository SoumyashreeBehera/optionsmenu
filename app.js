const readline = require("readline");

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = ["a", "b", "c", "d", "e"];

let repeat = (num) => {
  if (num == 1) {
    console.log(arr);
    again();
  } else if (num == 2) {
    readline1.question("enter the book name", function (name) {
      arr.push(name);
      console.log("book added successfully");
      console.log(arr);
      again();
    });
  } else if (num == 3) {
    readline1.question(
      "Are you sure you want to quit enter y",
      function (letter) {
        if (letter == "y") {
          readline1.close();
        }
      }
    );
  } else {
    readline1.question("You have entered a wrong input", again());
  }
};
let again = () => {
  readline1.question("Press 1,2 or 3", repeat);
};
again();
readline1.on("close", function () {
  console.log("bye");
});
