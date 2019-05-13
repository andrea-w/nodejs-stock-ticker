var express = require('express');
var router = express.Router();
var helpers = require("../helpers/games");

router.route('/')
    .get(helpers.getGames)
    .post(helpers.createGame)

router.route('/:gameId')
    .get(helpers.getGame)
    .put(helpers.updateGame)
    .delete(helpers.deleteGame)

module.exports = router;