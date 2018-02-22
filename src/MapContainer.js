import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {distanceCalculator} from './DistanceCalculator.js'
import haversine from 'haversine'

export class MapContainer extends React.Component {

  render() {
    const eventsWithinRadius = this.props.events.filter( function (event, index) { distanceCalculator(event.location.latitude, event.location.longitude) <= this.props.zipcode })
      console.log("events within radius", eventsWithinRadius)
      // <Marker key={index} event={event} name={`${event.name}`} position={{lat: event.location.latitude, lng: event.location.longitude}} />
    const userPosition = JSON.parse(localStorage.getItem('location'))
    console.log(userPosition)

    return (
      <Map className="google-map" clickableIcons={true} onClick={this.closeModal} google={this.props.google} zoom={4} initialCenter={userPosition}>
        <Marker name={'Current Location'} positon={userPosition}/>
        {eventsWithinRadius}
      </Map>
    );
  }
}

export default (GoogleApiWrapper({apiKey: ('AIzaSyCWuCJOCYig29F1pjqZ1qxQ9IO5T9iUhhs')})(MapContainer))
