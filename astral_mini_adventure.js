//----------------------------
//make sure to add this to your package in the shell:  $npm install readline-sync

const READLINE = require("readline-sync");

//*********************** VARIABLES ****************************
let inputMsg ="" //an empty string to hold our user inputs
let gameStatus = true
let currentRoom = null
let rooms = []
let items =[]


//******************** DEFINE CLASSES  ********************
  class Room {

     constructor(name, description, objects, npcs,paths, visited, key) {
        this.name = name
        this.description = description
        this.objects = objects
        this.npcs =npcs
        this.paths = paths
        this.visited = visited
        this.key = key



      }
  }

  class Player {
    constructor(name, items, lives) {
        this.name =name
        this.items = items
        this.lives = lives
    }
  }

   class Item {

      constructor(name, type, description,  location,  powerLvl, specialPower ) {

         this.name = name
         this.type = type
         this.location = location
         this.powerLvl = powerLvl
         this.description = description
         this.specialPower = specialPower
         //can make power or an array of things to do with it
      }
    }

  let player = new Player()
  player.name = null
  player.items = []
  player.lives = 5;

 //******************** START GAME ************************
function start() {


    console.log("Welcome to ....\n");
        console.log(`\n
    ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄ 
    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌
    ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ 
    ▐░▌       ▐░▌▐░▌               ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          
    ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ 
    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌
    ▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌           ▀▀▀▀▀▀▀▀▀█░▌
    ▐░▌       ▐░▌          ▐░▌     ▐░▌     ▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌                    ▐░▌
    ▐░▌       ▐░▌ ▄▄▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░▌      ▐░▌ ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌
    ▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
     ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
\n
                         ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄ 
                        ▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌
                        ▐░▌░▌   ▐░▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌ ▀▀▀▀█░█▀▀▀▀ 
                        ▐░▌▐░▌ ▐░▌▐░▌     ▐░▌     ▐░▌▐░▌    ▐░▌     ▐░▌     
                        ▐░▌ ▐░▐░▌ ▐░▌     ▐░▌     ▐░▌ ▐░▌   ▐░▌     ▐░▌     
                        ▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░▌  ▐░▌  ▐░▌     ▐░▌     
                        ▐░▌   ▀   ▐░▌     ▐░▌     ▐░▌   ▐░▌ ▐░▌     ▐░▌     
                        ▐░▌       ▐░▌     ▐░▌     ▐░▌    ▐░▌▐░▌     ▐░▌     
                        ▐░▌       ▐░▌ ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌ ▄▄▄▄█░█▄▄▄▄ 
                        ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌
                         ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
\n
▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄  ▄               ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░░░░░░░░░░▌▐░▌             ▐░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌           ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌     ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ 
▐░▌       ▐░▌▐░▌       ▐░▌ ▐░▌         ▐░▌  ▐░▌          ▐░▌▐░▌    ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          
▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌  ▐░▌       ▐░▌   ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌   ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░▌       ▐░▌   ▐░▌     ▐░▌    ▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌    ▐░▌   ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▐░▌ ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀▀▀ 
▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌ ▐░▌      ▐░▌          ▐░▌    ▐░▌▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌          
▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌      ▐░▐░▌       ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌     ▐░▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄▄▄ 
▐░▌       ▐░▌▐░░░░░░░░░░▌        ▐░▌        ▐░░░░░░░░░░░▌▐░▌      ▐░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌
 ▀         ▀  ▀▀▀▀▀▀▀▀▀▀          ▀          ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀ `);


    let name = READLINE.question("What is your name, player? ");
    player.name = name;
    console.log("Welcome, " + name + `.\n` + "Today, you will be playing in the role of Astral. You will be going around ");
    console.log("different areas or floors to make your way back to the bedroom.");
    console.log("Along the way, there would be object to help you. Each ");
    console.log("time you go to a different area, be prepared to answer questions. Each time ");
    console.log("you get it wrong, you lose one live, you have in total of 5. Don't worry too");
    console.log("much, the questions are fairly easy. Just random facts about me, the creator.");
    console.log("You can type [help] to learn how to play");

   //begin at the garden 
    currentRoom = garden

    console.log(`You are in a: ${currentRoom.name}. and everything looks normal. The air smells like death`)

    while(gameStatus){

        checkAnswer(promptUser()) //this makes the game continously prompt and check response

    }
}

