function reverseString(str) {
  return str.split("")
            .reverse()
            .join("");
}

function findLongestWordIgnoringPunctuation(str){
  var arrOfWords = str.replace(/[^\w\s]|_/g, "")
                      .replace(/\s+/g, " ")
                      .split(" ");
  var longest = arrOfWords[0];
  arrOfWords.forEach(function(e) { longest = e.length > longest.length ? e : longest });
  return longest;
}
