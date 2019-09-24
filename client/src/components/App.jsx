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
      searchEvents: '',
      search: '',
      submitted: false,
      addEvent: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const app = this;

    if (app.state.searchEvents !== '') {
      this.setState({
        submitted: true,
        searchEvents: '',
      });
    }
  }

  resetState(e) {
    if (e) {
      e.preventDefault();
    }

    this.setState({
      submitted: false,
      searchEvents: '',
      search: ''
    })
  }

  handleSearch(e) {
    const {name, value} = e.target;
    console.log('e target', e.target);
    if (value.length < 1 || value === '' && this.state.submitted === true) {
      this.resetState();
    } else {
      let obj = (name !== 'searchEvents') ? { [name] : value } : { [name] : value, search: value}

      this.setState(obj);
    }
  }

  addEvent(e) {
    e.preventDefault();

    let newEvent = {name: this.state.addEvent};
    let updatedEvents = this.state.events.concat([newEvent]);

    if (this.state.addEvent.length <= 4) {
      alert('events must contain at least 4 characters');
      return;
    }

    this.setState({
      events: updatedEvents,
      addEvent: '',
    })
  }


  render() {
    const {events, search, searchEvents, submitted, addEvent} = this.state;
    return (
      <div>
        <h1 className="title">EventStack</h1>
        <form onSubmit={this.handleSubmit}>
          <input id="addEvent" type="text"
            name="addEvent"
            value={addEvent}
            placeholder="Add an event title here"
            onChange={this.handleSearch}
          />
          <button id="addBtn" onClick={this.addEvent}> Add </button>
          <br />
          <label htmlFor="searchEvents">Search Events </label>
          <input id="searchEvents" type="text"
            name= "searchEvents"
            value={searchEvents}
            onChange={this.handleSearch}
          />
          <input type="submit" value="submit" />
        </form>
        {(submitted)
          ? <EventList
              events={events}
              search={search}
              reset={this.resetState}
            />
          : null
        }
      </div>
    )
  }
}
