let numRight = 0,
    numWrong = 0,
    numUnans = 10,
    endGameMsg,
    chosenAnswers = [],
    rightAns = [],
    wrongAns = [],
    count = 45;


const countdown = _ => {
    count--
    count === -1 ? clearInterval(gameCountdown) : document.querySelector(`#gameTimer`).innerHTML = `Time Remaining: ${count} Seconds`

}

const answerTotals = _ => {
    chosenAnswers.push(document.querySelector('input[name=qOneAns]:checked').value)
    chosenAnswers.push(document.querySelector('input[name=qTwoAns]:checked').value)
    chosenAnswers.push(document.querySelector('input[name=qThreeAns]:checked').value)
    chosenAnswers.push(document.querySelector('input[name=qFourAns]:checked').value)
    chosenAnswers.push(document.querySelector('input[name=qFiveAns]:checked').value)
    chosenAnswers.push(document.querySelector('input[name=qSixAns]:checked').value)
    chosenAnswers.push(document.querySelector('input[name=qSevenAns]:checked').value)
    chosenAnswers.push(document.querySelector('input[name=qEightAns]:checked').value)
    chosenAnswers.push(document.querySelector('input[name=qNineAns]:checked').value)
    chosenAnswers.push(document.querySelector('input[name=qTenAns]:checked').value)
    for (let i = 0; i < chosenAnswers.length; i++) {
        if (chosenAnswers[i] === `right`) {
            numRight++
        } else if (chosenAnswers[i] === `wrong`) {
            numWrong++
        }
    }
    console.log(chosenAnswers)
    console.log(numRight)
    console.log(numWrong)
    console.log(numUnans -= (numRight + numWrong))
}

const gameEnd = _ => {
    clearTimeout(gameTime)
    alert(`Time's Up!`)
    answerTotals()
}

// grabbing chosen answer value for one question
// document.querySelector('input[name=qOneAns]:checked').value


const gameCountdown = setInterval(countdown, 1000)
const gameTime = setTimeout(gameEnd, 46000)


