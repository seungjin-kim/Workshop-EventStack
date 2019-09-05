import React, { Fragment } from 'react'

export default function EventList({ events }) {
  return (
    <Fragment>
      <ul>
        {events.map((event, i) => (
          <li key={i}> {event.name} </li>
        ))}
      </ul>
    </Fragment>
  )
}
