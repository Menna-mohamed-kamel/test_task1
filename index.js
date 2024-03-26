const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());

const events = [
    { id: 1, name: 'Event 1', date: '2024-04-01', location: 'Venue 1' },
    { id: 2, name: 'Event 2', date: '2024-04-15', location: 'Venue 2' }
];

function validateEvent(event) {
    const schema = Joi.object({
      name: Joi.string().required(),
      date: Joi.string().isoDate().required(),
      location: Joi.string().required(),
    });
  
    const { error } = schema.validate(event);
    return error ? error.details[0].message : null;
}

app.post('/api/events', (req, res) => {
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
  
    
    events.push(newEvent);
    res.status(201).send('Event added successfully');
    res.send(event)
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port} ...`));