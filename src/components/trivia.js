import React, { Component } from 'react';
import CountryMap from './map.js';

class Trivia extends Component {

    render() {

        const [name, flag, capital, region, subregion, population, latlng] = this.props.answer;
        const [lat, lng] = latlng;

        return (

            <React.Fragment>

                <h5> {name} </h5>

                <div id="mapid" >
                    <CountryMap
                        lat={lat} lng={lng}
                        name={name}
                        capital={capital}
                        region={region}
                        subregion={subregion}
                        population={population}

                    />
                </div>

            </React.Fragment>

        )
    }
}



export default Trivia;