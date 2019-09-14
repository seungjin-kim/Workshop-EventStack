const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3007;
const { retrieveEvents, storeEvent } = require('../db/controllers.js');

app.use(express.static('public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/Events', { useNewUrlParser: true })
  .then(() => console.log('successfuly connected to MongoDB'))
  .catch((err) => console.error('mongoose connection error: ', err))


app.get('/events', (req, res) => {
  return retrieveEvents(res);
});

app.post('/events', (req, res) => {
  console.log('found the Body of the form!', req.body);
  let event = req.body
  storeEvent(event, res);
});



app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
