const mongoose = require('mongoose');

exports.init = function () {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/spy-game');

    const db = mongoose.connection;

    db.on('error', (error) => {
        console.error('connection error:', error);
    });

    db.once('open', () => {
        console.log('Connected to the db successfully');
    });

    return db;
};
