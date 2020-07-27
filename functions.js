/* -------------------------------------------- 

	You've just learned about functions.
	Functions are reusable pieces of code that make your code more modular.
	
	If you are writing the same bit of code over and over, you are doing more work that you have to.
	Use functions to simplify your code and decrease the amount of work you're doing. 

	Any time you start thinking 'this is tedious', you can probably write a function for that task.

  -------------------------------------------- */

const READLINE = require("readline-sync");

/* -------------------------------------------- 
  Challenge 1: Let's try to write some basic functions.
-------------------------------------------- */

 console.log("------------------- Challenge 1 -------------------");
 console.log("-------------- Challenge 1 Problem 1 -------------");

// **** Challenge 1: Problem 1 ****
// Write a function called printMessage() that prints any message you want.
function printMessage() {
  console.log("Seo Changbin is BABY!")
}

printMessage();

// **** Challenge 1: Problem 2 ****
// Write a function called printFiveMessages() that calls printMessage() five times.

console.log("-------------- Challenge 1 Problem 2 -------------");

function printFiveMessages() {
  printMessage();
  printMessage();
  printMessage();
  printMessage();
  printMessage();
}

printFiveMessages();

// **** Challenge 1: Problem 3 ****
// Write a function called getUserInput() that asks the user if they'd like to print your message
// once or five times. Then call one of the two functions above based on what the user decides.

console.log("-------------- Challenge 1 Problem 3 -------------");

function getUserInput(urMessage, howManyTimes) {
  urMessage = READLINE.question("What would you like to say? ");
  howManyTimes = READLINE.question("How many times? ");
  if (howManyTimes == "1") {
    console.log(urMessage);
  } else if (howManyTimes == "5") {
    console.log(urMessage);
    console.log(urMessage);
    console.log(urMessage);
    console.log(urMessage);
    console.log(urMessage);
  } else {
    console.log("That's not an option");
  }
}

getUserInput();

// **** Challenge 1: Problem 4 ****
// Write a function called printGreeting() that prints a greeting message to the user.

console.log("-------------- Challenge 1 Problem 4 -------------");

function printGreeting() {
  console.log("OwO, you are here! Hello!!!");
}

printGreeting();

console.log("-------------- Challenge 1 Problem 5 -------------");

// **** Challenge 1: Problem 5 ****
// Write a function called printClosing() that prints a goodbye message to the user.

function printClosing() {
  console.log("UwU, thanks for joining, and hope to see you soon!!!");
}

printClosing();


// **** Challenge 1: Problem 6 ****
// Write a function called run() that greets the user, asks them for input, and sends a goodbye message.
// Remember! Use the functions that you've already made. Don't hardcode anything!

console.log("-------------- Challenge 1 Problem 6 -------------");
function run(urMessage) {
  printGreeting();
  urMessage = READLINE.question("What would you like to say? ");
  console.log(urMessage);
  printClosing();
}

run();


/* -------------------------------------------- 

Challenge 2: Functions are also able to take input and return output. 
				The value(s) you pass to it are called parameters.

-------------------------------------------- */

 console.log("------------------- Challenge 2 -------------------");
 console.log("-------------- Challenge 2 Problem 1 -------------");
/* **** Challenge 2: Problem 1 ****

Write a function called sumDouble that takes two number paramters and returns their sum.
However, if the two values are the same, the funciton will return double their sum.

	Examples:
		sumDouble(1, 2) → 3
		sumDouble(3, 2) → 5
		sumDouble(2, 2) → 8

-------------------------------------------- */

function sumDouble(num1, num2) {
  num1 = READLINE.question("Enter a value for num1 ");
  num2 = READLINE.question("Enter a value for num2 ");
  if (num1 == num2) {
    num3 = num1 * num2 * 2;
    console.log(num3);
  } else {
    num4 = parseInt(num1) + parseInt(num2);
    console.log(num4);
  }
}

sumDouble();


console.log("-------------- Challenge 2 Problem 2 -------------");
// Make sure to test your code! Write a few function calls to make sure your code works!

/* -------------------------------------------- 

**** Challenge 2: Problem 2 ****

Write a function called makes10 that takes two numbers, a and b, and returns true if one if them is 10 or if their sum is 10.

	Examples:
		makes10(9, 10) → true
		makes10(9, 9) → false
		makes10(1, 9) → true

-------------------------------------------- */

function makes10(a, b) {
  a = READLINE.question("Enter a value for a: ");
  b = READLINE.question("Enter a value for b: ");

  c = parseInt(a) + parseInt(b);

  if (c == "10") {
    console.log("Trueeee!!");
    return true;
  } else {
    console.log("Falseee!!!!");
    return false;
  }
}

makes10();

// Make sure to test your code! Write a few function calls to make sure your code works!

/* -------------------------------------------- 

**** Challenge 2: Problem 3 ****

Write a function that will return the time our alarm is set to go off.

Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean
indicating if we are on vacation, return a string in the form "7:00" indicating
when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on
the weekend it should be "10:00". However, if we are on vacation -- then on weekdays
it should be "10:00" and weekends it should be "off".
	Examples:
		alarmClock(1, false) → "7:00"
		alarmClock(6, true) → "off"
		alarmClock(0, false) → "10:00"

-------------------------------------------- */


function alarm(dayOfWeek, Boolean trueFalse) {
  daysOfWeek
}





// Make sure to test your code! Write a few function calls to make sure your code works!

/* -------------------------------------------- 

**** Challenge 2: Problem 4 ****

Write a function that will tell if you if you received a speeding ticket.
You are driving a little too fast, and a police officer stops you. 

To compute the result, encoded as a number value: 
	0=no ticket
	1=small ticket
	2=big ticket
If speed is 60 or less, the result is 0. 
If speed is between 61and 80 inclusive, the result is 1. 
If speed is 81 or more, the result is 2.

-------------------------------------------- */








// Make sure to test your code! Write a few function calls to make sure your code works!
