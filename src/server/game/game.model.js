const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GameSchema = new Schema({
    status: {
        type: String,
        default: 'NEW',
        enum: ['NEW', 'IN_PROGRESS', 'COMPLETED']
    },
    host: {
        type: String,
        required: true
    },
    players: [{
        type: String,
        required: true
    }],
    location: {
        type: String
    },
    spy: {
        type: String
    },
    resolution: {
        type: String,
        enum: ['TEAM_WON', 'SPY_WON']
    }
});

const GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;
