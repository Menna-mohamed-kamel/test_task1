const { events } = require('../models/event');
const { validateEvent } = require('../helper/validation'); 


// Get all events
const getAllEvents = (req,res) =>{
  res.send(events);
};

//Get event by id
const getEventById = (req,res) =>{
  const event = events.find(c => c.id === parseInt(req.params.id));
  if(!event){
      res.status(404).send(`The Event with the given ID not found !`);
  }else{
      res.send(event);
  }
};

// get year and month of the event
const getYearAndMonthOfEvent = (req,res) =>{
  res.send(req.params);
};

// Add an event
const addEvent = (req, res) => {
  const newEvent = req.body;

  
  const validationError = validateEvent(newEvent);
  if (validationError) {
    return res.status(404).send(validationError);
  }
  

  const event = {
      id: events.length + 1,
      name: req.body.name,
      date: req.body.date,
      location: req.body.location,
  };

  
  events.push(event);
  res.status(201).send('Event added successfully');
  
};



// edit an event
const editEventById =  (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find(c => c.id === eventId);

  if (!event) 
    res.status(404).send(`Event with ID ${eventId} not found!`);

  const result = validateEvent(req.body);
  if(result){
    res.status(400).send(result.error.details[0].message);
    console.log(result);
    return;
  }

  event.name = req.body.name;
  event.date = req.body.date; 
  event.location = req.body.location; 
  res.send(event);
};



// Delete an event
const deleteEvent = async (req, res) => {
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
  getYearAndMonthOfEvent,
  addEvent,
  editEventById,
  deleteEvent,
};


