import React, { Component } from 'react';
import './App.css';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: false,
      zipcode: null,
      lat: null,
      lng: null,
    };
  }

  updateZipcode = (event) => {
    this.setState({
      zipcode: event.target.value
    })
  }

  handleZipCodeSearch = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.setState({
      location: true
    })
  }

  handleUseMyLocation = (event) => {
    event.preventDefault()
    console.log("hello world from use my location")
  }

  render() {
    return (
      <div>
      <WelcomeScreen
      location={this.state.location} handleUseMyLocation={this.handleUseMyLocation}
      handleZipCodeSearch={this.handleZipCodeSearch}
      updateZipcode={this.updateZipcode}
      />
      </div>
    );
  }
}

export default App;
