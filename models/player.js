// define player schema
var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Username is required'
    },
    isBroker: {
        type: Boolean,
        default: false
    },
    portfolio: {
        type: {
            $ref: "portfolio"
        }
    },
    tradeHistory: {
        type: Array,
        items: {
            $ref: "trade"
        }
    }
});

var Player = new mongoose.model('Player', playerSchema);
module.exports = Player;