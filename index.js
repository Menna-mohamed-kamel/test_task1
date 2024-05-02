const { app } = require('./app')
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    try {
        await mongoose.connect("mongodb+srv://project:qYUjYNBkvxqt5n5G@cluster0.fs3bt3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Event_Management");
        console.log('MongoDB connected successfully');
        console.log(`Listening on port ${port} ...`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
});