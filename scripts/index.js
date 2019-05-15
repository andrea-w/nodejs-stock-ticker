$(document).ready(function(req, res) {
    $('#newPlayerUsernameInput').keypress(function(event) {
        if (event.which == 13) {
            createNewPlayer(req, res);
            next();
        }
    });
});

function createNewPlayer(req, res) {
    var usernameInput = $('#newPlayerUsernameInput').val();
    $.post('/api/players', { username: usernameInput })
    .then(function(req, res) {
        console.log(res);
        
        // create cookie for username
        res.cookie('username', res.username, {path: '/'});
    })
    .catch(function(err) {
        console.log(err);
    })
}

function next() {
    window.location.assign("../joingame.html");
}
