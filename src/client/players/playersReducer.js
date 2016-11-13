import { combineReducers } from 'redux';

const defaultCurrentPlayer = {
    id: null,
    username: null
};

function currentPlayerReducer(state = defaultCurrentPlayer) {
    return state;
}

function playersReducer(state = []) {
    return state;
}

export default combineReducers({
    currentPlayer: currentPlayerReducer,
    players: playersReducer
});
