const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const users = require('./routes/users');
const auth = require('./routes/auth')
const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const { unique } = require('joi/lib/types/array');
const app = express();

mongoose.connect('mongodb://localhost/movies')
 .then(() => console.log('Connected to MongoDB'))
 .catch(() => console.log('Could not connect to MongoDB'))

app.use(express.json());
app.use('/api/genres',genres);
app.use('/api/customers',customers);
app.use('/api/movies',movies);
app.use('/api/users',users);
app.use('/api/auth',auth);

const port = process.env.PORT || 4500;
app.listen(port, () => console.log(`Listening to port ${port}.....`))


