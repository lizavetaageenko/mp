import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

import { SOCKET_IO_EVENT } from '../socket';
import { setCurrentPlayer } from '../players/playersActions';

export const getGameStatus = () => () => {
    fetch('/api/game-status', {
        method: 'GET',
        credentials: 'include',
    })
        .then(response => response.json())
        .then((response) => {
            if (response && response.game) {
                browserHistory.push('/game');
            } else {
                browserHistory.push('/start-game');
            }
        });
};

export const newGame = (username) => (dispatch) => {
    dispatch(setCurrentPlayer(username));
    dispatch({
        type: SOCKET_IO_EVENT,
        eventName: 'new-game',
        data: {
            username
        }
    });
};

export const goToConnectToGame = (username) => (dispatch) => {
    dispatch(setCurrentPlayer(username));
    browserHistory.push('/connect-to-game');
};

export const HANDLE_GAME_CREATED = 'HANDLE_GAME_CREATED';

export const handleGameCreated = (game) => (dispatch) => {
    dispatch({
        type: HANDLE_GAME_CREATED,
        game
    });

    browserHistory.push('/new-game');
};

export const connectToGame = (gameId) => (dispatch, getState) => {
    const username = getState().players.currentPlayer.username;

    dispatch({
        type: SOCKET_IO_EVENT,
        eventName: 'connect-to-game',
        data: {
            username,
            gameId
        }
    });
};
