const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash = require('connect-flash');

require('dotenv').config();

const app = express();

app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Connect to MongoDB
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

// Express session
app.use(cookieParser('ecse428'));
app.use(session({
    secret: "ecse428",
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 1000 * 60, // 1 minute
        secure: Boolean (process.env.NODE_ENV === 'production'),
    }, 
    store: MongoStore.create({ 
        mongoUrl: CONNECTION_URL,
        autoRemove: 'interval',
        autoRemoveInterval: 1 // 1 minute
    })
}));
 
// Passport
require('./controllers/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg') 
    res.locals.error_msg = req.flash('error_msg') 
    res.locals.error = req.flash('error') 

    next(); 
});

// Routing
const usersRouter = require('./routes/users');
const drinksRouter = require('./routes/drinks');

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

