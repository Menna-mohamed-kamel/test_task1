const {  Event } = require('../models/event');
const { validateEvent } = require('../helper/validation'); 


// Get all events
const getAllEvents = async (req,res) =>{
  // res.send(events);
  try{
  const allEvents=await course.find({});
  res.status(200).send(allEvents);
  }catch(error){
    res.status(400).send(error);
  }
};

//Get event by id
const getEventById = async (req,res) =>{
  try{
    const event=await course.find({_id: params.id});
    res.status(200).send(event);
    }catch(error){
      res.status(400).send(error);
    }
};

// get year and month of the event
const getYearAndMonthOfEvent = (req,res) =>{
  res.send(req.params);
};

// Add an event
const addEvent = async (req, res) => {
  try{
    const event =await Event.create(req.body);
    res.status(200).send(event);
  }catch(error){
    res.status(400).send(error);
  }
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


