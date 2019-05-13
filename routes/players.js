var express = require('express');
var router = express.Router();
var helpers = require("../helpers/players")

router.route('/')
    .get(helpers.getPlayers)
    .post(helpers.createPlayer)

router.route('/:playerId')
    .get(helpers.getPlayer)
    .put(helpers.updatePlayer)


module.exports = router;