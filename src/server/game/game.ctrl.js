const GameModel = require('./game.model');
var appIO;

function addEvents(socket, io) {
    appIO = io;

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
            res.send({
                game
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

function createNewGame(socket, userData) {
    if (!userData.username) {
        socket.emit('app-error', 'Username is required to start a game');
    } else {
        const hostId = socket.handshake.session.id;
        const newGame = new GameModel({
            host: hostId,
            players: [{
                id: hostId,
                username: userData.username
            }]
        });

        socket.handshake.session.username = userData.username;

        newGame
            .save()
            .then((game) => {
                socket.join(game._id);
                socket.emit('game-created', game);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

function connectToGame(socket, data) {
    if (!data.username) {
        socket.emit('app-error', 'Username is required to start a game');
    } else {
        const playerId = socket.handshake.session.id;

        socket.handshake.session.username = data.username;

        GameModel.findById(data.gameId)
            .exec()
            .then((game) => {
                game.players.push({
                    id: playerId,
                    username: data.username
                });

                return game.save();
            })
            .then((game) => {
                socket.join(game._id);
                appIO.to(game._id).emit('new-players', game);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

module.exports = {
    getGameStatus,
    createNewGame,
    connectToGame,
    addEvents
};
