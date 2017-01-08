import { combineReducers } from 'redux';

import { SET_CURRENT_PLAYER, HANDLE_NEW_PLAYERS } from './playersActions';

const defaultCurrentPlayer = {
    id: null,
    username: null,
    avatar: {}
};

function currentPlayerReducer(state = defaultCurrentPlayer, action) {
    switch (action.type) {
        case SET_CURRENT_PLAYER: {
            return Object.assign({}, state, action.userData);
        }

        default: {
            return state;
        }
    }
}

function playersReducer(state = [], action) {
    switch (action.type) {
        case HANDLE_NEW_PLAYERS: {
            return action.players;
        }

        default: {
            return state;
        }
    }
}

export default combineReducers({
    currentPlayer: currentPlayerReducer,
    allPlayers: playersReducer
});
