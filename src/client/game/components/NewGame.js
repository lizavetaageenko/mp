import React from 'react';

import './NewGame.scss';

import Button from '../../common/components/Button';
import GameHeader from './GameHeader';
import PlayersList from '../../players/components/PlayersList';

const NewGame = () => (
    <div className="new-game-page">
        <div className="container">
            <div className="mainbar">
                <GameHeader />

                <div className="game-id">
                    26012016
                </div>

                <div className="buttons-container">
                    <Button className="start-game">Start</Button>
                </div>
            </div>

            <div className="sidebar new-game-players">
                <h3 className="new-game-players-title">
                    Players
                </h3>
                <PlayersList />
            </div>
        </div>
    </div>
);

export default NewGame;
