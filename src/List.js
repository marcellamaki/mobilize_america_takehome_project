import React from 'react';
import {distanceCalculator} from './DistanceCalculator.js'

export default (props) => {
  console.log(props)
  const currentRadius = props.currentRadius
  const eventsWithinRadius = props.events.filter(event => distanceCalculator(event.location.latitude, event.location.longitude) <= currentRadius)

  if (eventsWithinRadius < 1) {
    return (
        <h2> Uh oh! It looks like there are no events near you yet. Wish there were?
          Sign up to volunteer and we will get back to you with ways to kick start political action in your community!
        </h2>

    )
  } else {
        return (
        <div className="container">
          <h2> Showing events within {currentRadius} miles of {props.zipcode}</h2>
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
}
