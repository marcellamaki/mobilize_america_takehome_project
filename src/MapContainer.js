import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {


  render() {
    console.log(this.props.events)
    const upcoming = this.props.events.map((event, index) => <Marker key={index} event={event} name={`${event.name}`} position={{lat: event.location.latitude, lng: event.location.longitude}} />)
    const userLocation = {lat: 37.09024, lng: -95.71289100000001}

    return (
      <Map className="google-map" clickableIcons={true} onClick={this.closeModal} google={this.props.google} zoom={4} initialCenter={userLocation}>

        <Marker name={'Current Location'} positon={userLocation}/>

        {upcoming}

      </Map>
    );
  }
}


export default (GoogleApiWrapper({apiKey: ('AIzaSyCWuCJOCYig29F1pjqZ1qxQ9IO5T9iUhhs')})(MapContainer))
