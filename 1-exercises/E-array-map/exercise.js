// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiply(number) {
    return number * 100;
}

var numbersMultiplied = numbers.map(multiply);

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultiplied = numbers.map(function multiply(number) {
    return number * 100;
});

// It can be done without the name of the function.
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultiplied = numbers.map(function (number) {
    return number * 100;
});

// A shorter way of doing it.
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultiplied = numbers.map(number => {
    return number * 100;
});

// An even shorter way of achieving the same result
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultiplied = numbers.map(number => number * 100);