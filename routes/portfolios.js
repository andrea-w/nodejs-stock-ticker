var express = require('express');
var router = express.Router();
var helpers = require("../helpers/portfolios")

router.route('/')
    .get(helpers.getPortfolios)
    .post(helpers.createPortfolio)

router.route('/:portfolioId')
    .get(helpers.getPortfolio)
    .put(helpers.updatePortfolio)
    .delete(helpers.deletePortfolio)

module.exports = router;