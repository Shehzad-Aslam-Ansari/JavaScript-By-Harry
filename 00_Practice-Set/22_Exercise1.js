/*
// Exercise 1: Guess the number
// Prize Amount: Rs 500 Amazon voucher
let number = 0 // Generate random number here
let chances = 0
// Keep asking for the number until the correct number is guessed
// Increment the chances variable

// Eventually after the game is over, display the (100 - Number of chances) and the actual number 
*/

let randomNum = Math.floor((Math.random() * 100) + 1);
console.log(randomNum)
let chanceleft = 100;
let input

while (input != randomNum) {
  chanceleft = chanceleft - 1
  input = Number.parseInt(prompt("Guess the correct Number between (1 - 100): "));
  if (input == randomNum) {
    console.log("Congrat's! You have guessed the correct number");
    console.log(`You have guessed correct number in ${100 - chanceleft} Chances.`)
  }
  else if(input > randomNum && input < 100){
    console.log("Actual number is Lesser than your number");
  }
  else if(input < randomNum && input > 0){
    console.log("Actual number is Greater than your number");
  }
  else{
    console.log("Enter Number between 1 - 100")
  }
}
