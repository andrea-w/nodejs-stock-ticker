$(document).ready(function() {
    $('#newPlayerUsernameInput').keypress(function(event) {
        if (event.which == 13) {
            console.log("You hit ENTER");
            createNewPlayer();
        }
    })
});

function createNewPlayer() {
    var usernameInput = $('#newPlayerUsernameInput').val();
    $.post('/api/players', { username: usernameInput })
    .then(function(newPlayer) {
        console.log("New player created");
        console.log(newPlayer);
    })
    .catch(function(err) {
        console.log(err);
    })
}
