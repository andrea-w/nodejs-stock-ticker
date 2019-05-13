var db = require('../models');

exports.getTrades = function(req, res) {
    db.Trades.find()
    .then(function(trades) {
        res.json(trades);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.createTrade = function(req, res) {
    db.Trades.create(req.body)
    .then(function(newTrade) {
        res.status(201).json(newTrade);    
    })
    .catch(function(err) {
        res.send(err);
    })
}

exports.getTrade = function(req, res) {
    db.Trades.findById(req.params.tradeId)
    .then(function(foundTrade) {
        res.json(foundTrade);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.updateTrade = function(req, res) {
    db.Games.findOneAndUpdate({_id: req.params.tradeId}, req.body, {new: true})
    .then(function(trade) {
        res.send(trade);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.deleteTrade = function(req, res) {
    db.Trades.remove({_id: req.params.tradeId})
    .then(function() {
        res.json({message: "Trade has been deleted."})
    })
    .catch(function(err) {
        res.send(err);
    });
}