import React from 'react';

import './NewGame.scss';

import Button from '../../common/components/Button';
import GameHeader from './GameHeader';

const NewGame = () => (
    <div className="new-game-page">
        <div className="container">
            <GameHeader />

            <div className="game-id">
                1020492930bde3ed23d
            </div>

            <div className="buttons-container">
                <Button className="start-game">Start</Button>
            </div>

            <div className="players">
                Players here...
            </div>
        </div>
    </div>
);

export default NewGame;
