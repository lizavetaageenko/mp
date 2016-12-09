import { HANDLE_GAME_CREATED, CREATE_QR_CODE } from './gameActions';

const defaultGameState = {
    id: null,
    status: null,
    QRCode: null
};

export default function (state = defaultGameState, action) {
    switch (action.type) {
        case HANDLE_GAME_CREATED: {
            return Object.assign({}, state, {
                // eslint-disable-next-line no-underscore-dangle
                id: action.game._id,
                status: action.game.status
            });
        }

        case CREATE_QR_CODE: {
            return Object.assign({}, state, {
                QRCode: action.QRCode
            });
        }

        default: {
            return state;
        }
    }
}
