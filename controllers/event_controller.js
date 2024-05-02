const {  Event } = require('../models/event');
const { validateEvent } = require('../helper/validation'); 


// Get all events
const getAllEvents = async (req,res) =>{
  try{
  const allEvents=await Event.find({});
  res.status(200).send(allEvents);
  }catch(error){
    res.status(400).send(error);
  }
};

//Get event by id
const getEventById = async (req,res) =>{
  try{
    const event = await Event.findOne({_id: params.id});
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
const editEventById =  async (req, res) => {
  try{
    const event = await Event.findOne({_id:req.params.id});
    if(!event){
      return res.status(404).send('Event not found');
    }
    if(req.body.name){
      event.name = req.body.name;
    }
    if(req.body.date){
      event.date = req.body.date;
    }
    if(req.body.location){
      event.location = req.body.location;
    }
    await event.save();
    res.status(200).send(event);
  }catch(error){
    res.status(400).send(error);
  };
  
};

// Delete an event
const deleteEvent = async (req, res) => {
  try{
    const event = Event.deleteOne({_id:req.params.id});
    res.status(200).send();
  }catch(error){
    res.status(400).send(error);
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


