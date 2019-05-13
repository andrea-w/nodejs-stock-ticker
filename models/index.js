// connect to Mongoose
var mongoose = require('mongoose');
mongoose.set('debug', true);

try {
    mongoose.connect('mongodb://localhost/stock-api', { useNewUrlParser: true });
    mongoose.Promise = Promise;
}
catch (err) {
    console.log(err);
}


module.exports.Portfolios = require("./portfolio");
module.exports.Players = require("./player");
module.exports.Trades = require("./trade");
module.exports.Games = require("./game");
