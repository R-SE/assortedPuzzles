function reverseString(str) {
  return str.split("")
            .reverse()
            .join("");
}

function findLongestWordIgnoringPunctuation(str){
  var arrOfWords = str.replace(/[^\w\s]|_/g, "") //regex for replacing all
                      .replace(/\s+/g, " ")
                      .split(" ");
  var longest = arrOfWords[0];
  arrOfWords.forEach(function(e) { longest = e.length > longest.length ? e : longest });
  return longest;
}

/* Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.
Example: findPairForSum([3, 34, 4, 12, 5, 2], 9); --> [4, 5] -HR */
function findPairForSum(integers, target) {
  var pair;
  for (let i = 0; i < integers.length; i++) {       // create one loop that counts through the nums
    for (let j = 0; j < integers.length; j++) {     // create another "inner" loop that counts through the nums at the same time
      var num1 = integers[i];                       // for each num we assign in the outer loop, we assign all the nums for the inner
      var num2 = integers[j];
      if (num1 !== num2 && num1 + num2 === target) {  // check to see that they're not the same num, and that they add up to sum
        pair = [num1, num2];                          // assign the sum to the pair array; note: this will only return the last pair
      }
    }
  }
  return pair;
}


function iterativeFactorial(n) {
  var factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function recursiveFactorial(n) {
  return n < 2 ? n : recursiveFactorial(n - 1) * n;
}
