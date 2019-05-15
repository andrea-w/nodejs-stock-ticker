var player;

$(document).ready(function() {
    $('#timepicker').timepicker({'step':5});
    
    $.getJSON("/api/games", function(req, res) {
        player = req.cookies;
        getExistingGames(req, res);
    })
    
    $('#joinGameButton').click(function(event) {
        $('#createNewDiv').hide();
        $('#joinExistingDiv').show();
    });
    
    $('#createNewGameButton').click(function(event) {
        $('#joinExistingDiv').hide();
        $('#createNewDiv').show();
    });
});

function getExistingGames(req, res) {
    // add existing games to page
    res.forEach(function(game) {
        var gameName = $('<li class="games">' + game.gameName + '</li>');
    })
}

function createNewGame() {
    var name = $('#gameName').val();
    var cash = $('#startingCash').val();
    var shares = $('#quantityOfStartingShares').val();
    var endTime = $('#timepicker').timepicker('getDate');
    var digitalDice = $('#digitalDice').val();
    
    // PUT request to set player as broker
    $.put('/api/players/' + player._id, {isBroker: true});
    
    // POST request to create new game
    $.post('/api/games/', {"gameName":name,
                          "endTime":endTime,
                          "broker":player.username,
                          "players":player
                          })    
}

function joinExistingGame() {
    
}