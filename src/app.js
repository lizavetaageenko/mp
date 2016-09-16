import io from 'socket.io-client';
import './app.scss';

import simpsons from './simpsons/simpsons';
import starks from './starks/starks';
import initGame from './game/game';

import renderList from './common/render-list';

const body = document.getElementsByTagName('body')[0];
const socket = io('http://localhost:3332');

socket.on('news', () => {
    socket.emit('my other event', { my: 'data' });
});

initGame()
    .then(res => res.json())
    .then((game) => {
        const container = document.createElement('pre');
        container.innerHTML = JSON.stringify(game, null, 4);
        body.appendChild(container);
    });

renderList(simpsons, 'Simpsons', 'simpsons', body);
renderList(starks, 'Starks', 'starks', body);
