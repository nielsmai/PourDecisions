import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRouter from './routes/users.js';
import drinksRouter from './routes/drinks.js';

const app = express();

dotenv.config(); // allows to store env variables in file

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// routing
app.use('/users', usersRouter);
app.use('/drinks', drinksRouter);

// connect to MongoDB
const CONNECTION_URL = process.env.ATLAS_URI;
mongoose.connect(CONNECTION_URL, {}); 
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to MongoDB succesfully.");
})

// mongoose.set('useFindAndModify', false); // for some deprecation things 

// if (process.env.NODE_ENV === "production"){}

const PORT = process.env.PORT; 

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
