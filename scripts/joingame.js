var player;

$(document).ready(function() {
    $('#timepicker').timepicker({ 'step': 5 });

    $.getJSON("/api/games", function(req, res) {
        player = document.cookie;
        console.log(player);
        getExistingGames(res.body);
    })

    $('#joinGameButton').click(function(event) {
        $('#createNewDiv').hide();
        $('#joinExistingDiv').show();
    });

    $('#createNewGameButton').click(function(event) {
        $('#joinExistingDiv').hide();
        $('#createNewDiv').show();
    });
    
    $('#submitButton').click(function(event) {
        createNewGame();
    })
});

function getExistingGames(res) {
    // add existing games to page
    // res.forEach(function(game) {
    //     var gameName = $('<li class="games">' + game.gameName + '</li>');
    // })
}

function createNewGame() {
    console.log("create new game function has been called");
    
    var name = $('#gameName').value;
    var cash = $('#startingCash').val();
    var shares = $('#quantityOfStartingShares').val();
    var endTime = $('#timepicker').timepicker('getDate');
    var digitalDice = $('#digitalDice').val();

    console.log(name, cash, shares, endTime, digitalDice);

    // PUT request to set player as broker
    $.put('/api/players/' + player._id, { isBroker: true }) // not working
        .then(function() {
            // POST request to create new game
            $.post('/api/games/', {
                    "gameName": name,
                    "endTime": endTime,
                    "broker": player.username,
                    "players": player,
                    "digitalDice": digitalDice
                })
                .then(function() {
                    console.log("Game created successfully");
                })
                .catch(function(err) {
                    console.log(err);
                })
        })
        .catch(function(err) {
            console.log(err);
        })
}

function joinExistingGame() {

}
