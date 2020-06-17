const pass = obj => {
    obj.setState({passed: false, answered: false, userAnswer: "", choices: []}, () => {
      obj.setChoices()
    })
}

export default pass;