function promptUser(){

   let  reply = READLINE.question(`${player.name}, what do you want to do?  >> \n `)

    return reply
}

//******************** HANDLE THE PLAYER INPUT ******************/
function checkAnswer(input){

   // inputMsg = input;

    input = input.split(" ")
    command = input.splice(0,1)
    inputMsg = input.join(" "); //put it back together


//GO
        if(command.includes("go")){

            //split the string in two

            let msgArray  = inputMsg.split(" ") //TODO: use splice...
            let newRoom = inputMsg;

            console.log("trying to go to: " + newRoom)

             if(currentRoom.paths.includes(newRoom)){

                console.log("Current room includes the room : " + newRoom)
                //find the room that has that "key" newRoom as a property

                for (room of rooms){



                    if(room.name.toLowerCase() == newRoom.toLowerCase() ){

                        //set the current room by grabbing its index

                        //check if the player has the key!
                        if(room.key==null ||   player.objects.includes(room.key) ){


                            //************ we are in the room finally because it's not locked */

                            let index = rooms.indexOf(room) //get the index of the room
                            currentRoom = rooms[index]

                            //print room info
                            console.log("You are now at the : " + currentRoom.name);
                            console.log("this room has : " + currentRoom.objects)
                            console.log(currentRoom.description)
                            currentRoom.visited = true

                        }
                        if(room.key !=null) {

                            console.log("This room is locked! It looks like you need to find a special key")
                        }


                    }
                }

             } else {

                console.log("No, you can't go there")
             }


        } else if(command.includes("look")){
 //LOOK
            //loop through all the objects and paths and print them out so user can see options
            console.log("------ LOOK ----------\n")
            console.log("You see the following: ")

            for(object of currentRoom.objects){

                console.log(" -  " + object)
            }

            console.log("From here you can go to: ")

            for(path of currentRoom.paths){
                console.log(" - " + path)

            }
            console.log("---------------------\n")
//TAKE
        } else if(command.includes("take")){
            console.log("------TAKE----------\n")

           // let itemsArray  = inputMsg.split(" ")
            let itemToTake = inputMsg
            //check to see if it is part of the room's inventory..

            if(currentRoom.objects.includes(itemToTake)){

                console.log("Yes you can take this item: " + itemToTake)
                player.items.push(itemToTake) //add to the players items array

                //remove from room
                let indexToRemove = currentRoom.objects.indexOf(itemToTake)

                currentRoom.objects.splice(indexToRemove, 1)

                console.log("player has : " + player.items)

            } else {
                console.log("No you can't pick that up")

            }
            console.log("---------------------\n")
//ROOM
        } else if (command.includes("room")){

            console.log("-------ROOM----------\n")
            console.log( "You are in " + currentRoom.name);
            console.log("---------------------")
//INVENTORY
        }  else if (command.includes("inventory")){
            console.log("--------INVENTORY----------\n")
            console.log("You have the following items: ")
            for(item of player.items){

                console.log(item)
            }
            console.log("---------------------")

//HELP
        } else if (command.includes("help")){
            console.log("---------HELP-------\n")
            console.log("Here are some commands you can type:")
            console.log(" - 'look' to look around. \n - 'go' followed by the name of the room or area you want to walk to. \n - 'take' to add objects to your inventory. ")
            console.log("---------------------")


        } else if (command == ""){

            console.log(" input: " + inputMsg)

            inputMsg = READLINE.question("What do you want to do? You can type 'help' for commands to use >>> ");
        } else {

            console.log(" I don't understand that")
        }

}




//************* Make Rooms *************************/

let garden = new Room();
garden.name = "garden";
garden.description = garden.description1 = `
                   【𝔾𝔸ℝ𝔻𝔼ℕ】
 ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
 You are in the garden. There is currently rain,
 but it's weird because it is raining only on
 your house.. You don't know what to do. After,
 thinking for a few minutes, you looked around 
 for any object you can use at the moment.
 ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`;
garden.objects = ["bushes", "black object", "key" , "flowers", "mailbox"];
garden.paths = ["front steps", "back door"];
garden.npcs = [];
garden.visited = false;
garden.key = null;

