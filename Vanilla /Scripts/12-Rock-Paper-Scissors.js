
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties:0
} 


let computerMove = ''
let result = ''
let isAutoPlaying = false;
let interval;
function resulted(){
    document.querySelector('p.result').innerHTML = result
}

document.querySelector('.js-rock').addEventListener('click', () => PlayGame('Rock'));
document.querySelector('.js-paper').addEventListener('click', () => PlayGame('Paper'));
document.querySelector('.js-scissors').addEventListener('click', () => PlayGame('Scissors'));
document.querySelector('.js-reset-score').addEventListener('click', () => resetScore());
document.querySelector('.js-auto-play').addEventListener('click', () => autoPlay());
document.body.addEventListener('keydown', event => {
    if(event.key === 'r'){
      PlayGame('Rock')  
    } else if(event.key === 'p'){
        PlayGame('Paper')
    }else if(event.key === 's'){
        PlayGame('Scissors')
    }
})

function PlayGame(PlayerMove){
    pickComputerMove()
    document.querySelector('.reset').innerHTML = ''

    if(PlayerMove === 'Rock'){

    if(computerMove === 'Rock'){
        result = 'Tie'
        resulted()
        ourMoves()
    } else if(computerMove === 'Paper'){
        result = 'You Lose'
        resulted()
        ourMoves()
    } else if(computerMove === 'Scissors'){
        result = 'You Win'
        resulted()
        ourMoves()
        
    }


    } else if (PlayerMove === 'Paper'){

    if(computerMove === 'Rock'){
        result = 'You Win'
        resulted()
        ourMoves()
    } else if(computerMove === 'Paper'){
        result = 'Tie'
        resulted()
        ourMoves()
    } else if(computerMove === 'Scissors'){
        result = 'You Lose'
        resulted()
        ourMoves()
    }

    } else if(PlayerMove === 'Scissors'){

    if(computerMove === 'Rock'){
        result = 'You Lose'
        resulted()
        ourMoves()
    } else if(computerMove === 'Paper'){
        result = 'You Win'
        resulted()
        ourMoves()
    } else if(computerMove === 'Scissors'){
        result = 'Tie'
        resulted()
        ourMoves()
    }
    }

    if(result ==='You Win'){
        score.wins += 1
    }else if(result === 'You Lose'){
        score.losses += 1
    }else if(result === 'Tie'){
        score.ties += 1
    }

    localStorage.setItem('score', JSON.stringify(score))

    showScore();

    function ourMoves(){
    document.querySelector('p.moves').innerHTML = `You
        <img src="images/${PlayerMove}-emoji.png" alt="">
        <img src="images/${computerMove}-emoji.png" alt=""> 
        Computer`
    }
}
function pickComputerMove() {
    const RandomNumber = Math.random();

    if(RandomNumber >= 0 && RandomNumber < 1 / 3){
        computerMove = 'Rock'
        console.log(computerMove)

    } else if(RandomNumber >= 1 / 3 && RandomNumber < 2 / 3){
        computerMove = 'Paper'
        console.log(computerMove)
    } else if(RandomNumber >= 2 / 3 && RandomNumber < 1) {
        computerMove = 'Scissors'
        console.log(computerMove)
    }
}

function showScore(){
    document.querySelector('p.score')
        .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`
}
function resetScore(){
    score = {
    wins: 0,
    losses: 0,
    ties:0
} 
    document.querySelector('p.score')
        .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`
        document.querySelector('.result').innerHTML = ''
    document.querySelector('.moves').innerHTML = ''
        document.querySelector('.reset').innerHTML = 'Score was reset'
}


function autoPlay(){
    if(!isAutoPlaying){
            interval = setInterval(
        () => {
                const RandomNumber = Math.random();

                let PlayerMove;

                if(RandomNumber >= 0 && RandomNumber < 1 / 3){
                    PlayerMove = 'Rock'

                } else if(RandomNumber >= 1 / 3 && RandomNumber < 2 / 3){
                    PlayerMove = 'Paper'
                } else if(RandomNumber >= 2 / 3 && RandomNumber < 1) {
                    PlayerMove = 'Scissors'
                }
            PlayGame(PlayerMove);
        },1000);
        isAutoPlaying = true
    }else{
        clearInterval(interval);
        isAutoPlaying = false
    }

    
}
