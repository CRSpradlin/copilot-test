// function to get user input from terminal and return it as a string
function getUserInput() {
  return process.argv[2];
}

// function to get all numbers in a string and return them as an array
function getNumbers(string) {
  return string.split(/[^0-9]/).filter(function(number) {
    return number !== '';
  });
}

// // function to get all operators in a string and return them as an array
// function getOperators(string) {
//   return string.split(/[0-9]/).filter(function(operator) {
//     return operator !== '';
//   });
// }

// function to find all non-numeric characters in a string and return them as an array
function getNonNumericCharacters(string) {
    return string.split(/[0-9]/).filter(function(character) {
        return character !== '';
    });
}

// main functino to call getUserInput, getNumbers, and getOperators
function main() {
    var userInput = getUserInput();
    var numbers = getNumbers(userInput);
    var operators = getNonNumericCharacters(userInput);
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        var number = parseInt(numbers[i]);
        if (i === 0) {
        result = number;
        } else {
        result = operate(operators[i - 1], result, number);
        }
    }
    console.log(result);
}

// function to perform the operation
function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return 'Invalid operator';
    }
}

// call main function
main();