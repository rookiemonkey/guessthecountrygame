import React, { Component } from 'react'

class Status extends Component {

    render() {

        const { start, score, hearts, lives } = this.props;

        return (

            <>

                <div id="statusContainer">

                {( start )
                    ? <span>Score: { score }</span>
                    : null }

                {( start )
                    ? <span>Lives: { hearts } </span>
                    : null }

                </div>

                {( lives === 1 )
                    ? <h6><strong>This is your last chance, if you got it incorrectly, Game is over</strong></h6>
                    : null}

            </>

        )
    }
}

export default Status;