import React, { Component } from 'react';
import './App.css';

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


    render() {
      return (
        <div>
        Welcome screen will go here
        </div>
      );
    }
  }

  export default App;
