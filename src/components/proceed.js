import React, { Component } from 'react';

class Proceed extends Component {
    static defaulProps = {
        nextQuestion() {}
    }

    render () {
        const {passed, nextQuestion, answered} = this.props

        if (passed || answered) {
            
            return (
                <button
                    className="btn waves-effect waves-light"
                    type="button"
                    onClick={nextQuestion}
                >PROCEED</button>
            )

        } else {

            return null

        }
    }
}

export default Proceed