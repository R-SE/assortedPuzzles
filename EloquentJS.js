// 1. Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

function makeLine(num) {
  var line = "";
  for (let i = 0; i < num; i++) {
    line += "#";
  }
  return line;
}

function makeTriangle(lineNum) {
  for (let i = 1; i <= lineNum; i++) {
    console.log(`${makeLine(i)}\n`);
  }
}

makeTriangle(7);

// -----------------------------------------------------------------------------------------------
// 2. FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {                  // i % 3 will return 0 (false) if divisible by 3, so reverse with unary op
    var printFB = !(i % 3) && !(i % 5) ?            // "is divisible by both 3 and 5?"
    "FizzBuzz" : !(i % 3) ?                         // "is divisible by 3?"
    "Fizz" : !(i % 5) ?                             // "is divisible by 5?"
    "Buzz" : i;
    console.log(printFB);
  }
}
// long version
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// -----------------------------------------------------------------------------------------------
// 3. Chess board
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chess board.
// Passing this string to console.log should show something like this:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

function makeChess(num) {
  var chessSquare = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {           // the board begins on an "even" square where i + j = 2;
      let char = ((i + j) % 2) ? "#" : " ";   // "if the iteration lands on an odd-numbered square, use #"
      chessSquare += char;
   }
    chessSquare += "\n";
  }
 console.log(chessSquare);
}

makeChess(10);

// -----------------------------------------------------------------------------------------------
