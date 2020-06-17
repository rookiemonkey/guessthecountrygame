import React, { Component } from 'react';
import RadioButton from '../components/radioButtonv2';

class ChoicesContainer extends Component {

    render () {

        const { choices, start, answered, passed, chosenAnswer } = this.props

        const radioButtons = choices.map((country, i) => {
          return <RadioButton
                    key={i}
                    country={country}
                    start={start}
                    i={i}
                    chosenAnswer={chosenAnswer}
                    passed={passed}
                    answered={answered}
                    />
        });

        return (

            <div className="choicesOuterContainer">
                <div className="choicesInnerContainer">

                    {radioButtons}

                </div>
            </div>

        )
    }
}

export default ChoicesContainer;