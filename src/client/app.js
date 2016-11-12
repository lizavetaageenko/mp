import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

import './common/styles/app.scss';

import StartGame from './game/start-game/StartGame';
import NewGame from './game/new-game/NewGame';
import ConnectToGame from './game/connect-to-game/ConnectToGame';
import GameContainer from './game/GameContainer';
import Game from './game/Game';
import GameLocations from './locations/game-locations/GameLocations';
import ChooseLocation from './locations/choose-location/ChooseLocation';
import VoteForSpy from './players/vote-for-spy/VoteForSpy';

const App = ({ children }) => (
    <div>{children}</div>
);

App.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

const Routes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={StartGame} />
            <Route path="new-game" component={NewGame} />
            <Route path="connect-to-game" component={ConnectToGame} />
            <Route path="game" component={GameContainer}>
                <IndexRoute component={Game} />
                <Route path="locations" component={GameLocations} />
                <Route path="vote-for-spy" component={VoteForSpy} />
                <Route path="choose-location" component={ChooseLocation} />
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(
    <Routes />,
    document.getElementById('app-root')
);

// Dev code

// import io from 'socket.io-client';
//
// const socket = io('ws://localhost:3332');
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
