const gameController = require('./game.ctrl');

exports.init = (app) => {
    app.get('/game-status', gameController.getGameStatus);
};
