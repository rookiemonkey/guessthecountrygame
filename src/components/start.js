import React, { Component } from 'react'

class GameStart extends Component {
    static defaultProps = {
        setChoices(){}
    }

    render() {
        const {setChoices, start} = this.props

        if(start !== true) {
            return (
                <button
                    className="btn waves-effect waves-light"
                    onClick={setChoices}
                >START</button>
            )
        } else {
            return null
        }
    }
}

export default GameStart