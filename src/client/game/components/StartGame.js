import React from 'react';

import './StartGame.scss';

import Logo from '../../common/components/Logo';
import Button from '../../common/components/Button';
import TextInput from '../../common/components/TextInput';

const StartGame = () => (
    <div className="start-game-page">
        <div className="container">
            <div className="mainbar">
                <Logo className="big" />

                <div className="player-name-container">
                    <TextInput
                        className="player-name"
                        placeholder="Enter Your Name"
                    />
                </div>

                <div className="buttons-container">
                    <Button className="start-game">Start New Game</Button>
                    <Button className="connect-to-game">Connect To Game</Button>
                </div>
            </div>
        </div>
    </div>
);

export default StartGame;
