// basic assertion
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed [${testName}]`);
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
}
var output = myFunc(param);
assertEqual(output, expected, 'it does unit testing');

// array assertion
function assertArraysEqual(actual, expected, testName) {
  var areEqualValues = actual.every(function(item, i) {
    return item === expected[i];
  });
  var areEqualLength = (actual.length === expected.length);
  if (areEqualLength && areEqualValues) {
     console.log(`passed [${testName}]`);
   } else {
     console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
   }
}

//object assertion
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log(`passed [${testName}]`);
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}
