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

let events = [
  {
    ID: 1,
    title: 'ReactConf',
    description: 'The offical Facebook React conference',
    summary: 'Two full days of knowledge sharing and community with people who build and LOVE React.',
    startDate: 'October 24, 2019',
    endDate: 'October 25, 2019',
    cost:420
  },
  {
    ID: 2,
    title: 'DevFest DFW',
    description: 'DevFests are community-led developer events hosted by Google Developer Groups around the globe. GDGs are focused on community building and learning about Google’s technologies. ',
    summary: 'DevFest DFW brings together world-class experts in Android, Web, Cloud, ML/AI, and other technologies to Dallas for 1 day of sessions & workshops.',
    startDate: 'October 19, 2019',
    endDate: 'October 19, 2019',
    cost:30
  },
  {
    ID: 3,
    title: 'JSConf',
    description: 'JSConf US is the only conference where you can learn how to push your favorite language beyond the confines of the browser and into robots, and video games.',
    summary: 'JSConf US has pushed the language outside of its comfort zone, the web browser, and into the forefront of servers, drones, robots and video games. Enjoy a very special day of exciting activities that are sure to make anyone happy from golfing to robot hacking to segway tours during our "choose-your-own-adventure" activity day only at JSConf US.',
    startDate: 'August 12, 2019',
    endDate: 'August 14, 2019',
    cost:850
  },
  {
    ID: 4,
    title: 'VueConf',
    description: 'The offical Facebook React conference',
    summary: 'Two full days of knowledge sharing and community with people who build and LOVE React.',
    startDate: 'March 2, 2020',
    endDate: 'March 4, 2020',
    cost: 795
  },
  {
    ID: 5,
    title: 'NG-Conf',
    description: "The World's best Angular Conference",
    summary: 'The conference for everything Angular',
    startDate: 'May 1st, 2019',
    endDate: 'May 3rd, 2019',
    cost:1100
  },
];


exports.Event = Event;
exports.events = events;