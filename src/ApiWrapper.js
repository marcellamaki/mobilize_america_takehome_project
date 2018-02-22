import React from 'react'
import {fetchEventData} from './api/util.js'

class ApiWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      loading: true
    };
  }

  componentWillMount = () => {
    fetchEventData()
    .then(res => this.setState({
      events: res.data.events
    }))
    .catch(err => this.renderErrorMessage(err))
  }

  renderErrorMessage(err) {
    console.log("Error": err)
    <p>Uh oh! Something went wrong. Please try refreshing the page. Still having trouble? <a href="mailto:techsupport@mobilizeamerica.io">Contact Us!</a></p>
  }

  render() {
    const { events } = this.state
    const { children } = this.props

    if (!events.length) {
      return (
        <div>
        <p>Loading...</p>
        </div>
      )
    }

    return (
      <div>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { events })
        })}
      </div>
    )
  }
}

export default ApiWrapper;
