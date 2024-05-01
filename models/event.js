const { date, required } = require("joi");
const { default: mongoose } = require("mongoose");
const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    date:{
        type:date,
        required: true,
    },
    location:{
        type:String,
        required:true
    },
});

const Event = mongoose.model('Event',eventSchema);

module.exports = {Event, };
