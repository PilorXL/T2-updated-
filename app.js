const express = require("express");
const app = express();

const fs = require('fs');

const data = require('./entries.json');
const date = data;


app.use(express.static('client'));

app.get('/', function(req, res){
    res.sendFile('./index.html');
});

app.post('/add', function(req, res){
    const key = req.body.key;
    const workout = req.body.workout;
    date[key] = workout;
    fs.writeFileSync(data, JSON.stringify(date));
    resp.send(date)
});


app.get('/manage', function(req, res){
    const dateKey = Object.keys(date);
    resp.send(dateKey)
});

module.exports = app;