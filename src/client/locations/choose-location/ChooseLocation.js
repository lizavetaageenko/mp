import React from 'react';

import './ChooseLocation.scss';

import Button from '../../common/components/Button';
import LocationsList from '../locations-list/LocationsList';

const ChooseLocation = () => (
    <div className="choose-location-page">
        <LocationsList />

        <div className="choose-location-page__button-container">
            <Button className="choose-location-page__choose-button">
                Choose
            </Button>
        </div>
    </div>
);

export default ChooseLocation;
