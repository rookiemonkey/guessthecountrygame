// started using this on appv4

import React, { Component } from 'react'

class RadioButton extends Component {
    static defaultProps = {
        chosenAnswer(){}
    }

    render() {

        const {country, start, i, chosenAnswer, passed, answered} = this.props;

        if (start && passed || start && answered) {

            return null

        } else if (start && passed === false) {
            return (
                <div key={i}>

                    <label
                        htmlFor={country.name}
                    >

                    <input
                        type="radio"
                        id={country.name}
                        value={country.name}
                        name="answer"
                        onChange={chosenAnswer}
                    ></input>  {country.name}</label>

                </div>
        )
        }
    }
}

export default RadioButton;