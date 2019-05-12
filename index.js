var express = require('express'), 
    app = express(),
    bodyParser = require('body-parser');
    
var playerRoutes = require('./routes/players');
var gameRoutes = require('./routes/games');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
app.get('/', function(req, res) {
    res.send(" :-) HELLO FROM THE ROOT ROUTES ");
});

app.use('/api/players', playerRoutes);
app.use('/api/games', gameRoutes);
    
app.listen(process.env.PORT, function() {
    console.log("App is running on port " + process.env.PORT);
});