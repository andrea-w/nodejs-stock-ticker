var db = require("../models");

exports.getGames = function(req, res) {
    db.Games.find()
    .then(function(games) {
        res.json(games);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.createGame = function(req, res) {
    db.Games.create(req.body)
    .then(function(newGame) {
        res.status(201).json(newGame);    
    })
    .catch(function(err) {
        res.send(err);
    })
}

exports.getGame = function(req, res) {
    db.Games.findById(req.params.gameId)
    .then(function(foundGame) {
        res.json(foundGame);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.updateGame = function(req, res) {
    db.Games.findOneAndUpdate({_id: req.params.gameId}, req.body, {new: true})
    .then(function(game) {
        res.send(game);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.deleteGame = function(req, res) {
    db.Games.remove({_id: req.params.gameId})
    .then(function() {
        res.json({message: "Game has been deleted."})
    })
    .catch(function(err) {
        res.send(err);
    });
}

module.exports = exports;