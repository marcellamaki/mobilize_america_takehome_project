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
        <h4>Show me events within...</h4>
          <div className="radio">
            <label>
              <input type="radio" value="5mi" />
              5 Miles
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="10mi" />
              10 miles
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="25mi" />
              25 miles
            </label>
          </div>
          of <input type="text" name="zipcode" placeholder="enter zipcode..." value={this.props.zipcode} onChange={this.props.updateZipcode}/>
          <button value={this.props.zipcode} onClick={this.props.handleZipCodeSearch}>Go</button>
        </form>
      </div>
    )
    } else {
      return(
        <ApiWrapper>
          <List />
          <MapContainer />
        </ApiWrapper>
      )
    }
  }
}

export default WelcomeScreen;
