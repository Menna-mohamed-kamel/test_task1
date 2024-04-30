// const events = [
//     { id: 1, name: 'Event 1', date: '2024-04-01', location: 'Venue 1' },
//     { id: 2, name: 'Event 2', date: '2024-04-15', location: 'Venue 2' },
//     { id: 3, name: 'Event 3', date: '2024-04-30', location: 'Venue 3' }

const { default: mongoose } = require("mongoose");
const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    count:{
        type:Number,
        required: true,
    },
});

const Event = mongoose.model('Event',eventSchema);

module.exports = {Event, };
