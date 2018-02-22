import React from 'react';
import {distanceCalculator} from './DistanceCalculator.js'
import haversine from 'haversine'

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
          <p>{event.location.address_line1}</p>
          <p>{event.location.address_line2}</p>
          <p>{event.location.city}, {event.location.state}, {event.location.zipcode}</p></div>
      })}
    </div>
  )
}
