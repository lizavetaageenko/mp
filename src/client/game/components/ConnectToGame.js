import React from 'react';

import './ConnectToGame.scss';

import GameHeader from './GameHeader';
import Button from '../../common/components/Button';
import TextInput from '../../common/components/TextInput';

const ConnectToGame = () => (
    <div className="connect-to-game-page">
        <div className="container">
            <GameHeader />

            <div className="game-id-container">
                <TextInput
                    className="game-id"
                    placeholder="Game ID"
                />
            </div>

            <div className="buttons-container">
                <Button className="start-game">Connect</Button>
            </div>

            <div className="players">
                Players here...
            </div>
        </div>
    </div>
);

export default ConnectToGame;
