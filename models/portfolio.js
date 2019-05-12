// define portfolio schema

var mongoose = require('mongoose');

var portfolioSchema = new mongoose.Schema({
    cash: {
        type: Number,
        required: true,
        default: 0
    },
    bonds: {
        type: Number,
        required: true,
        default: 0
    },
    industrials: {
        type: Number,
        required: true,
        default: 0
    },
    silver: {
        type: Number,
        required: true,
        default: 0
    },
    gold: {
        type: Number,
        required: true,
        default: 0
    },
    oil: {
        type: Number,
        required: true,
        default: 0        
    },
    grain: {
        type: Number,
        required: true,
        default: 0        
    },
    netWorth: {
        type: Number,
        required: true,
        default: 0
    }
});

var Portfolio = mongoose.model('Portfolio', portfolioSchema);
module.exports = Portfolio;
