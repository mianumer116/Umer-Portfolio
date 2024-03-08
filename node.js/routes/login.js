const express = require('express');
const mongoose = require('mongoose');

// Your mongoose-related code here

const routes = express.Router();
const { getuser, setuser } = require('../controllers/auth.js');
const { logins } = require('../models/todo.js');

routes.get('/', async function (req, res) {
  try {

    const token = req.cookies.token;


    if (!token) {
      return res.render('login');
    }

    const user = await getuser(token);

    if (!user) {
      return res.render('login');
    }

    if(user){
      res.render('crypto')
    }
  } catch (error) {
    console.error('Error in GET route:', error);
    res.status(500).send('Internal Server Error');
  }
});

routes.post('/', async function (req, res) {
  try {
    console.log('req coming');
    const { email, password } = req.body;
    console.log({ email, password });

    const result = await logins.findOne({ email, password });

    if (result) {
      const token = setuser(result);
      const oneWeekInSeconds = 7 * 24 * 60 * 60;
      const expirationDate = new Date(Date.now() + oneWeekInSeconds * 1000);
      res.cookie('token', token, { expires: expirationDate, httpOnly: true }).render('crypto');
    } else {
      res.send('Check your Email and Password and try again');
    }
  } catch (error) {
    console.error('Error in POST route:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = routes;
