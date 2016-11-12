import React from 'react';

import './GameLocations.scss';

import LocationsList from '../locations-list/LocationsList';
import LocationsCarousel from '../locations-carousel/LocationsCarousel';

const GameLocations = () => (
    <div className="game-locations">
        <LocationsCarousel />
        <LocationsList />
    </div>
);

export default GameLocations;
