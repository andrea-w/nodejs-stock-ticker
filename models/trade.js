// define trade schema

var mongoose = require('mongoose');

var tradeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    stockName: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    stockPriceAtTrade: {
        type: Number,
        required: true
    },
    isPurchase: {
        type: Boolean,
    },
    tradeAmount: {
        type: Number,
        required: true
    }
});

var Trade = mongoose.model('Trade', tradeSchema);
module.exports = Trade;