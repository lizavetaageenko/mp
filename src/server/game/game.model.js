const mongoose = require('mongoose');
const shortid = require('shortid');

const Schema = mongoose.Schema;
const GameSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate,
        unique: true
    },
    status: {
        type: String,
        default: 'NEW',
        enum: ['NEW', 'IN_PROGRESS', 'COMPLETED']
    },
    host: {
        type: Schema.Types.ObjectId,
        ref: 'Player',
        required: true
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player',
        required: true
    }],
    location: {
        type: String
    },
    spy: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    resolution: {
        type: String,
        enum: ['TEAM_WON', 'SPY_WON']
    }
});

GameSchema.options.toJSON = GameSchema.options.toObject = {
    transform: (doc, ret) => {
        delete ret.__v;  // eslint-disable-line no-underscore-dangle
        delete ret._id;  // eslint-disable-line no-underscore-dangle
        ret.id = doc._id.toString();  // eslint-disable-line no-underscore-dangle

        return ret;
    }
};

const GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;
