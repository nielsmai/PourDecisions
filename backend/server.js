const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');

const usersRouter = require('./routes/users');
const drinksRouter = require('./routes/drinks');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// connect to MongoDB
var CONNECTION_URL;
if (process.env.NODE_ENV === "production"){
    CONNECTION_URL = process.env.ATLAS_URI;
}else{
    CONNECTION_URL = process.env.DEV_URI;
}
mongoose.connect(CONNECTION_URL, {}); 
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to MongoDB succesfully.");
})

app.use(cookieParser());
app.use(session({
    secret: "somekey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 12 },
    store: MongoStore.create({ 
        mongoUrl: CONNECTION_URL
    })
}));
 
// routing
app.use('/users', usersRouter);
app.use('/drinks', drinksRouter);

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (_req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    });
} else {
    app.get('/', (_req, res) => {
        res.send("API running.");
    });
}

const PORT = process.env.PORT; 

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

