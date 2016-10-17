import React from 'react';

import './GameHeader.scss';

import Logo from '../../common/components/Logo';

const GameHeader = () => (
    <div className="game-header">
        <Logo />

        <div className="player-name">Liza</div>
    </div>
);

export default GameHeader;
