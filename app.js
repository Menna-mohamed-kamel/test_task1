const express = require("express");
const app = express();
app.use(express.json());

const { eventrouter } = require('./routes/event_router') ;
const { userrouter } = require('./routes/user_router') ;
const { scheduleRouter } = require('./routes/schedule_router') ;
const { notificationRouter } = require('./routes/notification_router') ;

app.use('/api/events/', eventrouter);
app.use('/api/users/', userrouter);
app.use('/api/schedules/', scheduleRouter);
app.use('/api/notifications/', notificationRouter);

module.exports = {
    app,
};
