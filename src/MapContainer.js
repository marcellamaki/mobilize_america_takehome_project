import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

  constructor(props){
    super(props)
  }


  render() {
    console.log(this.props.events)
    const upcoming = this.props.events.map((event, index) => <Marker key={index} event={event} name={`${event.name}`} onClick={this.onMarkerClick} position={{lat: event.location.latitude, lng: event.location.longitude}} />)
    console.log("console logging events after filtering", upcoming)
    const base = {lat: 37.09024, lng: -95.71289100000001}

    return (
      <Map className="google-map" clickableIcons={true} onClick={this.onInfoWindowClose} google={this.props.google} zoom={4} initialCenter={base}>

        <Marker onClick={this.onMarkerClick} name={'Current Location'}/>

        {upcoming}

      </Map>
    );
  }
}



export default (GoogleApiWrapper({apiKey: ('AIzaSyCWuCJOCYig29F1pjqZ1qxQ9IO5T9iUhhs')})(MapContainer))
