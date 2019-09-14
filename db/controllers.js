const { Event } = require('../db/index.js');

const retrieveEvents = (res) => {
  Event.find().exec()
    .then((events) => res.status(200).send(events))
    .catch((err) => console.error('unable to retrieveEvents', err))
}

const storeEvent = (event, res) => {
  let userEvent = new Event(event);
  userEvent.save()
    .then((results) => {
      console.log('successfully saved the document', results);
      res.sendStatus(201)
    })
    .catch((err) => console.error('unable to save event to db', err))
};


exports.storeEvent = storeEvent;
exports.retrieveEvents = retrieveEvents;