const LocationModel = require('../location/location.model');

function populate() {
    const stubLocations = [
        {name: 'School'},
        {name: 'Hospital'},
        {name: 'Shopping Mall'},
        {name: 'Cinema'},
        {name: 'Office'},
        {name: 'Pub'},
        {name: 'Cruise Liner'},
        {name: 'Restaurant'},
        {name: 'Theatre'},
        {name: 'Gas Station'}
    ];

    LocationModel
        .find()
        .exec()
        .then((locations) => {
            if (locations.length) {
                return locations;
            }

            return LocationModel.create(stubLocations);
        })
        .then((locations) => {
            console.log(`There are ${locations.length} locations in db`);
        });
}

module.exports = {
    populate
};
