import React from 'react';

import './StartGame.scss';

import Logo from '../../common/components/Logo';
import Button from '../../common/components/Button';
import TextInput from '../../common/components/TextInput';

const StartGame = () => (
    <div className="start-game-page">
        <div className="container start-game-page__container">
            <div className="mainbar">
                <Logo className="start-game-page__logo big" />

                <div>
                    <TextInput className="player-name" placeholder="Enter Your Name" />
                </div>

                <div className="start-game-page__buttons-container">
                    <Button className="start-game-page__start-game-button">
                        Start New Game
                    </Button>
                    <Button className="start-game-page__connect-to-game-button">
                        Connect To Game
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

export default StartGame;
