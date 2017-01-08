import React from 'react';
import { connect } from 'react-redux';

import './GameHeader.scss';

import Logo from '../../common/components/Logo';
import Player from '../../players/player/Player';

const GameHeader = ({ userData }) => (
    <div className="game-header">
        <Logo />

        <Player
            username={userData.username}
            avatar={userData.avatar}
        />
    </div>
);

GameHeader.defaultProps = {
    userData: {}
};

GameHeader.propTypes = {
    userData: React.PropTypes.object
};

export default connect(
    (state) => ({
        userData: state.players.currentPlayer
    })
)(GameHeader);
