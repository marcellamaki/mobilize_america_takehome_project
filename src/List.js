import React from 'react';
import {distanceCalculator} from './DistanceCalculator.js'

export default (props) => {
  console.log(props)
  const currentRadius = props.currentRadius
  const eventsWithinRadius = props.events.filter(event => distanceCalculator(event.location.latitude, event.location.longitude) <= currentRadius)
  return (
    <div className="container">
      {eventsWithinRadius.map((event, index) => {
        return <div key={index}>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <h4>Date(s) and Time</h4>
          {event.times.map((time, index) => {
            return <p key={index}>From {time.start} to {time.end}</p>})}
          <h4>Location</h4>
          <p>{event.location.address_line1}</p>
          <p>{event.location.address_line2}</p>
          <p>{event.location.city}, {event.location.state}, {event.location.zipcode}</p>
          </div>
      })}
    </div>
  )
}
