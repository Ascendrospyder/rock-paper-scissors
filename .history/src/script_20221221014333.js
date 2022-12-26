
/**
 * The following function will utilise the generating a random number,
 * and then assign a choice to that number
 * @returns either rock, paper or scissors at random
 */
function getComputerChoice () {
  // the following will generate a random number between 0 and 2
  const result = Math.floor(Math.random() * 3)

  // we will then assign numbers with their associated
  // return values
  if (result === 0) {
    return 'Rock'
  } else if (result === 1) {
    return 'Scissors'
  } else {
    return 'Paper'
  }
}

/**
 * The following function basically emulates one round of rock paper and scissors
 * @param {*} playerSelection
 * @param {*} computerSelection
 * @param {*} scoreCount
 * @returns if the player wins or loses or there is a draw
 */
function playRound (playerSelection, computerSelection) {
  // to make it case sensitive we need to convert our selections to lower case
  const updatedPS = playerSelection.toString().toLowerCase()
  const updatedCS = computerSelection.toString().toLowerCase()
  // console.log(score);
  // then we will utilise some conditionals to check if the player has drawn, won or lost against
  // the computer
  if (updatedPS === updatedCS) {
    return 'Draw! Player selected ' + playerSelection + ' and computer selected ' + computerSelection + ' select again!'
  } else if ((updatedPS === 'rock' && updatedCS === 'scissors') || (updatedPS === 'paper' && updatedCS === 'rock') || (updatedPS === 'scissors' && updatedCS === 'paper')) {
    return 'You Win! ' + playerSelection + ' beats ' + computerSelection
  } else {
    return 'You Lose! ' + computerSelection + ' beats ' + playerSelection
  }
}

/**
 * The following function takes in a string and a score and checks
 * if the string contains the prompt, then it updates the score accordingly
 * keep in mind this utilises a negative score system as well
 * @param {*} resultString
 * @param {*} score
 * @returns - desired score of the player
 */
function updateScores (resultString, score) {
  if (resultString.includes('Draw!')) {
    return score
  } else if (resultString.includes('You Win!')) {
    return score + 1
  } else {
    return score - 1
  }
}

/**
 * The following function acts as the main function to play the game
 */
function game () {
  // keep track of a score
  
}
