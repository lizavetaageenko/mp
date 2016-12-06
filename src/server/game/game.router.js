const gameController = require('./game.ctrl');

exports.init = (app) => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        next();
    });

    app.get('/game-status', gameController.getGameStatus);
};
