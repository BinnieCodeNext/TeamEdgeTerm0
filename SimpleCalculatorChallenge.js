/* -------------------------------------------- 
	You've just learned all about functions. 
	Now take what you've learned to create your own
					CALCULATOR!
	We'll guide you through the first few steps,
	then you'll have a chance to add your own features
	that will make this your new go-to calculator!
  -------------------------------------------- */

  console.log(`My Simple Calculator`);
  const READLINE = require("readline-sync");

/* -------------------------------------------- 
Part 1: 
	The first features of any simple calculator is that
	it should be able to perform the basic math operations. 
	Let's start by writing the functions we'll need to execute 
	the following operations:
		Addition
		Subtraction
  -------------------------------------------- */

// Write a function called addNumbers that will take two numbers and return the sum.

console.log("Part 1 -- Addition Part");
function addNumbers(num1, num2) {
   sum = parseInt(num1) + parseInt(num2);
   console.log(sum);
   return sum;
}

// Write a function called subNumbers that will take two numbers and return the difference.

console.log("Part 1 -- Subtraction Part");
function subNumbers(num1, num2) {
  differ = parseInt(num1) - parseInt(num2);
  console.log(differ);
  return differ;
}

/*------------*/
// Testing Code - Uncomment the code below to test your code!

checkAnswers(addNumbers(5, 15), 20); 
checkAnswers(addNumbers(3, 18), 21);
checkAnswers(addNumbers(12, 28), 40); 

checkAnswers(subNumbers(18, 7), 11);
checkAnswers(subNumbers(11, 9), 2);
checkAnswers(subNumbers(18, 21), -3);

/* -------------------------------------------- 
Part 2: 
	Now that you have addition and subtraction down, let's add the other operators we learned!
	Finish off your basic calculator by writing the functions 
	for the following operations:
		Multiplication
		Division 
  -------------------------------------------- */

// Write a function called multiplyNumbers that will take two numbers and return the product.

console.log("Part 2 -- Multiplication Part");
function multiplyNumbers(num1, num2) {
  prod = parseInt(num1) * parseInt(num2);
  console.log(prod);
  return prod;
}

// Write a function called divideNumbers that will take two numbers and return the quotent.

console.log("Part 2 -- Division Part");
function divideNumbers(num1, num2) {
  quot = parseInt(num1) / parseInt(num2);
  console.log(quot);
  return quot;
}

/*------------*/
// Testing Code - Uncomment the code below to test your code!

checkAnswers(multiplyNumbers(10, 3), 30); 
checkAnswers(multiplyNumbers(21, 7), 147);
checkAnswers(multiplyNumbers(4, 16), 64); 

checkAnswers(divideNumbers(24, 100), `.24`);
checkAnswers(divideNumbers(21, 7), `3`);
checkAnswers(divideNumbers(15, 4), `3.75`);

/* -------------------------------------------- 
Part 3: 
	Now that you have your basic functions in place, you need to get some user input.
	What's a calculator for if no one is using it?
  Write a function that will prompt the user for the operation they want to call and the values they are inputting.
  -------------------------------------------- */

  console.log("Part 3 -- The Basic/Actual Calculator");
  function actualCalculator() {
    console.log("Welcome to my Calculator: \nHere are the options: \n Option (1) Addition\n Option (2) Subtraction\n Option (3) Multiplication\n Option (4) Division");
    let msg = READLINE.question("What operation would you like to do? ");
    console.log(msg);
    symOption = parseInt(msg);

    num3 = READLINE.question("What number do you want for first number? ");
    num4 = READLINE.question("What number do you want for the second number? ");
    if (symOption == "1") {
      addNumbers(num3, num4);
    } else if (symOption == "2") {
      subNumbers(num3, num4);
    } else if (symOption == "3") {
      multiplyNumbers(num3, num4);
    } else if (symOption == "4") {
      divideNumbers(num3, num4);
    } else {
      console.log("No such option so we are just end things here");
    }
  }

  actualCalculator();

/* -------------------------------------------- 
Part 4: 
	Now that you have all of the basic four operations completed, you get to add your own features!
	What will you add to make this your go-to calculator? 
	Stuck? : Think about what you count/calculate on a (almost) daily basis.
	Can you write a function that will take in the data you need and do the calculation for you? 
	(I know I calculate how many hours of sleep I get every day... ｡(*^▽^*)ゞ )
  -------------------------------------------- 
  Write a function or functions that will add some unique features to your calculator. 
  Don't forget to:
		Give your function an name and parameters that are self explanatory and written in camelcase!
		Use comments throughout your code
		Test your code!
  
  -------------------------------------------- */

  function fancyCalculator() {

    // Introduction
    console.log("Welcome to the Fancy Multi Purpose Calculator");

    // Choices on whether or not to start calculator
    clarifyQuestion = READLINE.question("Are you ready to use the calculator? \n Option (1) Yes\n Option (2) No\n");

    clarification = parseInt(clarifyQuestion);

    // You got choices two whether Yes to start the calculator or Not
    if (clarification == "1") {
      console.log("Welcome to my Calculator: \nHere are the options: \n Option (1) Addition\n Option (2) Subtraction\n Option (3) Multiplication\n Option (4) Division");
      let msg = READLINE.question("What operation would you like to do? ");console.log(msg);
      
      symOption = parseInt(msg);
      
      num3 = READLINE.question("What number do you want for first number? ");
      num4 = READLINE.question("What number do you want for the second number? ");
      
      if (symOption == "1") {
        addNumbers(num3, num4);
      } else if (symOption == "2") {
        subNumbers(num3, num4);
      } else if (symOption == "3") {
        multiplyNumbers(num3, num4);
      } else if (symOption == "4"){
        divideNumbers(num3, num4);
      } else {
        console.log("no such option");
      }

      
    } else {
      console.log("Thanks for joining the calculator, it sad to see you end the journey already..")
    }
  }

  fancyCalculator();

/* -------------------------------------------- */
// Ignore this section. This is just for checking your work

function checkAnswers(genAnswer, correctAnswer){
	if(genAnswer == correctAnswer){
		console.log(`Your code works!`)
	}
	else{
		console.log(`Try again, your code generated ${genAnswer} but the correct answer is ${correctAnswer}`);
	}
}
