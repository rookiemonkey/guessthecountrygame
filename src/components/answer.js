import React from 'react'

const revealAnswer = ({answerName, passed, answered, correct}) => {

    if (passed) {

        return (

            <span>the answer is <strong>{answerName}</strong></span>

        )

    } else if (answered && correct) {

        return (

            <span className="correct">You got it right! its <strong>{answerName}</strong></span>

        )

    } else if (answered && !correct) {

        return (

            <span>You are almost there. The correct answer is <strong>{answerName}</strong></span>

        )

    } else {

        return null
    }
}

export default revealAnswer