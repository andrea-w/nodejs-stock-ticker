var express = require('express');
var router = express.Router();
var helpers = require("../helpers/trades")

router.route('/')
    .get(helpers.getTrades)
    .post(helpers.createTrade)

router.route('/:tradeId')
    .get(helpers.getTrade)
    .put(helpers.updateTrade)
    .delete(helpers.deleteTrade)

module.exports = router;