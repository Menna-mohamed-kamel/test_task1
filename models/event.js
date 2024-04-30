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
