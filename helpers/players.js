var db = require("../models");

exports.getPlayers = function(req, res) {
    db.Players.find()
    .then(function(players) {
        res.json(players);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.createPlayer = function(req, res) {
    console.log(req.body);
    db.Players.create(req.body)
    .then(function(newPlayer) {
        res.status(201).cookie('player', newPlayer).json(newPlayer);
    })
    .catch(function(err) {
        res.send(err);
    })
}

exports.getPlayer = function(req, res) {
   db.Players.findById(req.params.playerId)
   .then(function(player) {
       res.json(player);
   })
   .catch(function(err) {
       res.send(err);
   });
}

exports.updatePlayer = function(req, res) {
    db.Players.findOneAndUpdate({_id: req.params.playerId}, req.body, {new: true})
    .then(function(player) {
        res.send(player);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.deletePlayer = function(req, res) {
    console.log(req.params);
    db.Players.remove({_id:req.params.playerId})
    .then(function() {
        res.status(204).json({message: "Player has been deleted."})
    })
    .catch(function(err) {
        res.json({message: err})
    })
}