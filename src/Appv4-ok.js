import React, { Component } from 'react';

// components
import Title from './components/title';
import Loading from './components/loading';
import GameStart from './components/start';
import GameOver from './components/gameover';
import RadioButton from './components/radioButtonv2';
import Flag from './components/flag';
import Pass from './components/pass';
import Proceed from './components/proceed';
import CheckAnswer from './components/checkAnswer';
import RevealAnswer from './components/answer';
import Heart from './components/heart';

// methods
import start from './methods/start';

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
// 8. DONE ===avoid duplicate by stroting just the answer.countryname (regardless if right/wrong) to avoidDup array
    // -- modify setChoices to loop into avoidDupArray
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
    const {userAnswer, answer, lives, score, incorrectAnswer, correctAnswer, avoidDuplicate} = stateCopy

    if (userAnswer === answer[0]) {
      const incrementScore = score + 1
      const duplicates = avoidDuplicate.concat(answer[0])
      const correctAnswers = correctAnswer.concat({Country: answer[0], Flag: answer[1]})
      this.setState({
        answered: true, correct:true,
        score: incrementScore, correctAnswer: correctAnswers,
        avoidDuplicate: duplicates
      });
    } else {
      const decrementLives = lives - 1
      const duplicates = avoidDuplicate.concat(answer[0])
      const wrongAnswers = incorrectAnswer.concat({Country: answer[0], Flag: answer[1]})
      this.setState({
        answered: true, correct:false,
        lives: decrementLives, incorrectAnswer: wrongAnswers,
        avoidDuplicate: duplicates
      });
    }

  }

  render() {
    // console.log("AFTER CALLING RENDER(): ", this.state)
    const { countries, choices, start, answer, passed, answered, correct, lives, score } = this.state;
    const [ answerName, answerImg ] = answer
    const revealTheAnswer = RevealAnswer({ answerName, passed, answered, correct })
    const loadMsg = Loading({ countries, start, passed, correct, answered });
    const flagImg = Flag( answerImg )
    const hearts = Array(lives).fill().map((heart, i) => (<Heart key={i}/>))
    const radioButtons = choices.map((country, i) => {
      return <RadioButton
                key={i}
                country={country}
                start={start}
                i={i}
                chosenAnswer={this.chosenAnswer}
                passed={passed}
                answered={answered}
                />
    });

    if ( lives !== 0 ) {
      return (

      <div className="gameContainer">

        <Title />

        {( start ) ? <h6>Score: { score }</h6> : null }

        {( start ) ? <h6>Lives: { hearts } </h6> : null }

        {( lives === 1 ) ? <h6><strong>This is your last chance, if you got it incorrectly. Game is over</strong></h6> : null}

        <div className="gameNavigation">

        {( start ) ? flagImg : null }

        <div className="gameButtonsContainer">
          <GameStart
            setChoices={this.setChoices}
            start={start}
          />

          <Pass
            revealAnswer={this.revealAnswer}
            start={start}
            passed={passed}
            answered={answered}
          />

          <Proceed
            nextQuestion={this.nextQuestion}
            passed={passed}
            answered={answered}
          />

          <CheckAnswer
            checkAnswer={this.checkAnswer}
            start={start}
            passed={passed}
            answered={answered}
          />

        </div>

        <div className='gameAnswerContainer'>

          {revealTheAnswer}

          {loadMsg}

        </div>

        <div className="choicesOuterContainer">
          <div className="choicesInnerContainer">

            {radioButtons}

          </div>
        </div>

        </div>
      </div>

      )

    } else {

      return (<GameOver />)

    }
  }
}

export default GuessTheCountry;