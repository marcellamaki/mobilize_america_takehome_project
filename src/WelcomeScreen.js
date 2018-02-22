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
              <input type="radio" name="5mi" value="5" onChange={this.props.updateSearchRadius} checked={this.props.selectedOption === "5"}/>
              5 Miles
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="10mi" value="10" onChange={this.props.updateSearchRadius} checked={this.props.selectedOption === "10"}/>
              10 miles
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="25mi" value="25" onChange={this.props.updateSearchRadius} checked={this.props.selectedOption === "25"}/>
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
          <MapContainer currentRadius={parseInt(this.props.selectedOption)}/>
        </ApiWrapper>
      )
    }
  }
}

export default WelcomeScreen;
