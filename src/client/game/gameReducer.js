import { HANDLE_GAME_CREATED } from './gameActions';

const defaultGameState = {
    id: null,
    status: null
};

export default function (state = defaultGameState, action) {
    switch (action.type) {
        case HANDLE_GAME_CREATED: {
            return {
                // eslint-disable-next-line no-underscore-dangle
                id: action.game._id,
                status: action.game.status
            };
        }

        default: {
            return state;
        }
    }
}
