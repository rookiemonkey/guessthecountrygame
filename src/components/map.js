import React, { Component } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer, } from 'react-leaflet';

class CountryMap extends React.Component {

  render() {

    const { lat, lng, name } = this.props;
    const position = [ lat, lng ]

    return (

      <LeafletMap center={position} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

        />
        <Marker position={position}>
          <Popup>
            { name }
          </Popup>
        </Marker>
      </LeafletMap>

    );
  }
}

export default CountryMap;