import React from 'react';

import Location from './Location';

const LocationsList = ({ locations }) => (
    <div className="locations">
        {
            locations.map(({ id, name }) => (
                <Location
                    key={id}
                    name={name}
                />
            ))
        }
    </div>
);

export default LocationsList;

LocationsList.propTypes = {
    locations: React.PropTypes.array
};

LocationsList.defaultProps = {
    locations: [
        { id: '1', name: 'Hospital' },
        { id: '2', name: 'Police' },
        { id: '3', name: 'School' },
        { id: '4', name: 'Office' },
        { id: '5', name: 'Theatre' }
    ]
};
