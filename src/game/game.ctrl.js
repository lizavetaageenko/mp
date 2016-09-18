const GameModel = require('./game.model');

function addEvents(socket) {
    socket.on('new-game', (data) => {
        createNewGame(socket, data);
    });

    socket.on('connect-to-game', (data) => {
        connectToGame(socket, data);
    });
}

function getGameStatus(req, res) {
    GameModel.findOne({
        players: req.session.id
    })
        .exec()
        .then((game) => {
            const sessionData = {};

            if (game) {
                sessionData.game = game;
                sessionData.username = req.session.username;
            }

            res.send(sessionData);
        })
        .catch((error) => {
            console.log(error);
        });
}

function createNewGame(socket, userData) {
    const hostId = socket.handshake.session.id;

    if (!userData.username) {
        socket.emit('app-error', 'Username is required to start a game');
    } else {
        socket.handshake.session.username = userData.username;

        const newGame = new GameModel({
            host: hostId,
            players: [hostId]
        });

        newGame
            .save()
            .then((game) => {
                socket.emit('game-created', {
                    username: userData.username,
                    game
                });
            });
    }
}

function connectToGame() {

}

module.exports = {
    getGameStatus,
    createNewGame,
    connectToGame,
    addEvents
};
