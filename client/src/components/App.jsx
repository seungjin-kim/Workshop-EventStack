import React, { Component } from 'react';
import EventList from './EventList.jsx';
import AddEventForm from './AddEventForm.jsx';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      searchEvents: '',
      addEvent: '',
      search: '',
      submitted: false,
    }

    this.userEvent = {};
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.collectEvents = this.collectEvents.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const app = this;

    this.setState({
      submitted: true,
    });
  }

  resetState() {
    this.setState({
      submitted: false,
      searchEvents: '',
      addEvent: '',
      search: ''
    })
  }

  handleSearch(e) {
    const { name, value } = e.target;
    if (value.length < 1 || value ==='' && this.state.submitted === true) {
      this.resetState();
    } else {
      let obj = (name !== 'searchEvents')
        ? { [name] : value }
        : {
            [name] : value,
            search: value
          }
      this.setState(obj)
    }
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.userEvent[name] = value;
  }

  addEvent(e) {
    e.preventDefault();
    const app = this;
    this.userEvent.ID = this.state.events.length + 1;
    console.log('FOUND THE USER EVENT OBJ: ', this.userEvent)
    let options = {
      method: 'POST',
      body: JSON.stringify(this.userEvent),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('/events', options)
      .then((response) => app.collectEvents())
      .catch((err) => console.error('error within posting data to server', err))
  }

  collectEvents() {
    const app = this;
    fetch('/events')
      .then((eventData) => eventData.json())
      .then((events) => app.setState({ events }))
      .catch((err) => console.error('unable to retrieve data', err));
  }

  componentDidMount() {
    this.collectEvents();
  }

  render() {
    const {
      events,
      search,
      addEvent,
      searchEvents,
      submitted } = this.state;

    return (
      <div>
        <h1 className="title">EventStack</h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="searchEvents"> Search Events: </label>
          <input id="searchEvents" type="text"
            name="searchEvents"
            value={searchEvents}
            onChange={this.handleSearch}
          />
          <input type="submit" value="submit" />
        </form>
        {(submitted && events.length > 0)
          ? <EventList
              events={events}
              search={search}
              reset={this.resetState}
            />
          : null
        }
        <br/>
        <br/>
        <hr/>
        <AddEventForm handleInputChange={this.handleInputChange} addEvent={this.addEvent}/>
        </div>
    )
  }
}
