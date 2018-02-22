import React from 'react';

export default (props) => {
  console.log(props)

  return (
    <div className="container">
      {props.events.map((event, index) => {
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
