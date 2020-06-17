import React, { Component } from 'react';

class Quit extends Component {

    render() {

        const { start, endGame, answered } = this.props;

        if(start && answered) {

            return (

                <button
                    className="btn waves-effect waves-light"
                    type="button"
                    onClick={endGame}
                >QUIT</button>

            )

        } else {

            return null

        }
    }
}

export default Quit;