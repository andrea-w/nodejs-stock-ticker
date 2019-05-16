$(document).ready(function(req, res) {
    $('#newPlayerUsernameInput').keypress(function(event) {
        if (event.which == 13) {
            createNewPlayer();
        }
    });
});

function createNewPlayer() {
    var usernameInput = $('#newPlayerUsernameInput').val();
    console.log(usernameInput);
    $.post('/api/players/', { username: usernameInput })
    .then(function(req, res) {
        console.log(res);
        next();
    })
    .catch(function(err) {
        console.log(err);
    })
}

function next() {
    window.location.assign("../joingame.html");
}
