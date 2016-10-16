const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    }
});

const LocationModel = mongoose.model('Location', LocationSchema);

module.exports = LocationModel;
