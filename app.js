const express = require("express");
const app = express();
app.use(express.json());

const { eventrouter } = require('./routes/event_router') ;

app.use('/api/events/', eventrouter);

module.exports = {
    app,
};
