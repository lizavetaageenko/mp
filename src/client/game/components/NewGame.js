import React from 'react';

import './NewGame.scss';

import Button from '../../common/components/Button';
import GameHeader from './GameHeader';
import PlayersList from '../../players/components/PlayersList';

const NewGame = () => (
    <div className="new-game-page">
        <div className="container new-game-page__container">
            <div className="mainbar new-game-page__mainbar">
                <GameHeader />

                <div className="new-game-page__game-id">
                    26012016
                </div>

                <div>
                    <Button className="new-game-page__start-game-button">
                        Start
                    </Button>
                </div>
            </div>

            <div className="sidebar new-game-page__players">
                <h3 className="new-game-page__players-title">
                    Players
                </h3>
                <PlayersList />
            </div>
        </div>
    </div>
);

export default NewGame;
