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




// ********************************************************
// ****************** HELPER FUNCTIONS ********************
// ********************************************************

// Rather than just a variable, we turned the diceRoll into a function (a complex variable) that takes a side
const diceRoll = (sides=6) => {
   return Math.floor( Math.random() * sides ) + 1;
}

const historyOfOneNumber = (roll) => {
   return `<li>${roll}: ${history[roll-1]} times</li>`;
}

const printAllRollStats = () => {

   const $rollStats = document.getElementById(`rollStats`);

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




// ********************************************************
// ******************* APPLIATION CODE ********************
// ********************************************************


// Roll the dice once, store the value
const diceFace = diceRoll();

$rollNum.innerHTML = `You rolled: ${diceFace}`;
$rollImg.innerHTML = `<img src="img/dice${diceFace}.svg">`;

printAllRollStats();
// printAllRollStats()
//    for-loop
//       historyOfOneNumber(1)
//          history[1-1]
//       historyOfOneNumber(2)
//          history[2-1]
//       historyOfOneNumber(3)
//          history[3-1]
//       historyOfOneNumber(4)
//          history[4-1]
//       historyOfOneNumber(5)
//          history[5-1]
//       historyOfOneNumber(6)
//          history[6-1]
//    loop-done!
// function-done!


