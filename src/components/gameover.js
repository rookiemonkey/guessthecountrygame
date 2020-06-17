import React, { Component } from 'react'
import Title from './title';
import CountryCard from './countryCard';

class GameOver extends Component {

    render() {

        const  { message, incorrectAnswer, correctAnswer: correct } = this.props;
        const incorrect = [...new Set(incorrectAnswer)]

        return (

            <div className="gameContainer">

            <Title />

                <h4> G A M E - O V E R </h4>
                <button
                    className="btn waves-effect waves-light"
                    onClick={()=>{window.location.reload()}}
                >Play Again</button>
                <h6> {message} </h6>

                <div id="resultsContainer">

                    <div id="incorrectCountryContainer">
                        <h5>  You need to review the following countries: </h5>
                        <CountryCard incorrect={incorrect} />
                    </div>

                    {
                        (correct.length)
                        ? ( <div id="correctCountryContainer">
                                <h5>  Here are your correct answers: </h5>
                                <CountryCard correct={correct} />
                            </div>)
                        : null
                    }

                </div>

            </div>

        )
    }

}

export default GameOver;