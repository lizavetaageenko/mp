export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';

export const setCurrentPlayer = (username) => ({
    type: SET_CURRENT_PLAYER,
    username
});
