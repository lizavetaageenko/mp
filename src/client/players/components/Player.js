import React from 'react';

import './Player.scss';

const Player = ({ name }) => (
    <div className="player">
        <div className="player-image" />
        <div className="player-name">{name}</div>
    </div>
);

Player.propTypes = {
    name: React.PropTypes.string
};

Player.defaultProps = {
    name: ''
};

export default Player;
