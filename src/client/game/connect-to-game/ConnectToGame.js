import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import shortid from 'shortid';

import './ConnectToGame.scss';

import GameHeader from '../game-header/GameHeader';
import Button from '../../common/components/Button';
import TextInput from '../../common/components/TextInput';
import PlayersList from '../../players/players-list/PlayersList';
import { connectToGame } from '../gameActions';

class ConnectToGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameId: '',
            fakeIsConnected: false,
            isGameIdValid: true
        };

        this.updateGameIdValidState = debounce(() => {
            this.setState({
                isGameIdValid: this.validateGameId(this.state.gameId)
            });
        }, 200);
    }

    handleGameIdChange(e) {
        this.setState({
            gameId: e.target.value
        });

        this.updateGameIdValidState();
    }

    handleConnectToGameClick() {
        const { gameId } = this.state;
        const isGameIdValid = this.validateGameId(gameId);

        if (isGameIdValid) {
            this.props.connectToGame(gameId);

            this.setState({
                fakeIsConnected: true
            });
        } else {
            this.setState({
                isGameIdValid
            });
        }
    }

    validateGameId(gameId) {
        return shortid.isValid(gameId);
    }

    renderValidationError() {
        if (!this.state.isGameIdValid) {
            return (
                <div className="error">
                    Seems Game ID is invalid. Sorry
                </div>
            );
        }

        return null;
    }

    render() {
        const { gameId, fakeIsConnected } = this.state;

        return (<div className="connect-to-game-page">
            <div className="container connect-to-game-page__container">
                <div className="mainbar connect-to-game-page__mainbar">
                    <GameHeader />

                    <div>
                        <TextInput
                            className="connect-to-game-page__game-id"
                            placeholder="Game ID"
                            value={gameId}
                            onChange={(e) => this.handleGameIdChange(e)}
                        />
                        {this.renderValidationError()}
                    </div>

                    <div>
                        <Button
                            className="connect-to-game-page__start-game-button"
                            onClick={() => this.handleConnectToGameClick()}
                            disabled={fakeIsConnected}
                        >
                            {fakeIsConnected ? 'Connected' : 'Connect'}
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
        </div>);
    }
}

ConnectToGame.propTypes = {
    connectToGame: React.PropTypes.func.isRequired
};

export default connect(
    null,
    (dispatch) => ({
        connectToGame(gameId) { dispatch(connectToGame(gameId)); }
    })
)(ConnectToGame);
