import React from 'react';

import GameHeader from './GameHeader';

const GameContainer = ({ children }) => (
    <div>
        <GameHeader />
        {children}
    </div>
);

GameContainer.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default GameContainer;
