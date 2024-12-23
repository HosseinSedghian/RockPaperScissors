let score = {
    wins: 0,
    losses: 0,
    ties: 0
}
const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
    score = savedScore;
}
updateScoreElement();

function makeMove (userMove) {
    const randomNumber = Math.random();
    let computerMove;
    const resultElement = document.querySelector('.js-result');

    if (randomNumber < (1/3)) {
        computerMove = 'rock';
    }
    if (randomNumber >= (1/3) && randomNumber < (2/3)) {
        computerMove = 'paper';
    }
    if (randomNumber >= (2/3)) {
        computerMove = 'scissors';
    }

    if (userMove === 'rock') {
        switch (computerMove) {
            case 'rock': {
                score.ties = score.ties + 1;
                resultElement.innerHTML = 'Tie.'
                break;
            }
            case 'paper': {
                score.losses = score.losses + 1;
                resultElement.innerHTML = 'You lose.'
                break;
            }
            case 'scissors': {
                score.wins = score.wins + 1;
                resultElement.innerHTML = 'You Win.'
                break;
            }
        }
    }
    if (userMove === 'paper') {
        switch (computerMove) {
            case 'rock': {
                score.wins = score.wins + 1;
                resultElement.innerHTML = 'You Win.'
                break;
            }
            case 'paper': {
                score.ties = score.ties + 1;
                resultElement.innerHTML = 'Tie.'
                break;
            }
            case 'scissors': {
                score.losses = score.losses + 1;
                resultElement.innerHTML = 'You lose.'
                break;
            }
        }
    }
    if (userMove === 'scissors') {
        switch (computerMove) {
            case 'rock': {
                score.losses = score.losses + 1;
                resultElement.innerHTML = 'You lose.'
                break;
            }
            case 'paper': {
                score.wins = score.wins + 1;
                resultElement.innerHTML = 'You Win.'
                break;
            }
            case 'scissors': {
                score.ties = score.ties + 1;
                resultElement.innerHTML = 'Tie.'
                break;
            }
        }
    }
    const moveChosen = document.querySelector('.js-moves-chosen');
    moveChosen.innerHTML = `
    You
    <img src="images/${userMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer
    `;
    updateScoreElement();
    localStorage.setItem('score', JSON.stringify(score));
}
function updateScoreElement() {
    const scoreElement = document.querySelector('.js-score');
    scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`
}
function resetScore() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
    updateScoreElement();
    localStorage.removeItem('score');
}