let frontSteps = new Room();
frontSteps.name = "front steps";
frontSteps.description = `
                   【𝔽ℝ𝕆ℕ𝕋 𝕊𝕋𝔼ℙ𝕊】
 ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
 You are at the front steps of your house. 
 There's nothing to do now just proceed to other 
 rooms of your house please..
 ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`;
frontSteps.objects = ["bushes", "black object", "key" , "flowers", "mailbox"];
frontSteps.paths = ["porch", "back door"];
frontSteps.npcs = [];
frontSteps.visited = false;
frontSteps.key = null;

let backDoor = new Room();
backDoor.name = "back door";
backDoor.description = `
                  【𝔹𝔸ℂ𝕂 𝔻𝕆𝕆ℝ】
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
You are now at the back door of your own house,
there not much you can do here..There isn't 
any object to use here.. So what are you
planning to do..
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`
backDoor.objects = ["bushes", "flowers", "garbage cans"];
backDoor.paths = ["garden", "kitchen"];
backDoor.ncps = [];
backDoor.visited = false;
backDoor.key = null;

let kitchen = new Room();
kitchen.name = "kitchen";
kitchen.description = `
                    【𝕂𝕀𝕋ℂℍ𝔼ℕ】                     
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
You are now at the kitchen. There are nothing 
you can do here much, just still like a few 
steps closer to the bedroom...
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`;
kitchen.objects =["knife", "plate", "fork", "spoon" , "napkin"];
kitchen.paths = ["living room" , "front steps" , "backyard"];
kitchen.ncps = [];
kitchen.visited = false;
kitchen.key = null;

let livingRoom = new Room();
livingRoom.name = "living room"
livingRoom.description = `
                  【𝕃𝕀𝕍𝕀ℕ𝔾 ℝ𝕆𝕆𝕄】
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
You are now in the living room. Again, there's
legit nothing to do here, just like the second 
to last place before going to the bedroom...
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`;
livingRoom.objects = ["forearm" , "lamp", "book", "chair"];
livingRoom.paths =["garden", "stairs"];
livingRoom.ncps = [];
livingRoom.visited = false;
livingRoom.key = null;

let stairs = new Room();
stairs.name= "stairs";
stairs.description = `
                    【𝕊𝕋𝔸𝕀ℝ𝕊】
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
You are now on the stairs. You see there's a 
lot of family potraits and portraits of you 
graduating in Kindergarten and other grades.
This is your last stop before heading to the
bedroom...
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`;
stairs.objects = ["family portraits", "graduation portraits"];
stairs.paths =["living room", "bedroom"]
stairs.ncps = [];
stairs.visited = false;
stairs.key = null;

let astralBedroom = new Room();
astralBedroom.name = "bedroom";
astralBedroom.description = astralBedroom.description1 = `
              【𝔸𝕊𝕋ℝ𝔸𝕃'𝕊 𝔹𝔼𝔻ℝ𝕆𝕆𝕄】  
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
OMG!!! You finally made it to the bedroom.
Heh..Funny story you were in your bed the whole
time..You were just stuck in your own dream for
this game..heh..sorry 😢
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`;
astralBedroom.objects = ["balloons", "confetti"];
astralBedroom.paths = ["stairs"];
astralBedroom.ncps = [];
astralBedroom.visited = false;
astralBedroom.key = null;

rooms.push(garden, backDoor, kitchen, livingRoom, stairs, astralBedroom) // use to add the rooms to the rooms array

 //************* Make Items *************************/

 let blackCase = new Item()
 blackCase.name = "blackCase";
 blackCase.description = blackCase.description1 =  `
             【𝔹𝕃𝔸ℂ𝕂 ℂ𝔸𝕊𝔼】
 ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
 You look at the black case. You see a
 simple latch. You have a choice to
 either keep it on the ground or to
 pick it up...What do you you choose???
 ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄`;
 blackCase.location = "garden";
 blackCase.type = "case";
 blackCase.specialPower = "For protection";

 let key = new Item()
 key.name = "key"
 key.description = `
                【𝕂𝔼𝕐】
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
 key.location = "garden";
 key.type = "case";
 blackCase.specialPower = "Unlock bedroom";

for (room in rooms) {

    if(key.location == astralBedroom.name) {

        room.objects.push(key.name)
    }
}

start()
