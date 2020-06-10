import React from 'react'

const loading = ({countries, start, passed, correct, answered}) => {
    if (start && passed || start && correct) {

        return null

    } else if (start && answered === false ) {

        return (
            <div className="message">
                What is the name of the country?
            </div>
        )

    } else if (start && answered) {

        return null

    } else if (countries.length > 0) {

        return (
            <div className="message">
                Ready to play? Hit start now!
            </div>
        )

    } else if (countries.length == []) {

        return (
            <div className="message">
                Fetching data from our server. It won't take long
            </div>
        )
        
    } 
}

export default loading