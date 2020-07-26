/* -------------------------------------------- 

	You've just learned about variables, conditionals.
	Just from knowing those two topics, you can do so much!
	
	Let's try to make a simple program that responds to the user.
	We're going to recreate the Magic 8 Ball!!!
			
			Never heard of it? That's ok!

					You got this!

  -------------------------------------------- 

	How a Magic 8 Ball Works:

	The user asks a question and vigoriously shakes the ball. 
	Then the ball will respond with one of twenty responses, chosen at random. 

	That's pretty simple right?

  -------------------------------------------- 

	Part 1: 
	Print instructions on the screen and 
	prompt the user to ask a question

	Tip: Don't forget to import the readline-sync module!

  -------------------------------------------- */
  const READLINE = require("readline-sync");
  console.log("Welcome to Magic 8 Ball");
  
  usrQuestion = READLINE.question("What is your question for the Magic 8 Ball? ");
  console.log("My question is: " + usrQuestion);

/* -------------------------------------------- 

	Part 2: Next, we need to randomly select a response from 20 options.

	Randomly select a number from 0 - 19 
	Use that to select from the following responses:
		0 - It is certain.
		1 - It is decidedly so.
		2 - Without a doubt.
		3 - Yes - definitely.
		4 - You may rely on it.
		5 - As I see it, yes.
		6 - Most likely.
		7 - Outlook good.
		8 - Yes.
		9 - Signs point to yes.
		10 - Reply hazy, try again.
		11 - Ask again later.
		12 - Better not tell you now.
		13 - Cannot predict now.
		14 - Concentrate and ask again.
		15 - Don't count on it.
		16 - My reply is no.
		17 - My sources say no.
		18 - Outlook not so good.
		19 - Very doubtful.

	Look up Math.random to see how you can use it to select a random number.

  -------------------------------------------- */

  var randomNumber;
  randomNumber = Math.floor(Math.random() * 20);
  
  console.log(randomNumber);

/* -------------------------------------------- 

	Part 3: Customize it!

	Select your own theme and use case and modify your code!
	
  -------------------------------------------- */

  if (randomNumber == 0) {
    console.log("It is certain");
  } else if (randomNumber == 1) {
    console.log("It is decidedly so.");
  } else if (randomNumber == 2) {
    console.log("Without a doubt.");
  } else if (randomNumber == 3) {
    console.log("Yes - definitely.");
  } else if (randomNumber == 4) {
    console.log("You may rely on it.");
  } else if (randomNumber == 5) {
    console.log("As I see it, yes.");
  } else if (randomNumber == 6) {
    console.log("As I see it, yes.");
  } else if (randomNumber == 7) {
    console.log("Outlook good.");
  } else if (randomNumber == 8) {
    console.log("Yes.");
  } else if (randomNumber == 9) {
    console.log("Signs point to yes.");
  } else if (randomNumber == 10) {
    console.log("Reply hazy, try again.");
  } else if (randomNumber == 11) {
    console.log("Ask again later");
  } else if (randomNumber == 12) {
    console.log("Better not tell you now.");
  } else if (randomNumber == 13) {
    console.log("Cannot predict now.");
  } else if (randomNumber == 14) {
    console.log("Concentrate and ask again.");
  } else if (randomNumber == 15) {
    console.log("Don't count on it.");
  } else if (randomNumber == 16) {
    console.log("My reply is no.");
  } else if (randomNumber == 17) {
    console.log("My sources say no.");
  } else if (randomNumber == 18) {
    console.log("Outlook not so good.");
  } else {
    console.log("Very doubtful.");
  }
