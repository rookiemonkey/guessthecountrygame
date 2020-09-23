import React, { Component } from 'react';

// components
import Title from './components/title';
import GameOver from './components/gameover';
import Flag from './components/flag';
import Heart from './components/heart';

// methods
import setGame from './helpers/setGame';
import revealAnswer from './helpers/revealAnswer';
import nextQuestion from './helpers/nextQuestion';
import checkAnswer from './helpers/checkAnswer';
import setBackgroundMusic from './helpers/setBackgroundMusic';

// containers
import Status from './containers/stats';
import Buttons from './containers/buttons';
import Answer from './containers/answer';
import Choices from './containers/choices';

class GuessTheCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: "",
      choices: [],
      answer: [],
      start: false,
      gameOver: false,
      passed: false,
      answered: false,
      correct: false,
      userAnswer: "",
      lives: 10,
      score: 0,
      avoidDuplicate: [],
      incorrectAnswer: [],
      correctAnswer: [],
    }
  }

  // API CALL
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(data => { return data.json() })
      .then(data => { this.setState({ countries: data }) })
  }

  // STARTS THE GAME
  setChoices = () => {
    setGame(this);
    setBackgroundMusic();
  }

  // PASS: REVEAL ANSWER
  revealAnswer = () => {
    revealAnswer(this)
  }

  // PASS: PROCEED TO NEXT QUESTION
  nextQuestion = () => {
    nextQuestion(this)
  }

  // SET CHOSEN ANSWER
  chosenAnswer = e => {
    this.setState({ userAnswer: e.target.value })
  }

  // EVALUATE ANSWER
  checkAnswer = () => {
    checkAnswer(this)
  }

  // QUIT
  endGame = () => {
    this.setState({ gameOver: true })
  }

  render() {
    const {
      countries, choices, start,
      gameOver, answer, passed,
      answered, correct, lives, score,
      incorrectAnswer, correctAnswer } = this.state;
    const [answerName, answerImg] = answer
    const flagImg = Flag(answerImg)
    const hearts = Array(lives)
      .fill()
      .map((heart, i) => (<Heart key={i} />))

    if (gameOver === false) {
      if (lives !== 0) {
        return (

          <div className="gameContainer">

            <Title />

            <Status start={start} score={score} hearts={hearts} lives={lives} />

            <div className="gameNavigation">

              <Buttons
                start={start} passed={passed}
                answered={answered} setChoices={this.setChoices}
                revealAnswer={this.revealAnswer} nextQuestion={this.nextQuestion}
                checkAnswer={this.checkAnswer} endGame={this.endGame}
              />

              {
                start && !answered
                  ? passed ? null : flagImg
                  : null
              }

              <Answer
                answerName={answerName} passed={passed}
                answered={answered} correct={correct}
                start={start} countries={countries}
                answer={answer}
              />

              <Choices
                choices={choices} start={start}
                answered={answered} passed={passed}
                chosenAnswer={this.chosenAnswer}
              />

            </div>

          </div>

        )

      } else {

        // when score reaches 0
        return (
          <GameOver
            message="You have no lives left"
            incorrectAnswer={incorrectAnswer}
            correctAnswer={correctAnswer}
          />
        )

      }

    } else {

      // when user quits
      return (
        <GameOver
          message=" "
          incorrectAnswer={incorrectAnswer}
          correctAnswer={correctAnswer}
        />
      )

    }
  }
}

export default GuessTheCountry;