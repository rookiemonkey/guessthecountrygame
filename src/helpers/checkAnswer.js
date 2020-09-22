const checkAnswer = obj => {

  const stateCopy = Object.assign({}, obj.state)
  const { userAnswer, answer, lives, score, incorrectAnswer, correctAnswer, avoidDuplicate } = stateCopy
  const [country, flag] = answer

  if (userAnswer === country) {
    const incrementScore = score + 1
    const duplicates = avoidDuplicate.concat(country)
    const correctAnswers = correctAnswer.concat({ Country: country, Flag: flag })
    obj.setState({
      answered: true, correct: true,
      score: incrementScore, correctAnswer: correctAnswers,
      avoidDuplicate: duplicates
    });
  } else {
    const decrementLives = lives - 1
    const wrongAnswers = incorrectAnswer.concat({ Country: country, Flag: flag })
    obj.setState({
      answered: true, correct: false,
      lives: decrementLives, incorrectAnswer: wrongAnswers
    });
  }

}

export default checkAnswer