const PlayerModel = require('./player.model');

function createNewPlayer(socket, username) {
    if (!username) {
        const error = 'Username is required to start a game';

        socket.emit('app-error', error);

        return Promise.reject(error);
    }

    const newPlayer = new PlayerModel({
        name: username
    });

    return newPlayer
        .save()
        .then((player) => {
            socket.handshake.session.playerId = player._id;
            socket.handshake.session.save();

            return player;
        });
}

module.exports = {
    createNewPlayer
};
