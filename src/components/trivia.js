import React, { Component } from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import numberWithCommas from '../methods/numberWithCommas';

class Trivia extends Component {

    componentDidMount() {
        const [ a, b, c, d, e, f, latlng ] = this.props.answer;
        const [ lat, lng ] = latlng;
        const position = [lat, lng];
        const map = (
              <Map center={position} zoom={13}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                  <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
              </Map>
            )
        render(map, document.getElementById('map-container'))
    }

    render() {

        const [ name, flag, capital, region, subregion, population, latlng ] = this.props.answer;
        const [ lat, lng ] = latlng;
        const pop = numberWithCommas(population)

        return (

            <React.Fragment>

                <h5> { name } </h5>

                <div id="mapid" style={{height: "180px", width: '100%'}}></div>

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