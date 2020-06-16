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





      // avoid duplicated questions. initially 250 countries
      const output1 = avoidDuplicate.map((c, i) => {

        const noDuplicate = countries.filter((country, i) => {

          return country.name !== c;

        })

        return noDuplicate;
        // WOKRING: thrown question is removed however ....
        // however, problem arises when there are more than 1 element in avoideDuplicate
        // on the second iteration the previously removed elements was there again

      })

      const end = countries.length - output1.length
      const output2 = output1.flat()
      const output3 = output2.slice(0, end)


      // console.log('OUPUT1: ', output1)
      // console.log('OUPUT2: ', output2)
      // console.log('OUPUT3: ', output3)





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