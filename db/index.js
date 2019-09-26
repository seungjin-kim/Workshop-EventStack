const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  ID: Number,
  title: String,
  description: String,
  summary: String,
  startDate: String,
  endDate: String,
  cost: Number
});

const Event = mongoose.model('Event', eventSchema);