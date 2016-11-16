import React from 'react';
import { connect } from 'react-redux';

import './NewGame.scss';

import Button from '../../common/components/Button';
import GameHeader from '../game-header/GameHeader';
import PlayersList from '../../players/players-list/PlayersList';

const NewGame = ({ gameId }) => (
    <div className="new-game-page">
        <div className="container new-game-page__container">
            <div className="mainbar new-game-page__mainbar">
                <GameHeader />

                <div className="new-game-page__game-id">
                    {gameId}
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

NewGame.defaultProps = {
    gameId: ''
};

NewGame.propTypes = {
    gameId: React.PropTypes.string
};

export default connect(
    (state) => ({
        gameId: state.game.id
    })
)(NewGame);
