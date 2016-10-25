import React from 'react';

import './GameCard.scss';

const GameCard = ({ className }) => (
    <div
        className={`game-card ${className}`}
    />
);

GameCard.propTypes = {
    className: React.PropTypes.string
};

GameCard.defaultProps = {
    className: ''
};

export default GameCard;
