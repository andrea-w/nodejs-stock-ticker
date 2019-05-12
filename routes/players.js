var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
    db.Players.find()
    .then(function(players) {
        res.json(players);
    })
    .catch(function(err) {
        res.send(err);
    });
});

router.post('/', function(req, res) {
    db.Players.create(req.body)
    .then(function(newPlayer) {
        res.status(201).json(newPlayer);    
    })
    .catch(function(err) {
        res.send(err);
    })
});

module.exports = router;