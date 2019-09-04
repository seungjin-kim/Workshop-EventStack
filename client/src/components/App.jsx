import React, { Component } from 'react';
import EventList from './EventList.jsx';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [
        { name: 'AngularConnect' },
        { name: 'DevFest' },
        { name: 'JSConf' },
        { name: 'VueConf' },
        { name: 'ReactConf' },
      ],
      searchEvents: '',
      search: '',
      submitted: false,
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const app = this;

    // if (app.state.searchEvents !== '') {
      this.setState({
        submitted: true,
        searchEvents: ''
      });
    // }
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
    const { name, value } = e.target;
    console.log('here is name: ', name);
    console.log('here is value: ', value);
    if (value.length < 1) {
      this.resetState();
    } else {
      this.setState({
        [name]: value,
        search: value,
      })
    }
  }

  render() {
    const { events, search, searchEvents, submitted } = this.state;
    return (
      <div>
        <h1>EventStack</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="searchEvents">Search Events </label>
          <input id="searchEvents" type="text"
            name="searchEvents"
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
