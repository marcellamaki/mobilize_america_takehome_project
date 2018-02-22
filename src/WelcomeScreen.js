import React from 'react';
import ApiWrapper from './ApiWrapper'
import List from './List'
import MapContainer from './MapContainer'

class WelcomeScreen extends React.Component {



  render() {
    if (!this.props.location) {
    return (
      <div>
      <h1>Mobilize America</h1>
        <h2>Find events near you</h2>
        <form>
        <button onClick={this.props.handleUseMyLocation}>Use My Location</button>
          <br></br>or&nbsp;<br></br>
          <input type="text" name="zipcode" placeholder="enter zipcode..." value={this.props.zipcode} onChange={this.props.updateZipcode}/>
          <button value={this.props.zipcode} onClick={this.props.handleZipCodeSearch}>Go</button>
        </form>
      </div>
    )
    } else {
      return(
        <ApiWrapper>
          <List />
          <MapContainer event={this.props.events}/>
        </ApiWrapper>
      )
    }
  }
}

export default WelcomeScreen;
