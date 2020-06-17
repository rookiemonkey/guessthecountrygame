import React, { Component } from 'react';
import numberWithCommas from '../methods/numberWithCommas';

class Trivia extends Component {

    render() {

        const [ name, flag, capital, region, subregion, population, latlng ] = this.props.answer;
        const [ lat, lng ] = latlng; // for future use when adding map
        const pop = numberWithCommas(population)


        return (

            <React.Fragment>

                <p>General Informations about {name}</p>
                <ul>
                    <li>Capital: {capital} </li>
                    <li>Region: {region} </li>
                    <li>Subregion: {subregion} </li>
                    <li>Population: {pop} </li>
                </ul>

           </React.Fragment>

        )
    }
}

export default Trivia;