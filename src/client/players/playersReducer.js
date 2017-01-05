import { combineReducers } from 'redux';

import { SET_CURRENT_PLAYER } from './playersActions';

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

function playersReducer(state = []) {
    return state;
}

export default combineReducers({
    currentPlayer: currentPlayerReducer,
    players: playersReducer
});
