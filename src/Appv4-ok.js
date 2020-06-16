import React, { Component } from 'react';

// components
import Title from './components/title';
import Loading from './components/loading';
import GameStart from './components/start';
import RadioButton from './components/radioButtonv2';
import Flag from './components/flag';
import Pass from './components/pass';
import Proceed from './components/proceed';
import CheckAnswer from './components/checkAnswer';
import RevealAnswer from './components/answer';

// methods
import start from './methods/start';

// for my future me, future additions
// 1. 10 lives
// 2. point system
//        - specific will give specific class (such as Diplomat for 50 - 60 points)
//        - display message that "we hope user did not googled the answers"
// 3. save correct answers
// 4. save incorrect answers
// 5. quit button
// 6. quit button ends the game and shows correct/incorrect answers
// 7. use howler.js to add music upon hitting start
// 8. timer for each question

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
      userAnswer: ""
    }
  }

  // API CALL
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(data => {return data.json()})
    .then(data => {this.setState({countries: data})}) // reassign a global variable
  }

  // STARTS THE GAME
  setChoices = () => {
    start(this)
  }

  // PASS: REVEAL ANSWER
  revealAnswer = () => {
    this.setState({passed: true, choices: []})
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
    const {userAnswer, answer} = this.state

    if (userAnswer === answer[0]) {
      this.setState({answered: true, correct:true})
    } else {
      this.setState({answered: true, correct:false})
    }

  }

  render() {
    console.log("Right after render(): ", this.state.answer)
    const { countries, choices, start, answer, passed, answered, correct } = this.state;
    const [ answerName, answerImg ] = answer
    const revealTheAnswer = RevealAnswer({ answerName, passed, answered, correct })
    const loadMsg = Loading({ countries, start, passed, correct, answered });
    const flagImg = Flag( answerImg )
    const radioButtons = choices.map((country, i) => {
      return <RadioButton
                country={country}
                start={start}
                i={i}
                chosenAnswer={this.chosenAnswer}
                passed={passed}
                answered={answered}
                />
    });

    return (
      <div className="gameContainer">

        <Title />

        <div className="gameNavigation">

        {(start) ? flagImg : null }

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
  }
}

export default GuessTheCountry;