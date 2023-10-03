function humanize(num) {
  var ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  var tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  var numString = num;
  console.log(num);

  if (num < 0) throw new Error("Negative numbers are not supported.");

  if (num === 0) return "zero";

  //the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    return tens[numString[0]] + " " + ones[numString[1]];
  }

  //100 and more
  if (numString.length == 3) {
    if (numString[1] === "0" && numString[2] === "0") {
      let test = ones[numString[0]] + " hundred";
      console.log("final======", test);

      return test;
    } else {
      let test =
        ones[numString[0]] +
        " hundred and " +
        humanize(+(numString[1] + numString[2]));
      console.log("final======", test);

      return test;
    }
  }

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + " thousand";
    if (end < 100) return ones[numString[0]] + " thousand and " + humanize(end);
    let test = ones[numString[0]] + " thousand " + humanize(end);
    console.log("final======", test);

    return test;
  }
}

let test = humanize("88888");
console.log("Test ======", test);
