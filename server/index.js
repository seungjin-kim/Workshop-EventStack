const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3007;
const mongoose = require('mongoose');

app.use(express.static('public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/Events', { useNewUrlParser: true })
  .then(() => console.log('successfuly connected to MongoDB'))
  .catch((err) => console.error('mongoose connection error: ', err))

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
