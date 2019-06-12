// ******************************************************
// *********************** DATA *************************
// ******************************************************


// const history = {
//    one: 0,
//    two: 0,
//    three: 0,
//    four: 0,
//    five: 0,
//    six: 0,
// }
                
// Roll #        1  2  3  4  5  6
// Index #       0  1  2  3  4  5
const history = [0, 0, 0, 0, 0, 0];
//const totalRolls = 0;



// ********************************************************
// ****************** HELPER FUNCTIONS ********************
// ********************************************************

// Rather than just a variable, we turned the diceRoll into a function (a complex variable) that takes a side
const diceRoll = (sides=6) => {
   return Math.floor( Math.random() * sides ) + 1;
}

// Get the instances of a roll for a given number
const historyOfOneNumber = (roll) => {

   // Accumulate the total number of rolls
   const totalRolls = history.reduce( (total, num) => total + num );
   const percentOfTotal = Math.round(history[roll-1] / totalRolls * 1000) / 10;

   return `<li>${roll}: ${history[roll-1]} times (${percentOfTotal}%)</li>`;
}

// Update the instances of a roll by +1 for a given number
const updateRollHistory = (roll) => {
   history[roll-1]++;
}


const printAllRollStats = () => {

   const $rollStats = document.getElementById(`rollStats`);

   $rollStats.innerHTML = ``;   

   for(let i = 1; i <= 6; i++) {
      $rollStats.innerHTML += historyOfOneNumber(i);
   }

   return true;
}



// ********************************************************
// ******************* DOM REFERENCES *********************
// ********************************************************


const $rollNum = document.getElementById(`rollNum`);
const $rollImg = document.getElementById(`rollImg`);
const $rollBtn = document.getElementById(`rollBtn`);



// ********************************************************
// ******************* APPLICATION CODE *******************
// ********************************************************


// Roll a die, update the DOM to show the result of the roll, when a user clicks the button
$rollBtn.addEventListener(`click`, (event) => {

   // Roll the dice once, store the value
   const diceFace = diceRoll();

   //totalRolls++;

   $rollNum.innerHTML = `You rolled: ${diceFace}`;
   $rollImg.innerHTML = `<img src="img/dice${diceFace}.svg">`;

   updateRollHistory(diceFace);

   printAllRollStats();

});


