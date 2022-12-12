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
 * @returns if the player wins or loses or there is a draw
 */
function playRound (playerSelection, computerSelection) {
  // to make it case sensitive we need to convert our selections to lower case
  const updatedPS = playerSelection.toLowerCase()
  const updatedCS = computerSelection.toLowerCase()

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
