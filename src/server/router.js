const Game = require('./game/game.js');

exports.addRoutes = function (app) {
    app.get('/game', function (req, res) {
        const session = req.session;

        console.log('New request:');
        console.log(session.id);

        res.send(Game.createNewGame(session.id));
    });

    app.get('/test', function (req, res) {
        res.send({text: 'Test!!!'});
    });
};