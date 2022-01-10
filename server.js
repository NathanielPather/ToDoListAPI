var express = require('express');
const mongoose = require('mongoose');
app = express(),
port = process.env.port || 3000;

// moodel loading here
Task = require('./api/models/ToDoListModel');
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// importing route
var routes = require('./api/routes/ToDoListRoutes');
// register the route
routes(app);

// route not found middleware
app.use(function(req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
})

app.listen(port);

console.log('ToDo List RESTful API server started on: ' + port);