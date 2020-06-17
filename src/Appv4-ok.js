import React, { Component } from 'react';

// components
import Title from './components/title';
import GameOver from './components/gameover';
import Flag from './components/flag';
import Heart from './components/heart';

// methods
import start from './methods/start';

// containers
import Status from './containers/stats';
import Buttons from './containers/buttons';
import Answer from './containers/answer';
import Choices from './containers/choices';



// for my future me, future additions
// 1. DONE  === 10 lives
    // DONE === when reaches 0, game over screen
// 2. point system
//        - specific will give specific class (such as Diplomat for 50 - 60 points)
//        - display message that "we hope user did not googled the answers"
// 3. DONE  === save correct answers // array of obj (name/img)
// 4. DONE  === save incorrect answers // array of obj (name/img)
// 5. quit button
// 6. quit button ends the game and shows correct/incorrect answers
// 7. use howler.js to add music upon hitting start
// 8. DONE === avoid duplicate by stroting just the answer.countryname (regardless if right/wrong) to avoidDup array
    // DONE === modify setChoices to loop into avoidDupArray
// 9. incorrectAnswer might give you duplicate countries as well, use map instead
// 9. timer for each question
    // -- score will be depending on the duration
    // -- when time reaches 0 its already incorrect (call pass instead)

class GuessTheCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: "",
      choices: [],
      answer: [],
      start: false,
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
    const stateCopy = Object.assign({}, this.state)
    const { lives } = stateCopy
    const decrementLives = lives - 1
    this.setState({passed: true, choices: [], lives: decrementLives})
  }

  // PASS: PROCEED TO NEXT QUESTION
  nextQuestion = () => {
    this.setState({passed: false, answered: false, userAnswer: "", choices: []}, () => {
      this.setChoices()
    })
  }

  // SET CHOSEN ANSWER
  chosenAnswer = e => {
    this.setState({userAnswer: e.target.value})
  }

  // EVALUATE ANSWER
  checkAnswer = () => {
    const stateCopy = Object.assign({}, this.state)
    const {userAnswer, answer, lives, score, incorrectAnswer, correctAnswer, avoidDuplicate } = stateCopy
    const [ country, flag ] = answer

    if (userAnswer === country) {
      const incrementScore = score + 1
      const duplicates = avoidDuplicate.concat(country)
      const correctAnswers = correctAnswer.concat({Country: country, Flag: flag})
      this.setState({
        answered: true, correct:true,
        score: incrementScore, correctAnswer: correctAnswers,
        avoidDuplicate: duplicates
      });
    } else {
      const decrementLives = lives - 1
      const wrongAnswers = incorrectAnswer.concat({Country: country, Flag: flag})
      this.setState({
        answered: true, correct:false,
        lives: decrementLives, incorrectAnswer: wrongAnswers
      });
    }

  }

  render() {
    console.log("AFTER CALLING RENDER(): ", this.state)
    const { countries, choices, start, answer, passed, answered, correct, lives, score } = this.state;
    const [ answerName, answerImg ] = answer
    const flagImg = Flag( answerImg )
    const hearts = Array(lives).fill().map((heart, i) => (<Heart key={i}/>))


    if ( lives !== 0 ) {
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
            checkAnswer={this.checkAnswer}
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

      return (<GameOver />)

    }
  }
}

export default GuessTheCountry;