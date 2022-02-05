const express = require('express');
const cors = require('cors'); // enables cors 
const mongoose = require('mongoose'); // helpful for db

require('dotenv').config(); // allows to store env variables in file

const app = express();
const port = process.env.PORT || 5000; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {}); 
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to MongoDB succesfully.");
})

// routing
const usersRouter = require('./routes/users');
const drinksRouter = require('./routes/drinks');

app.use('/users', usersRouter);
app.use('/drinks', drinksRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
