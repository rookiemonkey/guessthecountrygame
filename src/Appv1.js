import React, { Component } from 'react';
import radioButton from './components/radioButton';
import loading from './components/loading'

// done- request from https://restcountries.eu/rest/v2/all
// done- returns an array of objects
// done - loop thru the array of obj
    // done - randomly select 5 country, setState to choices
    // done - randomly select 1 country from the 5 country, setState answerCountry and answerFlag
// when start is clicked
    // replaced it with "Pass"
    

class GuessTheCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: "",
      choices: [],
      answer: [], // 0 is countryName, 1 is the flag
      start: false
    }

    this.setChoices = this.setChoices.bind(this)
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
      })
    }
  }

  render() {
    const {countries, choices, start} = this.state
    const load = loading({countries})
    const radioButtons = choices.map(country => {return radioButton({country, start})})

    return (
      <div className="choicesContainer">
        {load}

        <button
          onClick={this.setChoices}
        >START</button>

        {radioButtons}

      </div>
    )
  }
}

export default GuessTheCountry;