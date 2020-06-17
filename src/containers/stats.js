import React, { Component } from 'react'

class Status extends Component {

    render() {

        const { start, score, hearts, lives } = this.props;

        return (

            <>

                {( start )
                    ? <h6>Score: { score }</h6>
                    : null }

                {( start )
                    ? <h6>Lives: { hearts } </h6>
                    : null }

                {( lives === 1 )
                    ? <h6><strong>This is your last chance, if you got it incorrectly, Game is over</strong></h6>
                    : null}

            </>

        )
    }
}

export default Status;