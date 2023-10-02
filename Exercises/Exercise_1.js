/* Exercise 1- Guess the number.

Write a Java Script program to generate a a random number and store it in a variable. The program then takes from the user to tell them whether the Guess was Correct, greater or lesser than the original number. 
100 -(no of guesses) is the score of the user. The program is expected to terminate once the number is glossed. Number should be between 1-100 JavaScript 
*/

//generating random number
const randNum = Math.floor(Math.random() * 100);
console.log(randNum);

let chances = 0;
let guess;

while (true) {
  guess = parseInt(prompt("Enter a guess number between 1 && 100"));

  if (guess === randNum) {
    alert(
      `You've guessed it Successfully in ${chances} and your score is ${
        100 - chances
      }`
    );
    break;
  } else {
    if (guess > randNum) {
      alert("Too high, Try Again");
    } else {
      alert("Too low, Try Again");
    }
    //incrementing the number
    chances++;

    if (chances === 100) {
      alert(
        `Sorry, you have reached the maximum number of attempts. The correct number was ${randNum}.`
      );
      break; // Exit the loop if maximum attempts are reached
    }
  }
} //while end
