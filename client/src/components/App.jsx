import React, { Component } from 'react'
import EventList from './Eventlist.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [
        {name: 'AngularConnect'},
        {name: 'DevFest'},
        {name: 'JSConf'},
        {name: 'VueConf'},
        {name: 'ReactConf'},
      ],
    }
  }

  render() {
    const {events} = this.state;
    return (
      <div>
        <h1>EventStack</h1>
        <EventList events={events} />
      </div>
    )
  }
}
