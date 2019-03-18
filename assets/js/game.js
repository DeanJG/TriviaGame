let numRight,
    numWrong,
    numUnAns,
    count = 45;


const countdown = _ => {
    count--
    count === -1 ? clearInterval(gameCountdown) : document.querySelector(`#gameTimer`).innerHTML = `Time Remaining: ${count} Seconds`

}
const gameEnd = _ => {
    alert(`Time's Up!`)
}

const gameCountdown = setInterval(countdown, 1000)
const gameTime = setTimeout(gameEnd, 46000)


