import React from 'react'

const radioButton = ({country, start, i, chosenAnswer}) => {
    if (start === true) {
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
    } else {
        return null
    }
}

export default radioButton;