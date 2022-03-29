let userName = window.prompt('Please enter your name:')
let userScore = 0

function playGame() {
    for(let i = 0; i < questions.length; i++) {
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
        if(userAnswer === question.correctAnswer) {
            userScore = userScore + 10
        }
    }
    window.alert('Your score is: '+userScore)
    let playAgain = window.prompt('Would you like to play again? Answe Yes or No.')
    if(playAgain === "Yes"){
        userScore = 0
        playGame()
    }else{
        window.alert("Goodbye!")
    }
}

playGame()