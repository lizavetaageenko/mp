import React from 'react';

import './PlayersList.scss';

import Player from './Player';

const PlayersList = ({ players }) => (
    <div className="players-list">
        {players.map((player) => (
            <Player key={player.id} name={player.name} />
        ))}
    </div>
);

PlayersList.propTypes = {
    players: React.PropTypes.array
};

PlayersList.defaultProps = {
    players: [
        { id: '1', name: 'Liza 1' },
        { id: '2', name: 'Liza 2' },
        { id: '3', name: 'Liza 3' },
        { id: '4', name: 'Liza 4' },
        { id: '5', name: 'Liza 5' }
    ]
};

export default PlayersList;
