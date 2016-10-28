import React from 'react';

import './GameLocations.scss';

import LocationsList from './LocationsList';
import LocationsCarousel from './LocationsCarousel';

const GameLocations = () => (
    <div className="game-locations">
        <LocationsCarousel />
        <LocationsList />
    </div>
);

export default GameLocations;
