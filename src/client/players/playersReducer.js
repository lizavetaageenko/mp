import { combineReducers } from 'redux';

import { SET_CURRENT_PLAYER } from './playersActions';

const defaultCurrentPlayer = {
    id: null,
    username: null
};

function currentPlayerReducer(state = defaultCurrentPlayer, action) {
    switch (action.type) {
        case SET_CURRENT_PLAYER: {
            return Object.assign({}, state, {
                username: action.username
            });
        }

        default: {
            return state;
        }
    }
}

function playersReducer(state = []) {
    return state;
}

export default combineReducers({
    currentPlayer: currentPlayerReducer,
    players: playersReducer
});
