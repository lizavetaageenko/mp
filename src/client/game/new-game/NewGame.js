import React from 'react';
import { connect } from 'react-redux';

import './NewGame.scss';

import Button from '../../common/components/Button';
import GameHeader from '../game-header/GameHeader';

import { createQCCode } from '../gameActions';

const NewGame = (props) => (
    <div className="new-game-page">
        <div className="container new-game-page__container">
            <div className="mainbar new-game-page__mainbar">
                <GameHeader />

                <div className="new-game-page__game-id">
                    {props.gameId}
                </div>

                <Button
                    className="new-game-page__scan-game-button"
                    onClick={() => props.showQRCode(props.gameId)}
                >
                    Show QR-code
                </Button>

                <div>
                    <Button className="new-game-page__start-game-button">
                        Start
                    </Button>
                </div>
            </div>

            <div className="sidebar new-game-page__players">
                <img className="new-game-page__qr-code" src={props.QRCode} alt="QR Code" />
            </div>
        </div>
    </div>
);

NewGame.defaultProps = {
    gameId: ''
};

NewGame.propTypes = {
    gameId: React.PropTypes.string,
    QRCode: React.PropTypes.string,
    showQRCode: React.PropTypes.func.isRequired
};

export default connect(
    (state) => ({
        gameId: state.game.id,
        QRCode: state.game.QRCode
    }),
    (dispatch) => ({
        showQRCode(gameId) {
            dispatch(createQCCode(gameId));
        }
    })
)(NewGame);
