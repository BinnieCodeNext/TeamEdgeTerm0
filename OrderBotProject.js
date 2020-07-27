/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  -------------------------------------------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

const READLINE = require("readline-sync");
console.log("Haiii everyonee, welcome to the shoppp!!");
let usr1Name = READLINE.question("User 1 please enter your name: ");
console.log("User 1's name is " + usr1Name);
let usr2Name = READLINE.question("User 2 please enter your name: ");
console.log("User 2's name is " + usr2Name);
let usr3Name = READLINE.question("User 3 please enter your name: ");
console.log("User 3's name is " + usr3Name);

/* -------------------------------------------- 

Part 1:
Let's start by asking taking the order of the group(you and two friends). What did each person order?

Write a function that will take the group's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

let usr1Food;
let usr1Drink;
let usr2Food;
let usr2Drink;
let usr3Food;
let usr3Drink;

function takeUsrOrder(user, item){
	cost = parseInt(READLINE.question(`Enter the price of ${user}'s ${item}: `));
	return cost;
}

usr1Food = takeUsrOrder(usr1Name, `meal`);
usr1Drink = takeUsrOrder(usr1Name, `drink`);
usr2Food = takeUsrOrder(usr2Name, `meal`);
usr2Drink = takeUsrOrder(usr2Name, `drink`);
usr3Food = takeUsrOrder(usr3Name, `meal`);
usr3Drink = takeUsrOrder(usr3Name, `drink`);

console.log(usr1Food, usr1Drink, usr2Food, usr2Drink, usr3Food, usr3Drink);


/* -------------------------------------------- 

Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).

Write a function that will calculate the cost of each person's order, including:
- Cost of all of their ordered items
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */


let usr1Total;
let usr2Total;
let usr3Total;

function calculateCosts(food, drink){
	usrTip = READLINE.question(`How much do you want to tip?  5%?  10%?  20%? `);
	meal = food + drink;
	tax = meal * 0.0925;
	totalwTax = meal + tax;
	let tip = 0
	if(usrTip == `5%`){
		tip = totalwTax * .05;	
	}
	else if(usrTip == `10%`){
		tip = totalwTax * .1;	
	}
	else if(usrTip == `20%`){
		tip = totalwTax * .2;	
	}
	total = totalwTax + tip;
	return total;
}

usr1Total = calculateCosts(usr1Food, usr1Drink);
usr2Total = calculateCosts(usr2Food, usr2Drink);
usr3Total = calculateCosts(usr3Food, usr3Drink);

console.log(usr1Total, usr2Total, usr3Total);


/* -------------------------------------------- 

Part 3:
Let's print out a receipt for each person.

Write a function that will take the values of each person's order and total cost and print it out in an appealing way.

The receipt should include:
- Cost of each item
- Total cost for each person

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */


function usrReceipt(usr, food, drink, total) {
	console.log(`${usr}: Food: ${food}
		                   Drink: ${drink}
		                + tax & tip
		                  Total: ${total}`);
}

console.log("User 1's receipt is " + usrReceipt(usr1Name, usr1Food, usr1Drink, usr1Total));
console.log("User 2's receipt is " + usrReceipt(usr2Name, usr2Food, usr2Drink, usr2Total));
console.log("User 3's receipt is " + usrReceipt(usr3Name, usr3Food, usr3Drink, usr3Total));


/* -------------------------------------------- 

Part 4: Upchallenges!

How many of these upchallenges can you implement?

- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter. 
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any shared items ordered for the group?
- Display the tax and tip values
- Implement a rewards system (stamp cards, buy one get one, etc)

-------------------------------------------- */
