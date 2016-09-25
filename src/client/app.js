import io from 'socket.io-client';

const socket = io('ws://localhost:3332');

const startNewGameSection = document.getElementById('start-new-game');
const gameSection = document.getElementById('game');

function showGameSection(data) {
    gameSection.innerHTML = `Game: ${data._id || data.game._id}`;
    gameSection.classList.remove('hidden');
    startNewGameSection.classList.add('hidden');
}

fetch('/api/game-status', {
    method: 'GET',
    credentials: 'include',
})
    .then(response => response.json())
    .then((response) => {
        if (response && response.game) {
            showGameSection(response);
        } else {
            startNewGameSection.classList.remove('hidden');
        }
    });

socket.on('game-created', showGameSection);
socket.on('new-players', showGameSection);

const newGameButton = document.getElementById('new-game');
const connectToGameButton = document.getElementById('connect-to-game');
const username = document.getElementById('username');
const gameId = document.getElementById('game-id');

newGameButton.addEventListener('click', () => {
    socket.emit('new-game', {
        username: username.value
    });
});

connectToGameButton.addEventListener('click', () => {
    socket.emit('connect-to-game', {
        username: username.value,
        gameId: gameId.value
    });
});
