import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {distanceCalculator} from './DistanceCalculator.js'
import haversine from 'haversine'

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const currentRadius = this.props.currentRadius
    const eventsWithinRadius = this.props.events.filter(event => distanceCalculator(event.location.latitude, event.location.longitude) <= currentRadius)
    const localEventMarkers =  eventsWithinRadius.map((event) => <Marker key={event.id} event={event} name={`${event.name}`} position={{lat: event.location.latitude, lng: event.location.longitude}} />)
    const userPosition = JSON.parse(localStorage.getItem('location'))

    return (
      <Map className="google-map" clickableIcons={true} google={this.props.google} zoom={8} initialCenter={userPosition}>
        <Marker name={'Current Location'} positon={userPosition}/>
        {localEventMarkers}
      </Map>
    );
  }
}

export default (GoogleApiWrapper({apiKey: ('AIzaSyCWuCJOCYig29F1pjqZ1qxQ9IO5T9iUhhs')})(MapContainer))
