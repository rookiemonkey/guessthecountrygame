const start = (obj) => {

    if (obj.state.countries.length > 0) {

      // generate a copy of the state
      const stateCopy = Object.assign({}, obj.state)

      // generate choices and store it to copyr of choices array
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
      obj.setState({answer:answer, choices:choicesCopy, start: true, correct:false})

    }

    else { return null }

}

export default start;