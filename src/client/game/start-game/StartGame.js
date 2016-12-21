import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import './StartGame.scss';

import Logo from '../../common/components/Logo';
import Button from '../../common/components/Button';
import TextInput from '../../common/components/TextInput';
import PlayerAvatarConstructor from '../../players/player-avatar/PlayerAvatarConstructor';

import { newGame, goToConnectToGame } from '../gameActions';

class StartGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            isUsernameValid: true
        };

        this.updateUsernameValidState = debounce(() => {
            this.setState({
                isUsernameValid: this.validateUsername(this.state.username)
            });
        }, 200);
    }

    validateUsername(username) {
        return !!username;
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        });

        this.updateUsernameValidState();
    }

    handleClick(callback) {
        const isUsernameValid = this.validateUsername(this.state.username);

        if (isUsernameValid) {
            callback(this.state.username);
        } else {
            this.setState({
                isUsernameValid
            });
        }
    }

    renderValidationError() {
        if (!this.state.isUsernameValid) {
            return (
                <div className="error">
                    Please enter your name
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div className="start-game-page">
                <div className="container start-game-page__container">
                    <div className="mainbar">
                        <Logo className="start-game-page__logo big" />

                        <div>
                            <TextInput
                                className="player-name"
                                placeholder="Enter Your Name"
                                value={this.state.username}
                                onChange={(e) => this.handleUsernameChange(e)}
                            />
                            {this.renderValidationError()}
                        </div>

                        <PlayerAvatarConstructor />

                        <div className="start-game-page__buttons-container">
                            <Button
                                className="start-game-page__start-game-button"
                                onClick={() => this.handleClick(this.props.newGame)}
                            >
                                Start New Game
                            </Button>
                            <Button
                                className="start-game-page__connect-to-game-button"
                                onClick={() => this.handleClick(this.props.goToConnectToGame)}
                            >
                                Connect To Game
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

StartGame.propTypes = {
    newGame: React.PropTypes.func.isRequired,
    goToConnectToGame: React.PropTypes.func.isRequired
};

export default connect(
    null,
    (dispatch) => ({
        newGame(username) { dispatch(newGame(username)); },
        goToConnectToGame(username) { dispatch(goToConnectToGame(username)); }
    })
)(StartGame);
