import React, { Component } from 'react';
import CountryMap from './map.js';
import numberWithCommas from '../methods/numberWithCommas';

class Trivia extends Component {

    render() {

        const [ name, flag, capital, region, subregion, population, latlng ] = this.props.answer;
        const [ lat, lng ] = latlng;
        const pop = numberWithCommas(population)

        return (

            <React.Fragment>

                <h5> { name } </h5>

                <div id="mapid" style={{height: "180px", width: '100%'}}>
                    <CountryMap lat={lat} lng={lng} name={name} />
                </div>

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