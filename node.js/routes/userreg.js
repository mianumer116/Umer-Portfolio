const express = require('express');
const routes = express.Router();
const { logins } = require('../models/todo.js');  // Correct the import statement

routes.post('/', async function (req, res) {
    try {
        const { email, password } = req.body;

        // Use logins model to create a new document
        const result = await logins.create({ email, password });

        if (result) {
            res.send("User Successfully saved");
        } else {
            res.send("Check your email and password and try again. User not registered.");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = routes;
