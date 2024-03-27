const { Router } = require('express');
const eventrouter = Router()

const eventcontroller = require('../controllers/event_controller');

eventRouter.get('/', eventController.getAllEvents);
eventrouter.post('/',eventcontroller.addEvent);
eventrouter.put('/api/events/:id',eventController.editEventById);


module.exports = {
    eventrouter,
};
