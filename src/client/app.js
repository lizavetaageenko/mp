import React from 'react';
import { connect } from 'react-redux';

import './common/styles/app.scss';

import { getGameStatus } from './game/gameActions';

class App extends React.Component {
    componentWillMount() {
        this.props.getGameStatus();
    }

    render() {
        const { children } = this.props;

        return (<div>{children}</div>);
    }
}

App.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    getGameStatus: React.PropTypes.func.isRequired
};

export default connect(
    null,
    (dispatch) => ({
        getGameStatus() { dispatch(getGameStatus()); }
    })
)(App);

// Dev code


//
// const startNewGameSection = document.getElementById('start-new-game');
// const gameSection = document.getElementById('game');
// const gameInfo = document.getElementById('game-info');
//
// function showGameSection(data) {
//     gameInfo.innerHTML = `Game: ${data._id || data.game._id}`;
//     gameSection.classList.remove('hidden');
//     startNewGameSection.classList.add('hidden');
// }
//
// fetch('/api/game-status', {
//     method: 'GET',
//     credentials: 'include',
// })
//     .then(response => response.json())
//     .then((response) => {
//         if (response && response.game) {
//             showGameSection(response);
//         } else {
//             startNewGameSection.classList.remove('hidden');
//         }
//     });
//
// socket.on('game-created', showGameSection);
// socket.on('new-players', showGameSection);
//
// const newGameButton = document.getElementById('new-game');
// const connectToGameButton = document.getElementById('connect-to-game');
// const startGameButton = document.getElementById('start-game');
// const username = document.getElementById('username');
// const gameId = document.getElementById('game-id');
//
// newGameButton.addEventListener('click', () => {
//     socket.emit('new-game', {
//         username: username.value
//     });
// });
//
// connectToGameButton.addEventListener('click', () => {
//     socket.emit('connect-to-game', {
//         username: username.value,
//         gameId: gameId.value
//     });
// });
//
// startGameButton.addEventListener('click', () => {
//     socket.emit('start-game');
// });
