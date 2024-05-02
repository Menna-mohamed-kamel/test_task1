const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event' // Reference to the Event model
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});


const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;