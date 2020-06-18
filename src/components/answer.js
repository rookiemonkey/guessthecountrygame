import React from 'react'

const revealAnswer = ({ passed, answered, correct}) => {

    if (passed) {

        return (

            <span>the answer is ... </span>

        )

    } else if (answered && correct) {

        return (

            <span className="correct">You got it right! it's ... </span>

        )

    } else if (answered && !correct) {

        return (

            <span>You are almost there. The correct answer is ... </span>

        )

    } else {

        return null
    }
}

export default revealAnswer