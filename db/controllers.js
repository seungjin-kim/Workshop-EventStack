const { Event } = require('../db/index.js');

const retrieveEvents = (res) => {
  Event.find().exec()
    .then((events) => res.status(200).json(events))
    .catch((err) => console.error('unable to retrieveEvents', err))
}

exports.retrieveEvents = retrieveEvents;