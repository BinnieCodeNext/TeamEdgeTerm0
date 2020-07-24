const READLINE = require("readline-sync")
let gameIsOn = true
let inputMsg =""
let currentRoom = null
let rooms = []



function start(){
   console.log("what is you name Player");
   let name = READLINE.question("What is your name, player? ")
   console.log("Welcome, " + name + `\n` + "You are an adventerer who is about to go on a important Journey, but first you must find all of your supplies. Find what you need in order to leave and begin you great Journey!");

   currentRoom = Bedroom

   console.log(`You are in your: ${currentRoom.name}. and you can't wait for your adventure.`)

   while(gameIsOn){
       checkAnswer(promptUser())
   }
}

class Room {

    constructor(name, description, objects, paths,locked,unlocked) {
       this.name = name;
       this.description = description;
       this.objects = objects;
       this.paths = paths;
       this.locked = locked;
       this.unlocked = unlocked;
     }
 }

 class Player {
   constructor(name, items){
       this.name =name
       this.items = items
   }
 }

 let player = new Player()
  player.name = null
  player.items = []


  let kitchen = new Room()
   kitchen.name = "Kitchen"
   kitchen.description = "The kitchen is a little dusty from your time spent away on your other adventures. It seems you may have to clean up when you get back."
   kitchen.objects =["match", "sandwich", "water"]
   kitchen.paths=["Entry Hall" , "Trophy room" ]
   islocked = false
   isunlocked = true

   let Trophyroom = new Room()
   Trophyroom.name= "Trophy room"
   Trophyroom.description ="You are in your Trophy room. You see all the various items and treasures that you have proquered in you travels. "
   Trophyroom.objects = ["sword" , "candle"]
   Trophyroom.paths =["Kitchen"]
   islocked = false
   isunlocked = true

   let Entryhall = new Room()
   Entryhall.name= "Entry Hall"
   Entryhall.description ="The hall is quite large and welcoming for those who enter, but you can't wait for what lies beyond the door. "
   Entryhall.objects = []
   Entryhall.paths =["Kitchen", "Library", "Bedroom"]
   islocked = false
   isunlocked = true

   let Library = new Room()
   Library.name= "Library"
   Library.description ="Your have collected thousands of books, from various merchents, and now you have quite the collection of knowledge."
   Library.objects = ["key" , "map"]
   Library.paths =["Entry Hall", "Living room"]
   islocked = false
   isunlocked = true

   let Livingroom = new Room()
   Livingroom.name= "Living room"
   Livingroom.description ="This room was specifically made so that you can enjoy relexation from when you require a break from adventures. "
   Livingroom.objects = ["Journal"]
   Livingroom.paths =["Kitchen"]
   islocked = false
   isunlocked = true

   let Bedroom = new Room()
   Bedroom.name= "Bedroom"
   Bedroom.description ="Your room is very bare and simple, after all you don't sleep at home much "
   Bedroom.objects = []
   Bedroom.paths =["Entry Hall", "Attic", "Treasure room"]
   islocked = false
   isunlocked = true

   let Treasureroom = new Room()
   Treasureroom.name= "Treasure room"
   Treasureroom.description ="The room is scattered with many valuable items and wealth from all your travels. "
   Treasureroom.objects = ["pouch of gold"]
   Treasureroom.paths =["Bedroom"]
   islocked = true
   isunlocked = false

   let Attic = new Room()
   Attic.name= "Attic"
   Attic.description ="You have stored a lot of junk that was in the way and you feel very weird when you are in the space. "
   Attic.objects = ["armour", "key to Treasure room"]
   Attic.paths =["Bedroom"]
   islocked = false
   isunlocked = true


rooms.push(kitchen, Trophyroom, Entryhall, Library, Livingroom, Bedroom, Treasureroom, Attic)


function promptUser(){
    let  reply = READLINE.question("What do you want to do?  >>  ")
    return reply
}

function checkAnswer(input){
    console.log("checking input :  " +  input)

    inputMsg = input

    if(inputMsg.includes("help")){

        console.log("Here are some commands you can try: help, look, take, go, end")

        }else if(inputMsg.includes("end")){

        gameIsOn =false
        console.log("Thank you for playing, goodbye!")

        }

    else if(inputMsg.includes("go")){
        let msgArray  = inputMsg.split(" ")
            let newRoom = msgArray[1]

             console.log("you typed go to"  + newRoom)

          if(currentRoom.paths.includes(newRoom)){

                console.log("Yes you may enter there")

             for (room of rooms){
                 if(room.name.toLowerCase() == newRoom.toLowerCase()){

                let index = rooms.indexOf(room)

                currentRoom = rooms[index]
                console.log("You are now at the : " + currentRoom.name);

            }
        }
    } else {
        console.log("No you can't go there")
     }

    } else if(inputMsg.includes("look")){
        console.log("You see the following: ")

        for(object of currentRoom.objects){
         console.log(" -  " + object)
        }

        console.log("From here you can go to: ")

        for(path of currentRoom.paths){
            console.log(" - " + path)

        }

    } else if(inputMsg.includes("take")){

        console.log("Taking item...")

        let itemsArray  = inputMsg.split(" ")
        let itemToTake = itemsArray[1]

         if(currentRoom.objects.includes(itemToTake)){

            console.log("Yes you can take this item: " + itemToTake)
            player.items.push(itemToTake)

            let indexToRemove = currentRoom.objects.indexOf(itemToTake)
            currentRoom.objects.splice(indexToRemove,1)
                console.log("player has : " + player.items)



        }else {
            console.log("No you can't pick that up")
        }



     }

}
start()
