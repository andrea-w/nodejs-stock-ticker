/* global $ */

var endTime;

$(document).ready(function() {
    $('input.timepicker').timepicker({
        interval: 5,
        change: function(time) {
            endTime = time;
        }
    });

    $.getJSON("/api/games", function(req, res) {
        var player = JSON.parse(Cookies.get("player"));
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

    $('#submitButton').onclick = function() {
        createNewGame();
    }
});

function getExistingGames(res) {
    // add existing games to page
    // res.forEach(function(game) {
    //     var gameName = $('<li class="games">' + game.gameName + '</li>');
    // })
}

function createNewGame() {
    console.log("create new game function has been called");

    var name = document.getElementById('gameName').value;
    var cash = document.getElementById('startingCash').value;
    var shares = document.getElementById('quantityOfStartingShares').value;
    var endTime = $('timepicker').timepicker('getDate');
    var digitalDice = document.getElementById('digitalDice').value;

    console.log(name, cash, shares, endTime, digitalDice);

    // PUT request to set player as broker
    var player = JSON.parse(Cookies.get("player"));
    var playerId = player._id;
    var updateData = { isBroker: true }
    $.ajax({
            method: 'PUT',
            url: '/api/players/' + playerId,
            data: updateData
        })
        .then(function(updatedPlayer) {
            console.log(updatedPlayer);
            Cookies.remove("player");
            Cookies.set("player", updatedPlayer);
        })
        .catch(function(err) {
            console.log(err);
        })

    // POST request to create new game
    $.post('/api/games/', {
            "gameName": name,
            "endTime": endTime,
            "broker": player.username,
            "players": player,
            "digitalDice": digitalDice
        })
        .then(function(data) {
            console.log("Game created successfully");
            console.log(data);
        })
        .catch(function(err) {
            console.log(err);
        })
}

function joinExistingGame() {

}
