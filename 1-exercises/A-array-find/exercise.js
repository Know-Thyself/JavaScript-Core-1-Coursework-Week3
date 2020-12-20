/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];


const longNameThatStartsWithA = names.find((string) => {
  return string.startsWith('A') && string.length > 7;
})

console.log(JSON.stringify(longNameThatStartsWithA));



/* EXPECTED OUTPUT */
// "Alexandra"
