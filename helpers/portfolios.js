var db = require('../models');

exports.getPortfolios = function(req, res) {
    db.Portfolios.find()
    .then(function(portfolios) {
        res.json(portfolios);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.createPortfolio = function(req, res) {
    db.Portfolios.create(req.body)
    .then(function(newPortfolio) {
        res.status(201).json(newPortfolio);    
    })
    .catch(function(err) {
        res.send(err);
    })
}

exports.getPortfolio = function(req, res) {
    db.Portfolios.findById(req.params.portfolioId)
    .then(function(foundPortfolio) {
        res.json(foundPortfolio);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.updatePortfolio = function(req, res) {
    db.Portfolios.findOneAndUpdate({_id: req.params.portfolioId}, req.body, {new: true})
    .then(function(portfolio) {
        res.send(portfolio);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.deletePortfolio = function(req, res) {
    db.Portfolios.remove({_id: req.params.portfolioId})
    .then(function() {
        res.json({message: "Portfolio has been deleted."})
    })
    .catch(function(err) {
        res.send(err);
    });
}