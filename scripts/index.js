/* global $ */

$(document).ready(function() {
    $('#newPlayerUsernameInput').submit(function(event) {
        var usernameInput = $('#newPlayerUsernameInput').username.val();
        console.log(usernameInput);
        $.post('/api/players', {username: usernameInput})
        .then(function(newPlayer) {
            console.log(newPlayer);
            window.location.href = "joingame.html"
        })
        .catch(function(err) {
            console.log(err);
        })
    });
});