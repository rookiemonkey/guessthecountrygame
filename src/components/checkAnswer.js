import React, { Component } from 'react'

class CheckAnswer extends Component {
    static defatulProps = {
        checkAnswer(){}
    }

    render() {
        const {start, passed, checkAnswer, answered} = this.props

        if (start && !passed && !answered) {

            return (
                <button
                    className="btn waves-effect waves-light"
                    onClick={checkAnswer}
                    type="button"
                >CHECK</button>
            )

        } else {

            return null
        }
    }
}

export default CheckAnswer;