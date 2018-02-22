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
    .catch(err => console.log('There was an error:' + err))
  }

  render() {
    const { events } = this.state
    const { children } = this.props

    if (!events.length) {
      return (
        <p>Loading...</p>
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
