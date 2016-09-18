import io from 'socket.io-client';

const socket = io('ws://localhost:3332');

const startNewGameSection = document.getElementById('start-new-game');
const gameSection = document.getElementById('game');

function showGameSection(data) {
    gameSection.innerHTML = `User: ${data.username}`;
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

socket.on('game-created', (data) => {
    if (data && data.username) {
        showGameSection(data);
    }
});

const newGameButton = document.getElementById('new-game');
const username = document.getElementById('user-name');

newGameButton.addEventListener('click', () => {
    socket.emit('new-game', {
        username: username.value
    });
});
