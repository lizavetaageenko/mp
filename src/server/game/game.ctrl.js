const GameModel = require('./game.model');
const playerCtrl = require('../player/player.ctrl');

function getGameStatus(req, res) {
    GameModel
        .findOne({
            players: req.session.playerId
        })
        .populate('host players spy')
        .exec()
        .then((game) => {
            res.send({ game });
        })
        .catch(handleError);
}

function createNewGame(socket, userData) {
    playerCtrl
        .createNewPlayer(socket, userData)
        .then((player) => {
            const newGame = new GameModel({
                host: player.id,
                players: [player.id]
            });

            return newGame.save();
        })
        .then(populatePlayers)
        .then((game) => {
            socket.join(game.id);
            socket.emit('game-created', game);
        })
        .catch(handleError);
}

function connectToGame(socket, io, data) {
    Promise
        .all([
            GameModel.findById(data.gameId).exec(),
            playerCtrl.createNewPlayer(socket, data.userData)
        ])
        .then((promises) => {
            promises[0].players.push(promises[1].id);

            return promises[0].save();
        })
        .then(populatePlayers)
        .then((game) => {
            socket.join(game.id);
            io.to(game.id).emit('new-players', game);
        })
        .catch(handleError);
}

function startGame(socket, io) {
    GameModel
        .findOne({
            host: socket.handshake.session.playerId
        })
        .exec()
        .then((game) => {
            game.status = 'IN_PROGRESS';
            game.spy = chooseSpy(game.players);

            return game.save();
        })
        .then(populatePlayers)
        .then((game) => {
            io.to(game.id).emit('game-started', game);
        })
        .catch(handleError);
}

function populatePlayers(game) {
    return game
        .populate('host players spy')
        .execPopulate();
}

function chooseSpy(players) {
    return players[Math.floor(Math.random() * (players.length + 1))];
}

function handleError(error) {
    console.log(error);
}

module.exports = {
    getGameStatus,
    createNewGame,
    connectToGame,
    startGame
};
