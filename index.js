const { app } = require('./app')



app.get('/',(req,res) =>{
  res.send('Hello World!');
});

app.get('/api/events',(req,res) =>{
  res.send(events);
});

app.get('/api/events/:id',(req,res) =>{
  const event = events.find(c => c.id === parseInt(req.params.id));
  if(!event){
      res.status(404).send(`The Event with the given ID not found !`);
  }else{
      res.send(event);
  }
});

app.get('/api/events/:year/:month',(req,res) =>{
  res.send(req.params);
});

app.get('/api/events/:year/:month',(req,res) =>{
  res.send(req.query);
});




// DELETE API endpoint
app.delete('/api/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const eventIndex = events.findIndex(c => c.id === eventId);

  if (eventIndex === -1) {
    res.status(404).send(`Event with ID ${eventId} not found!`);
  } else {
    events.splice(eventIndex, 1); // Remove event from array
    res.status(200).send(`Event with ID ${eventId} deleted successfully!`);
  }
});


app.put('/api/events/:id', (req, res) => {
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
});


const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port} ...`));
