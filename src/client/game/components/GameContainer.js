import React from 'react';

import './GameContainer.scss';

import GameHeader from './GameHeader';
import Timer from '../../common/components/Timer';

const GameContainer = ({ children }) => (
    <div className="game-container container">
        <div className="game-container__mainbar mainbar">
            <GameHeader />
            <div className="game-container__timer">
                <Timer>
                    5:48
                </Timer>
            </div>
            {children}
        </div>
    </div>

);

GameContainer.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default GameContainer;
