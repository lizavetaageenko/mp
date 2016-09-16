function initGame() {
    return fetch('/api/game', {
        method: 'GET',
        credentials: 'include',
    });
}

export default initGame;
