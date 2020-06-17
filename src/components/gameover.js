import React, { Component } from 'react'
import Title from './title';

class GameOver extends Component {

    render() {

        const  { message, incorrectAnswer, correctAnswer } = this.props;
        console.log('INCORRECT: ', incorrectAnswer, 'CORRECT: ', correctAnswer)
        const incorrect = incorrectAnswer.map((c, i) => (<span key={i}>{c.Country}</span>))
        const correct = correctAnswer.map((c, i) => (<span key={i}>{c.Country}</span>))

        return (

            <div className="gameContainer">

            <Title />

                <h3>G A M E - O V E R</h3>
                <h6> {message} </h6>

                <div>

                    <div>
                        <h3>  You need to review the following countries: </h3>
                        <h6> {incorrect} </h6>
                    </div>

                    <div>
                        <h3>  Here are your correct answers: </h3>
                        <h6> {correct} </h6>
                    </div>

                </div>

            </div>

        )
    }

}

export default GameOver;