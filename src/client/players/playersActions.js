export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const setCurrentPlayer = (userData) => ({
    type: SET_CURRENT_PLAYER,
    userData
});

export const HANDLE_NEW_PLAYERS = 'HANDLE_NEW_PLAYERS';
export const handleNewPlayers = (players) => (dispatch) => {
    dispatch({
        type: HANDLE_NEW_PLAYERS,
        players
    });
};
