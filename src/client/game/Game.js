import React from 'react';

import './Game.scss';

import Button from '../common/components/Button';
import GameCard from './game-cart/GameCard';

const Game = () => (
    <div className="game-page">
        <GameCard />
        <div className="game-page__buttons-container">
            <Button className="game-page__check-locations-button">
                Check Locations
            </Button>
            <Button className="game-page__vote">
                Vote for Spy
            </Button>
        </div>
    </div>
);


Game.propTypes = {
    className: React.PropTypes.string
};

Game.defaultProps = {
    className: ''
};

export default Game;
