const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PlayerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: Object,
        required: true
    }
});

const PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;
