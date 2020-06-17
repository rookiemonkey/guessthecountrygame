const start = (obj) => {

    if (obj.state.countries.length > 0) {

      // generate a copy of the state
      const stateCopy = Object.assign({}, obj.state)
      const { choices, countries, avoidDuplicate } = stateCopy

      // generate choices and store it to copyr of choices array
      const choicesCopy = choices.slice()
          for(let i = 1; i <= 5; i++) {
            const randomCountryInd = Math.floor(Math.random() * (countries.length))
            choicesCopy.push(countries[randomCountryInd])
          }

      // removes the correct answer from the array of countries to avoid duplicate questions
      const noDuplicate = countries.filter(c  => {
        return !avoidDuplicate.includes(c.name);
      })

      // generate the answerArray from the choicesCopy
      const answer = []
          const answerInd = Math.floor(Math.random() * (4 - 0 + 1)) + 0
          answer.push(
            choicesCopy[answerInd].name,
            choicesCopy[answerInd].flag,
            choicesCopy[answerInd].capital,
            choicesCopy[answerInd].region,
            choicesCopy[answerInd].subregion,
            choicesCopy[answerInd].population,
            choicesCopy[answerInd].latlng
            )

      // change the state
      obj.setState({
        answer:answer, choices:choicesCopy,
        start: true, correct:false,
        countries: noDuplicate
      })

    }

    else { return null }

}

export default start;