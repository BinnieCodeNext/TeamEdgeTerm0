/*
        Astral Mini Adventure
   - You are playing a role-playing game (Playing in Astral's POV)
   - 
 */

const READLINE = require("readline-sync");

let inputMsg = ""; // use for storing user's inputs
let gameStatus = true; // the game's status loop to check if it's on
                       // based on the statment being true
let currentRoom = null; // use for keeping track where the user is at
let rooms = []; // use to push any new rooms you create to this array

//                    JUST CLASSES FOR THE PROJECT
//---------------------------------Class #1---------------------------------
class Room {
    constructor(name, area, information, artifact) {
        this.name = name;
        this.area = area;
        this.artifact = artifact;
        this.information = information;

    }
}
//---------------------------------Class #2---------------------------------
class Artifact {
    constructor(name, accepts, information, area) {
        this.name = name;
        this.accepts = accepts;
        this.area = area;
        this.information = information;
    }
}
//                   JUST OBJECTS FOR THE PROJECT
//-------------------------------------------------------------------------------------------
let blackCase = new Artifact()
blackCase = "blackCase"
blackCase.accepts = true
blackCase = "garden"
blackCase.infomation = `
            【𝔹𝕝𝕒𝕔𝕜 𝕔𝕒𝕤𝕖】
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
You look at the black case. You see a
simple latch. You have a choice to
either keep it on the ground or to
pick it up...What do you you choose???
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄`
//-------------------------------------------------------------------------------------------
let goldObject = new Artifact()
goldObject = "key"
goldObject.accepts = true
goldObject = "garden"
goldObject.information = `
               【𝕂𝕖𝕪】
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
You stare at the object. The object is
is a piece of metal that fits inside a
lock or a door and turns to open it. So
you thought to yourself, "YES! This is
a frickinn key". You have two choices
either put it in your pocket or just
yeet it to the neighbors, maybe
outerspace!!!
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄`

// /*let phone = new item()
// phone.name = "blackobject"
// phone.canTake = true
// phone.location = "bedroom"
// phone.examined = false
// if (phone.examined == true) {
//     phone.name = "phone"
// }
// phone.Description = `
// 【ＢＬＡＣＫ　ＯＢＪＥＣＴ】
// _______________________________________________________________________________
// You look at the black flat object. It feels familar in your hands. Then it hits
// you. This is a phone! Hit the buttons you note that it's off. If you can some
// how charge it maybe you can call for help.
// [You can take phone]
// _______________________________________________________________________________
// `
//  phone.Firstdescription =`
//                     【ＢＬＡＣＫ　ＯＢＪＥＣＴ】
// _______________________________________________________________________________
// You look at the black flat object. It feels familar in your hands. Then it hits
// you. This is a phone! Hit the buttons you note that it's off. If you can some
// how charge it maybe you can call for help.
// [You can take phone]
// _______________________________________________________________________________
// `*/
// //-------------------------------------------------------------------------------------------
let garden = new Room()
garden.name = "garden"
garden.areas = ["porch", "back door"]
garden.items = ["bushes", blackCase.name, goldObject.name, "flowers", "mailbox"]
garden.information = `
                  【𝔾𝕒𝕣𝕕𝕖𝕟】
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
You are in the garden. There is currently rain,
but it's weird because it is raining only on
your house..`
// bedroom.description = `
//                          【ＢＥＤＲＯＯＭ】
// _______________________________________________________________________________
// You are in a bedroom. There are no windows in the room, the only light source
// is coming from one iridecent light bulb hanging above your head. In the middle
// of the room there is a full sized bed. The sheets on the bed are greasy and
// stained with with somthing that looks like dirt. You see a clock on the
// nightstand besides the bed. You notice a thin black object on the bed.
// [Items: ${bedroom.items}] [Doors: ${bedroom.doors}]
// _______________________________________________________________________________

//************* START GAME *************************
function start(){

    console.log("Welcome to Astral Mini Adventure");
    let name = READLINE.question("What is your name, player? ")
    player.name = name
    console.log("Welcome, " + name + ". You will be playing as Astral today.");

   //begin at the garden
    currentRoom = garden

    console.log(`You are in a: ${currentRoom.name}. and everything looks normal. The air smells like death`)

    while(gameIsOn){

        checkAnswer(promptUser()) //this makes the game continously prompt and check response

    }
}

function promptUser(){

   let  reply = READLINE.question("What do you want to do?  >>  ")

    return reply
}

function checkAnswer(input){

    console.log("checking input :  " +  input)

    inputMsg = input

//GO
        if(inputMsg.includes("go")){

            //split the string into two arguments

            let msgArray  = inputMsg.split(" ")
            let newRoom = msgArray[1] //get the second element

             console.log(" user typed go to " + newRoom)

             if(currentRoom.paths.includes(newRoom)){

                console.log("Yes you can go there")

                //find the room that has that "key" newRoom as a property

                for (room of rooms){  //Make challenge!!!!

                    if(room.name.toLowerCase() == newRoom.toLowerCase()){

                        //set the current room by grabbing its index
                        let index = rooms.indexOf(room)

                        currentRoom = rooms[index]
                        console.log("You are now at the : " + currentRoom.name);
                       
                    }
                }

             } else {

                console.log("No you can't go there")
             }
 //LOOK          
        } else if(inputMsg.includes("look")){
            //loop through all the objects and paths and print them out so user can see options

            console.log("You see the following: ") 

            for(object of currentRoom.objects){
        
                console.log(" -  " + object)
            }

            console.log("From here you can go to: ")

            for(path of currentRoom.paths){
                console.log(" - " + path)

            }
//TAKE
        } else if(inputMsg.includes("take")){

            console.log("Taking item...")

            let itemsArray  = inputMsg.split(" ")
            let itemToTake = itemsArray[1] //get the second element

            //check to see if it is part of the room's inventory..

            if(currentRoom.objects.includes(itemToTake)){

                console.log("Yes you can take this item: " + itemToTake)
                player.items.push(itemToTake) //add to the players items array

                //remove from room
                let indexToRemove = currentRoom.objects.indexOf(itemToTake)

                currentRoom.objects.splice(indexToRemove, 1)

                //console.log("current room items after taking item " + currentRoom.objects)
                console.log("player has : " + player.items)

            } else {
                console.log("No you can't pick that up")

            }
//Name
        } else  if (inputMsg.includes("name")){
    
            console.log( currentRoom.name);

        }  else if (inputMsg.includes("help")){
    
            console.log(" You can type 'look' to look around and 'go' to follow a path.")
            
        } else if (inputMsg == ""){

            console.log(" input: " + inputMsg)
             
            inputMsg = READLINE.question("What do you want to do? You can type 'help' for commands to use >>> ");
        } else {

            console.log(" I don't understand that")
        }
    
}

start()
