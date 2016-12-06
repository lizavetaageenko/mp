import io from 'socket.io-client';

import { JSPY_WEB_SOCKET } from './endpoints';
import { handleGameCreated } from './game/gameActions';

let socket = null;

export const SOCKET_IO_EVENT = 'SOCKET_IO_EVENT';

export const socketIoMiddleware = () => (next) => (action) => {
    if (action.type === SOCKET_IO_EVENT) {
        socket.emit(action.eventName, action.data);
    } else {
        next(action);
    }
};

export default function (dispatch) {
    socket = io(JSPY_WEB_SOCKET);

    socket.on('game-created', (data) => {
        dispatch(handleGameCreated(data));
    });
}
