var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
    db.Games.find()
    .then(function(games) {
        res.json(games);
    })
    .catch(function(err) {
        res.send(err);
    });
});

router.post('/', function(req, res) {
    db.Games.create(req.body)
    .then(function(newGame) {
        res.status(201).json(newGame);    
    })
    .catch(function(err) {
        res.send(err);
    })
});

module.exports = router;