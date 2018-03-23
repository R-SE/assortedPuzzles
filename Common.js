function reverse(str) {
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

function reverseInt(n) {
  return Math.sign(n) * parseInt(n          // or recursively first line -> return n < 0 ? -reverseInt(-n) :  parseInt(n
                            .toString()
                            .split('')
                            .reverse()
                            .join(''));
}

function iterativeFactorial(n) {
  var factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function factorial(n) {
  return n === 0 ? 1 : factorial(n - 1) * n;
}

function countChars(str) {          // returns an object with a count of each char in key-value pairs
  var chars = {};
  for (let char of str) {
    chars[char] = chars[char]++ || 1;
  }
  return chars;
}

function maxValue(obj) {        // given an object, returns the key with the highest integer value
  return Object
          .keys(obj)
          .reduce((a, b) => (obj[b] > obj[a]) ? b : a);
}

function palindrome(str) {    // while-looped palindrome-checker
  let left = -1;
  let right = str.length;
  while(left++ <= right--) {
    if(str[left] !== str[right]) {
      return false;
    }
  }
  return true;
}

function palindrome(str) {  // creating a reversed string using reduce
  var reversed = str.split('').reduce((acc, char) => char + acc, '');
  return reversed === str;
}

function condensedFizzBuzz(n) {   // classic fizzbuzz problem logging from 1 to n
  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 3 === 0) {str += 'fizz'};
    if (i % 5 === 0) {str += 'buzz'};
    console.log(str || i);
  }
}

function ternaryFizzBuzz(n) {     // nested ternary
  for (let i = 1; i <= n; i++) {
    let f = i % 3 === 0,
        b = i % 5 === 0,
        msg = f & b ? 'fizzbuzz' : f ? 'fizz' : b ? 'buzz' : i;
    console.log(msg);
  }
}

function chunk(array, size) {  // iterative solution checking each element
  var chunked = [];
  for (var ele of array) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === size) {          // if there is no chunk (i.e. empty array) or chunk is filled
      chunked.push([ele]);                         // push in a newly created chunk with the element
    } else {
      last.push(ele);                           // otherwise push the element into the existing chunk
    }
  }
  return chunked;
}

function chunk(array, size) {   // slicing solution for making nested arrays of given size from given array
  var chunk = [];
  for (let i = 0; i < array.length; i += size) {
    chunk.push(array.slice(i, i + size));
  }
  return chunk;
}

function clean(str) {       // helper function for anagram function
  return str
  .replace(/[^\w]/g, '')    // regex replaces all non-alpha chars
  .toLowerCase()
  .split('')
  .sort()
  .join('');
}
function anagrams(str1, str2) {
  return clean(str1) === clean(str2);
}

function pyramid(n) {                     // building a pyramid of height n
  for(let row = 1; row <= n; row++) {
    var spaces = ' '.repeat(n - row);
    var hashes = '#'.repeat(row * 2 - 1);
    console.log(spaces + hashes + spaces);
  }
}

function vowels(str) {                        // working with regex
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

function matrix(n) {       // creating a NxN spiral matrix by "removing" the outer rows/cols when finished
  var results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let topEdge = 0;
  let rightEdge = n - 1;
  let botEdge = n - 1;
  let leftEdge = 0;

  while (topEdge <= botEdge && leftEdge <= rightEdge) {
    for (let i = leftEdge; i <= rightEdge; i++) {
      results[topEdge][i] = counter;
      counter++;
    }
    topEdge++;
    for (let i = topEdge; i <= botEdge; i++) {
      results[i][rightEdge] = counter;
      counter++;
    }
    rightEdge--;
    for (let i = rightEdge; i >= leftEdge; i--) {
      results[botEdge][i] = counter;
      counter++;
    }
    botEdge--;
    for (let i = botEdge; i >= topEdge; i--) {
      results[i][leftEdge] = counter;
      counter++;
    }
    leftEdge++;
  }
  return results;
}

function fibRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const val = fn.apply(this, args);
    cache[args] = val;
    return val;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
