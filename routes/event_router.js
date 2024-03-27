const { Router } = require('express');
const eventrouter = Router()

const eventcontroller = require('../controllers/event_controller');

eventrouter.get('/',eventcontroller.getAllEvents);
eventrouter.get('/:id',eventcontroller.getEventById);
eventrouter.post('/',eventcontroller.addEvent);
eventrouter.put('/:id',eventcontroller.editEventById);
eventrouter.delete('/:id', eventcontroller.deleteEvent);


module.exports = {
    eventrouter,
};
