let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userscorePara = document.querySelector('#user-score');
const compscorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIndex = Math.floor(Math.random() * options.length);
    return options[randIndex];
};

const drawGame = () => {
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = '#f59e0b';
};

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = 'You Win!';
        msg.style.backgroundColor = 'green';
        userScore++;
        userscorePara.innerText = userScore;
    } else {
        msg.innerText = 'Computer Wins!';
        msg.style.backgroundColor = 'red';
        compScore++;
        compscorePara.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin = true;

    if (userChoice === 'rock') {
        userWin = compChoice === 'paper' ? false : true;
    } else if (userChoice === 'paper') {
        userWin = compChoice === 'scissors' ? false : true;
    } else {
        userWin = compChoice === 'rock' ? false : true;
    }

    showWinner(userWin);
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});