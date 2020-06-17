import React, { Component } from 'react';

// components
import Title from './components/title';
import GameOver from './components/gameover';
import Flag from './components/flag';
import Heart from './components/heart';

// methods
import start from './methods/start';
import reveal from './methods/revealAnswer';
import proceed from './methods/pass';
import evaluate from './methods/evaluate';

// containers
import Status from './containers/stats';
import Buttons from './containers/buttons';
import Answer from './containers/answer';
import Choices from './containers/choices';



// for my future me, future additions
// 2. point system
//        - specific will give specific class (such as Diplomat for 50 - 60 points)
//        - display message that "we hope user did not googled the answers"
// 5. DONE === quit button
// 6. needs styling - quit button ends the game and shows GAMEOVER and the correct/incorrect answers
// 7. use howler.js to add music upon hitting start
// 9. incorrectAnswer might give you duplicate countries as well, use map instead
// 9. timer for each question
    // -- score will be depending on the duration
    // -- when time reaches 0 its already incorrect (call pass instead)
// 10. display other information beign fetched from the server

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
    .then(data => {return data.json()})
    .then(data => {this.setState({countries: data})})
  }

  // STARTS THE GAME
  setChoices = () => {
    start(this)
  }

  // PASS: REVEAL ANSWER
  revealAnswer = () => {
    reveal(this)
  }

  // PASS: PROCEED TO NEXT QUESTION
  nextQuestion = () => {
    proceed(this)
  }

  // SET CHOSEN ANSWER
  chosenAnswer = e => {
    this.setState({userAnswer: e.target.value})
  }

  // EVALUATE ANSWER
  checkAnswer = () => {
    evaluate(this)
  }

  // QUIT
  endGame = () => {
    this.setState({gameOver: true})
  }

  render() {
    const {
      countries, choices, start,
      gameOver, answer, passed,
      answered, correct, lives, score,
      incorrectAnswer, correctAnswer } = this.state;
    const [ answerName, answerImg ] = answer
    const flagImg = Flag( answerImg )
    const hearts = Array(lives).fill().map((heart, i) => (<Heart key={i}/>))

    if ( gameOver === false ) {
      if ( lives !== 0  ) {
      return (

      <div className="gameContainer">

        <Title />

        <Status start={start} score={score} hearts={hearts} lives={lives} />

        <div className="gameNavigation">

          {( start ) ? flagImg : null }

          <Buttons
            start={start} passed={passed}
            answered={answered} setChoices={this.setChoices}
            revealAnswer={this.revealAnswer} nextQuestion={this.nextQuestion}
            checkAnswer={this.checkAnswer} endGame={this.endGame}
          />

          <Answer
            answerName={answerName} passed={passed}
            answered={answered} correct={correct}
            start={start} countries={countries}
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
          message="Give yourself a chance"
          incorrectAnswer={incorrectAnswer}
          correctAnswer={correctAnswer}
        />
      )

    }
  }
}

export default GuessTheCountry;