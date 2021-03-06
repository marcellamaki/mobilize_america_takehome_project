import React, { Component } from 'react';
import './App.css';
import WelcomeScreen from './WelcomeScreen';
import {fetchZipcodeLatLng} from './api/util.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: false,
      zipcode: null,
      lat: null,
      lng: null,
      latlng: {},
      searchRadius: null,
      selectedOption: "5"
    };
  }

  updateZipcode = (event) => {
    console.log(event.target.value)
    this.setState({
      zipcode: event.target.value
    })
  }

  updateSearchRadius = (event) => {
    console.log(event.target.value)
    this.setState({
      searchRadius: parseInt(event.target.value),
      selectedOption: event.target.value
    })
  }

  handleZipCodeSearch = (event) => {
    event.preventDefault()
    fetchZipcodeLatLng(this.state.zipcode.toString())
    .then (res => this.setState({
      location: true,
      lat: res.results[0].geometry.location.lat,
      lng: res.results[0].geometry.location.lng,
      latlng: {lat: res.results[0].geometry.location.lat, lng: res.results[0].geometry.location.lng}})
    )
  }


  render() {
    (!!this.state.location ? localStorage.setItem('location', JSON.stringify(this.state.latlng)) : null)
    return (
      <div>
      <WelcomeScreen
      location={this.state.location}
      zipcode={this.state.zipcode}
      selectedOption={this.state.selectedOption}
      updateSearchRadius={this.updateSearchRadius}
      handleZipCodeSearch={this.handleZipCodeSearch}
      updateZipcode={this.updateZipcode}
      />
      </div>
    );
  }
}

export default App;
