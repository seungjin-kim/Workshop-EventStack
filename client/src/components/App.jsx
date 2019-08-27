import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: null,
    }
  }

  render() {
    return (
      <div>
        <h1>EventStack</h1>
      </div>
    )
  }
}
