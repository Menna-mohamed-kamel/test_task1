const express = require("express");
const app = express();
app.use(express.json());

const { eventrouter } = require('./routes/event_router') ;
const { userrouter } = require('./routes/user_router') ;

app.use('/api/events/', eventrouter);
app.use('/api/users/', userrouter);


module.exports = {
    app,
};
