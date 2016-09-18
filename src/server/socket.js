const socketio = require('socket.io');
const expressSocketioSession = require('express-socket.io-session');
const GameController = require('../game/game.ctrl');

exports.init = function (app, session) {
    const io = socketio(app);

    io.use(expressSocketioSession(session, {
        autoSave: true
    }));

    io.on('connection', (socket) => {
        socket.emit('connected');

        GameController.addEvents(socket);
    });
};
