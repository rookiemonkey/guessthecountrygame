import React, { Component } from 'react'
import Title from './title';
import CountryCard from './countryCard';

class GameOver extends Component {

    render() {

        const  { message, incorrectAnswer, correctAnswer: correct } = this.props;
        const incorrect = [...new Set(incorrectAnswer)];


        return (

            <div className="gameContainer">

            <Title />

                <h3> G A M E - O V E R </h3>
                <h6> {message} </h6>

                <div>

                    <div>
                        <h5>  You need to review the following countries: </h5>
                        <CountryCard incorrect={incorrect} />
                    </div>

                    <div>
                        <h5>  Here are your correct answers: </h5>
                        <CountryCard correct={correct} />
                    </div>

                </div>

            </div>

        )
    }

}

export default GameOver;