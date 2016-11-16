import React from 'react';
import { connect } from 'react-redux';

import './GameHeader.scss';

import Logo from '../../common/components/Logo';

const GameHeader = ({ username }) => (
    <div className="game-header">
        <Logo />

        <div className="player-name">{username}</div>
    </div>
);

GameHeader.defaultProps = {
    username: ''
};

GameHeader.propTypes = {
    username: React.PropTypes.string
};

export default connect(
    (state) => ({
        username: state.players.currentPlayer.username
    })
)(GameHeader);
