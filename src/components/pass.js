import React, { Component } from 'react'

class Pass extends Component {
    static defaultProps = {
        revealAnswer(){}
    }

    render() {
        const {revealAnswer, start, passed, answered} = this.props

        if (start && !passed && !answered) {

            return (
                <button
                    className="btn waves-effect waves-light"
                    onClick={revealAnswer}
                >PASS</button>
            )
            
        } else if (start && passed || start && answered) {

            return null

        } else {

            return null

        }
    }
}

export default Pass;