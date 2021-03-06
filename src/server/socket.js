const socketio = require('socket.io');
const expressSocketioSession = require('express-socket.io-session');
const gameController = require('./game/game.ctrl');

exports.init = function (app, session) {
    const io = socketio(app);

    io.use(expressSocketioSession(session, {
        autoSave: true
    }));

    io.on('connection', (socket) => {
        socket.emit('connected');

        socket.on('new-game', (data) => {
            gameController.createNewGame(socket, data);
        });

        socket.on('connect-to-game', (data) => {
            gameController.connectToGame(socket, io, data);
        });

        socket.on('start-game', () => {
            gameController.startGame(socket, io);
        });
    });
};
