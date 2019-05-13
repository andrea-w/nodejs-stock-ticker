var express = require('express'), 
    app = express(),
    bodyParser = require('body-parser');
    
var playerRoutes = require('./routes/players');
var gameRoutes = require('./routes/games');
var tradeRoutes = require('./routes/trades');
var portfolioRoutes = require('./routes/portfolios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
    res.sendFile("index.html");
});

app.use('/api/players', playerRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/portfolios', portfolioRoutes);
    
app.listen(process.env.PORT, function() {
    console.log("App is running on port " + process.env.PORT);
});