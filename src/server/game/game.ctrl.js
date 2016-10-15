const GameModel = require('./game.model');
const playerCtrl = require('../player/player.ctrl');
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
            players: req.session.playerId
        })
        .populate('host players')
        .exec()
        .then((game) => {
            res.send({game});
        })
        .catch(handleError);
}

function createNewGame(socket, userData) {
    playerCtrl.createNewPlayer(socket, userData.username)
        .then((player) => {
            const newGame = new GameModel({
                host: player._id,
                players: [player._id]
            });

            return newGame.save();
        })
        .then(populatePlayers)
        .then((game) => {
            socket.join(game._id);
            socket.emit('game-created', game);
        })
        .catch(handleError);
}

function connectToGame(socket, data) {
    Promise.all([
        GameModel.findById(data.gameId).exec(),
        playerCtrl.createNewPlayer(socket, data.username)
    ])
        .then((promises) => {
            promises[0].players.push(promises[1]._id);

            return promises[0].save();
        })
        .then(populatePlayers)
        .then((game) => {
            socket.join(game._id);
            appIO.to(game._id).emit('new-players', game);
        })
        .catch(handleError);
}

function populatePlayers(game) {
    return game.populate('host players')
        .execPopulate();
}

function handleError(error) {
    console.log(error);
}

module.exports = {
    getGameStatus,
    createNewGame,
    connectToGame,
    addEvents
};
