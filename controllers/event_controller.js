const { Event } = require('../models/event');
const Joi = require('joi');
const { validateEvent } = require('../helper/validation'); 





// Delete an event
exports.deleteEvent = async (req, res) => {
  const eventId = parseInt(req.params.id);
  const eventIndex = events.findIndex(c => c.id === eventId);

  if (eventIndex === -1) {
    res.status(404).send(`Event with ID ${eventId} not found!`);
  } else {
    events.splice(eventIndex, 1); // Remove event from array
    res.status(200).send(`Event with ID ${eventId} deleted successfully!`);
  }
};




module.exports = {
  getAllEvents,
  getEventById,
  addEvent,
  editEvent,
  deleteEvent,
};
