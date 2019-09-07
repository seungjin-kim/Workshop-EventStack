const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3007;
const mongoose = require('mongoose');
const { storeEvent }  = require('../db/index.js');

app.use(express.static('public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/Events', { useNewUrlParser: true })
  .then(() => console.log('successfuly connected to MongoDB'))
  .catch((err) => console.error('mongoose connection error: ', err))


app.get('/events', (req,res) => {

});

app.post('/events', (req, res) => {
  let event = {
    ID: 1,
    title: 'ReactConf',
    description: 'The offical Facebook React conference',
    summary: 'Two full days of knowledge sharing and community with people who build and LOVE React.',
    startDate: 'October 24, 2019',
    endDate: 'October 25, 2019',
    cost:420
  };

  storeEvent(event, res)

});




app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));