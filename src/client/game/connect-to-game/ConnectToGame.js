import React from 'react';

import './ConnectToGame.scss';

import GameHeader from '../game-header/GameHeader';
import Button from '../../common/components/Button';
import TextInput from '../../common/components/TextInput';
import PlayersList from '../../players/players-list/PlayersList';

const ConnectToGame = () => (
    <div className="connect-to-game-page">
        <div className="container connect-to-game-page__container">
            <div className="mainbar connect-to-game-page__mainbar">
                <GameHeader />

                <div>
                    <TextInput
                        className="connect-to-game-page__game-id"
                        placeholder="Game ID"
                    />
                </div>

                <div>
                    <Button className="connect-to-game-page__start-game-button">
                        Connect
                    </Button>
                </div>
            </div>

            <div className="sidebar connect-to-game-page__players">
                <h3 className="connect-to-game-page__players-title">
                    Players
                </h3>
                <PlayersList />
            </div>
        </div>
    </div>
);

export default ConnectToGame;
