/* 
  You are given a sentence contains a story.

  Current it says 

  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."

  Change the story using .replace() so that it says 

  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
*/

let story =
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";

  // I tried the following method but it did not work
//let result = story.replace(/dogs/gi,"cats").replace(/day/gi,"night").replace(/10/gi,"10000").replace(/great/gi,"brilliant");

// The following code has delivered the expected outcome but it didn't pass the test and I would like to know why.
var mapObj = {dogs:"cats", day:"night", 10:"10000", great:"brilliant"};

  var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
  result = story.replace(re, function(matched){
    return mapObj[matched];
  });
  console.log(result);


/* EXPECTED OUTPUT */

const util = require("util");

function test(test_name, actual, expected) {
  console.log("");
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: \nexpected: ${util.inspect(
      expected
    )} \nbut your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "1. Original story has not been changed",
  story,
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."
);

test(
  "2. The result of the replace is correct",
  story,
  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."
);
