//Load libraries and define functions
const readline = require('readline-sync');

const mess = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(string) {
  return string.trimStart() === '' || Number.isNaN(Number(string));
}

function validLanguage(string) {
  return string === 'es' || string === 'en';
}


//Execute Calculator
let isUsing = true;
prompt(mess['en']['greet']);
prompt("English or Español? en/es")
let langAns = readline.question();
while (!validLanguage(langAns)) {
  prompt("Invalid language choice. Try again:");
  langAns = readline.question();
}
console.log(langAns);
do {
 
  // Ask the user for the first number.
  prompt(mess[langAns]['q1']);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(mess[langAns][error]);
    number1 = readline.question();
  }

  // Ask the user for the second number.
  prompt(mess[langAns]['q2']);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(mess[langAns][error]);
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt(mess[langAns]['q3']);
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(mess[langAns][error1]);
    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // Print the result to the terminal.
  prompt(`The result is: ${output}.`)
  prompt(mess[langAns]['repeat']);
  let useChoice = readline.question();
  if (useChoice !== 'yes') {
    isUsing = false;
  }
} while (isUsing); 
