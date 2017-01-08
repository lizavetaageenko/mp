const PlayerModel = require('./player.model');

function createNewPlayer(socket, userData) {
    if (!userData || !userData.username || !userData.avatar) {
        const error = 'Username and avatar are required to start a game';

        socket.emit('app-error', error);

        return Promise.reject(error);
    }

    const newPlayer = new PlayerModel(userData);

    return newPlayer
        .save()
        .then((player) => {
            socket.handshake.session.playerId = player.id;
            socket.handshake.session.save();

            return player;
        });
}

module.exports = {
    createNewPlayer
};
