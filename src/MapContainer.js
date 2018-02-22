import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {distanceCalculator} from './DistanceCalculator.js'
import haversine from 'haversine'

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  isWithinRadius(distance) {
  console.log("current radius", {this.props.currentRadius})
    return distance <= props.currentRadius
  }

  render() {

    const eventsWithinRadius = this.props.events.map( e => distanceCalculator(e.location.latitude, e.location.longitude)).filter(this.isWithinRadius)
    const localEventMarkers =  eventsWithinRadius.map((event) => <Marker key={event.id} event={event} name={`${event.name}`} position={{lat: event.location.latitude, lng: event.location.longitude}} />)
    const userPosition = JSON.parse(localStorage.getItem('location'))
    console.log(userPosition)

    return (
      <Map className="google-map" clickableIcons={true} google={this.props.google} zoom={8} initialCenter={userPosition}>
        <Marker name={'Current Location'} positon={userPosition}/>
        {localEventMarkers}
      </Map>
    );
  }
}

export default (GoogleApiWrapper({apiKey: ('AIzaSyCWuCJOCYig29F1pjqZ1qxQ9IO5T9iUhhs')})(MapContainer))
