//tried making objects for the player and computer just to solidify syntax, i know it should just be a let
//object for the player choice
const player = {
    currentChoice: null
  }
  const computer = {
    currentChoice: null
  }
  //create array to hold choices
  const choices = ["rock", "paper", "scissors"];
  //function to create random player choice between 3 choices, rock, paper, and scissors
  function playerChooses(){
    //choose a random index number from 0 to 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    //set player's choice to that random index
    player.currentChoice = choices[randomIndex];
  }
  //same function for computer's choice
  function computerChooses(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  }
  //compareChoice function
  function rockPaperScissors(){
    //have player and computer max random choices
    computerChooses();
    playerChooses();
    //if it's the same choice, tie
    if(computer.currentChoice === player.currentChoice){
      console.log("It's a tie! The computer and player both chose " + computer.currentChoice);
    //computer rock scenarios
    }else if(computer.currentChoice === choices[0]){
      if(player.currentChoice === choices[1]){
        console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }
    //computer paper scenarios
    }else if(computer.currentChoice === choices[1]){
      if(player.currentChoice === choices[2]){
        console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }
    //computer scissor scenarios
    }else if(computer.currentChoice === choices[2]){
      if(player.currentChoice === choices[0]){
        console.log("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        console.log("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }
    }
  }
  //play the game
  rockPaperScissors();