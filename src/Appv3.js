import React, { Component } from 'react';
import loading from './components/loading';
import GameStart from './components/start';
import radioButton from './components/radioButton';
import flag from './components/flag';
import Pass from './components/pass';
import Proceed from './components/proceed';
import revealAnswer from './components/answer';

// pass
    // DONE -- should setState passed to true
            // DONE -- dependent above: should reveal the proceed button
            // DONE -- dependent above: should hide it self
// proceed 
    // DONE -- should setState passed to false
    // DONE -- should reveal the pass button
    // DONE -- and call again setChoices()

class GuessTheCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: "",
      choices: [],
      answer: [], // 0 is countryName, 1 is the flag
      start: false,
      passed: false
    }
    this.setChoices = this.setChoices.bind(this)
    this.revealAnswer = this.revealAnswer.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
  }

  // API CALL 
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(data => {return data.json()})
    .then(data => {this.setState({countries: data})}) // reassign a global variable
  }

  // STARTS THE GAME
  setChoices() {
    if(this.state.countries.length > 0) {
      // copy of the state
      const stateCopy = Object.assign({}, this.state)

      // generate choices and store it to an arrayCopy
      const choicesCopy = stateCopy.choices.slice()
          for(let i = 1; i <= 5; i++) {
            const randomCountryInd = Math.floor(Math.random() * (stateCopy.countries.length))
            choicesCopy.push(stateCopy.countries[randomCountryInd])
          }
      
      // generate the answerArray from the choicesCopy
      const answer = []
          const answerInd = Math.floor(Math.random() * (4 - 0 + 1)) + 0
          answer.push(choicesCopy[answerInd].name, choicesCopy[answerInd].flag)
      
      // change the state
      this.setState({answer:answer, choices:choicesCopy, start: true}, () => {
          console.log("THESE ARE FROM setChoices()")
          console.log("CHOICES ", choicesCopy)
          console.log("ANSWER ", answer)  
          console.log("CURRENT STATE", this.state)

          // resets the choices copy, if not, every "pass" it will add 5 countries
          choicesCopy.splice(0, choicesCopy.length)
      })
    }
  }

  // PASS: REVEAL ANSWER
  revealAnswer() {
    this.setState({passed: true})
  }

  // PASS: PROCEED TO NEXT QUESTION
  nextQuestion() {
    console.log("proceed to next question.....")
    this.setState({passed: false}, () => {
      this.setChoices()
    })
  }

  render() {
    const {countries, choices, start, answer, passed} = this.state;
    const answerImg = answer[1];
    const answerName = answer[0];
    const revealTheAnswer = revealAnswer({answerName, passed})
    const loadMsg = loading({countries, start});
    const flagImg = flag(answerImg)
    const radioButtons = choices.map((country, i) => {
      return radioButton({country, start, i})
    });

    return (
      <div className="choicesContainer">
        {loadMsg}

        <GameStart 
          setChoices={this.setChoices}
          start={start}
        />

        <Pass 
          revealAnswer={this.revealAnswer}
          start={start}
          passed={passed}
        />

        <Proceed 
          nextQuestion={this.nextQuestion}
          passed={passed}
        />

        {radioButtons}

        {flagImg}

        {revealTheAnswer}

      </div>
    )
  }
}

export default GuessTheCountry;