const { app } = require('./app')
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
app.listen(port,async () => {
    await mongoose.connect("mongodb+srv://Mai:dE0FCQtQ3iVreT3n@cluster0.3ddnegd.mongodb.net/Event");
    console.log(`listening on port ${port} ...`);
});