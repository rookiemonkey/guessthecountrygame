const reveal = obj => {
    const stateCopy = Object.assign({}, obj.state)
    const { lives } = stateCopy
    const decrementLives = lives - 1
    obj.setState({passed: true, choices: [], lives: decrementLives})
}

export default reveal;