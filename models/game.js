// define game schema

var mongoose = require("mongoose");

var gameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        default: Date.now
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: Date
    },
    timeRemaining: {
        type: Date
    },
    stockPrices: {
        oil: {
            type: Number,
            default: 100
        },
        grain: {
            type: Number,
            default: 100
        },
        gold: {
            type: Number,
            default: 100
        },
        silver: {
            type: Number,
            default: 100
        },
        bonds: {
            type: Number,
            default: 100
        },
        industrial: {
            type: Number,
            default: 100
        }
    },
    broker: {
        type: String,
        required: 'Game requires a broker'
    },
    players: {
        type: Array,
        items: {
            $ref: "player"
        }
    },
    currentPlayerTurn: {
        type: String
    }
});

var Game = mongoose.model('Game', gameSchema);
module.exports = Game;