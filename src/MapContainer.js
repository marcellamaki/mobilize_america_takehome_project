import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {


  render() {
    console.log(this.props.events)
    const upcoming = this.props.events.map((event, index) => <Marker key={index} event={event} name={`${event.name}`} position={{lat: event.location.latitude, lng: event.location.longitude}} />)
    const userPosition = JSON.parse(localStorage.getItem('location'))
    console.log(userPosition)

    return (
      <Map className="google-map" clickableIcons={true} onClick={this.closeModal} google={this.props.google} zoom={4} initialCenter={userPosition}>

        <Marker name={'Current Location'} positon={userPosition}/>

        {upcoming}

      </Map>
    );
  }
}


export default (GoogleApiWrapper({apiKey: ('AIzaSyCWuCJOCYig29F1pjqZ1qxQ9IO5T9iUhhs')})(MapContainer))
