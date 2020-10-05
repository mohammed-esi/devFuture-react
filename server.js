const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const passport = require('passport');
const connectDB = require('./config/db');

const app = express();

// Passport config
require('./config/passport')(passport);

// Connect data base
connectDB();

// morgan Middleware
app.use(morgan('dev'));

// Init Middleware
app.use(express.json({ extended: false }));

// // Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);

// // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/services', require('./routes/services'));
app.use('/api/profile', require('./routes/profiles'));
app.use('/auth', require('./routes/authPassport'));

const PORT = process.env.PORT || 5500;

// Server started with port 5000
app.listen(PORT, () => console.log(`Server started with port ${PORT}`));
