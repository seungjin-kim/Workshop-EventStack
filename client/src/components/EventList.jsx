import React, { Fragment } from 'react'

export default function EventList({ events, search, reset }) {

  let filteredEvents = events.filter((e) =>
    (e.name.includes(search)) ? e : null
  );

  return (
    <Fragment>
      <ul>
        {
          (filteredEvents.length < 1)
            ? <h4>Event not found.
            <span>
                <a href="#" onClick={reset}> please try again</a>
              </span>
            </h4>
            : filteredEvents.map((event, i) => {
              return <li key={i}>{event.name}</li>
            })
        }
      </ul>
    </Fragment>
  )
}