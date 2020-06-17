const reveal = obj => {

    // create a copy of the state
    const stateCopy = Object.assign({}, obj.state);

    // destructure
    const { lives, answer, incorrectAnswer } = stateCopy;
    const [ country, flag ] = answer;

    // returns a new array inserting the answer (that was incorrectly answer by player)
    const wrongAnswers = incorrectAnswer.concat({Country: country, Flag: flag})

    // decrement the lives
    const decrementLives = lives - 1;

    // set the state
    obj.setState({passed: true, choices: [], lives: decrementLives, incorrectAnswer: wrongAnswers});

}

export default reveal;