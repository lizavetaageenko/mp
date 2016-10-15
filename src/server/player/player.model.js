const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;
