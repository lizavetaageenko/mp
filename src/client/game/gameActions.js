import fetch from 'isomorphic-fetch';
import { hashHistory } from 'react-router';
import qrcode from 'qrcode-js';

import { JSPY_WEB_API } from '../endpoints';
import { SOCKET_IO_EVENT } from '../socket';
import { setCurrentPlayer } from '../players/playersActions';

export const getGameStatus = () => () => {
    fetch(`${JSPY_WEB_API}/game-status`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then((response) => {
            if (response && response.game) {
                hashHistory.push('/game');
            } else {
                hashHistory.push('/start-game');
            }
        });
};

export const newGame = (data) => (dispatch) => {
    dispatch({
        type: SOCKET_IO_EVENT,
        eventName: 'new-game',
        data
    });
};

export const HANDLE_GAME_CREATED = 'HANDLE_GAME_CREATED';
export const handleGameCreated = (game) => (dispatch) => {
    dispatch(setCurrentPlayer(game.host));
    dispatch({
        type: HANDLE_GAME_CREATED,
        game
    });

    hashHistory.push('/new-game');
};

export const goToConnectToGame = (data) => (dispatch) => {
    dispatch(setCurrentPlayer(data));
    hashHistory.push('/connect-to-game');
};

export const connectToGame = (gameId) => (dispatch, getState) => {
    const userData = getState().players.currentPlayer;

    dispatch({
        type: SOCKET_IO_EVENT,
        eventName: 'connect-to-game',
        data: {
            gameId,
            userData
        }
    });

    hashHistory.push('/game');
};

export const CREATE_QR_CODE = 'CREATE_QR_CODE';
export const createQCCode = (gameId) => (dispatch) => {
    const QRCode = qrcode.toDataURL(gameId, 4);

    dispatch({
        type: CREATE_QR_CODE,
        QRCode
    });
};

export const scanQRCode = () => (dispatch) => {
    if (!window.cordova || !window.cordova.plugins || !window.cordova.plugins.barcodeScanner) {
        return;
    }

    window.cordova.plugins.barcodeScanner.scan((result) => {
        dispatch(connectToGame(result.text));
    });
};
