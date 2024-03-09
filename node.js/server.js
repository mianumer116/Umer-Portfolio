const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const upload = multer();
const cors = require('cors');




const app = express();
const port = 3000;
app.use(cors());
// Enable form-data parsing middleware for file uploads
app.use(upload.none());
app.use(cookieParser());
// Set the views directory (optional, as 'views' is the default)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const mongoURI = 'mongodb+srv://umer:umer@cluster0.avg1bjf.mongodb.net/railway?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Body parsers should be placed before route definitions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
const loginRoutes = require('./routes/login');
const reglogin=require('./routes/reglogin')
const userreg=require('./routes/userreg')
const tradingsignal=require('./routes/tradingsignals')
const crypto=require('./routes/cryptocourse')
const frontend=require('./routes/frontend')
 const backend=require('./routes/backend')
 const help=require('./routes/help')
app.use('/login', loginRoutes);
app.use('/reglogin',reglogin)
app.use('/reguser',userreg)
app.use('/tradingsignal',tradingsignal)
app.use('/cryptocourse',crypto)
app.use('/frontend',frontend)
app.use('/backend',backend)
app.use('/help',help)
// Start the server
app.listen(port, () => {
    console.log('Server is listening on Port', port);
});
