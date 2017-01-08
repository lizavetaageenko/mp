import React from 'react';
import { connect } from 'react-redux';

import './PlayersList.scss';

import Player from '../player/Player';

const PlayersList = ({ players, currentPlayerId }) => (
    <div className="players-list">
        {
            players
                .filter((player) => (
                    player.id !== currentPlayerId
                ))
                .map((player) => (
                    <Player key={player.id} username={player.username} avatar={player.avatar} />
                ))
        }
    </div>
);

PlayersList.propTypes = {
    players: React.PropTypes.array,
    currentPlayerId: React.PropTypes.string
};


PlayersList.defaultProps = {
    players: [],
    currentPlayerId: null
};

export default connect(
    (state) => ({
        players: state.players.allPlayers,
        currentPlayerId: state.players.currentPlayer.id
    })
)(PlayersList);

