/****************************************************************************
 *                                                                  
 *  Team Edge objects: OBJECTS CHALLENGES 
 * 
 *  For this activity, you will be building an object and with properties
 *  and methods. You will access the properties, set new values, and use
 *  the methods to change your object state. What object? Ask your coach.
 * 
 *  1. DEFINE: Make an object and set its properties, logging changes in between.
 *  2. MODIFY: Add 2 new properties and assing values. Change existing values,
 *     including adding or updating values inside arrays
 *  3. METHODS: Now its time to make some methods. Then can simply make a change
 *     to your values, like a boolean, or they can console log something about
 *     the object. Nothing fancy, unless you fancy it.
 *  4. LITERALLY: Use string literals to put it all together in one statement.
 * 
 * *************************************************************************/

console.log("------------------- CHALLENGE 1 : DEFINE    -------------------")

//Below is a simple example of an object implementaion. 
//-->TODO: Add at least 3 comments to the object below to demonstrate you understand its usage

let object = {
    name: "box",
    isEmpty: true,
    fillMe(){
        this.isEmpty=false
    },
    emptyMe(){

        this.isEmpty =true
    }
}

let smartPhone = {
    screen: "resolution",
    brand: "samsung",
    camera: 14,
    isNew: false,
    isCracked: true,
    features: ["front-face camera cam", "bluetooth"],

    saveData() {
        console.log("your data was saved")
    },

    fixedPhone() {
        this.isNew() = false;
    },

    removeFromApps() {
        itemIdex = this.apps.indexOf(item);
        //this.apps
    }

}
console.log(smartPhone.brand);
smartPhone.color = "black"
console.log(smartPhone.color);


//working with the object:
object.length = 12
object.width = 8
object.contents = ["thing 1", "thing 2", "thing 3"]
console.log(`${object.name} is ${object.length}  x ${object.width} `)
object.contents.push("thing 4")
console.log(`${object.name} has ${object.contents} `)
console.log(object)

 

//-->TODO: Declare a new object and set at least 4 properties to it including: string, boolean, number, array

//*********************************  MY OBJECT *************************** */


let computer = {
    screen: "display",
    brand: "Mac",
    model: "Catalina",
    isNew: true,
    yearMade: 2019,
    input: ["mouse", "keyboard"],

    saveData() {
        console.log("Your data was saved");
    },

    newToOld() {
        this.isNew = false;
    },

    addInput(input) {
        this.input.push(i);
    }
}

console.log(computer.brand);



//************************************************************************* */



console.log("------------------- CHALLENGE 2 : MODIFY   -------------------")

//-->TODO: Log your object you created above

console.log(computer.model);


//-->TODO: Update the object you just created  by adding new properties and values, including array elements, in this section.

computer.color = "grey";
console.log(computer.color);

computer.input.push("touchscreen");

//-->TODO: Log your object again and observe changes

console.log(computer.input);



console.log("------------------- CHALLENGE 3 : METHOD   -------------------")

//-->TODO: Add at least two methods (object functions) to your object defined in Challenge 1 and invoke them here.
//          Make your methods update your variables, or add a random number to an array, etc.

console.log(computer.isNew);
computer.newToOld();
console.log(computer.isNew);

console.log("------------------- CHALLENGE 4 : LITERALLY   -------------------")

//-->TODO: Put it all together using a string literal to tell the story of your object!

console.log(`I have a computer that is ${computer.brand}.`);