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

PlayerSchema.options.toJSON = PlayerSchema.options.toObject = {
    transform: (doc, ret) => {
        delete ret.__v;  // eslint-disable-line no-underscore-dangle
        delete ret._id;  // eslint-disable-line no-underscore-dangle
        ret.id = doc._id.toString();  // eslint-disable-line no-underscore-dangle

        return ret;
    }
};

const PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;
