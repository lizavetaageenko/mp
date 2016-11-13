import { combineReducers } from 'redux';

import game from './game/gameReducer';
import locations from './locations/locationsReducer';
import players from './players/playersReducer';

const rootReducer = combineReducers({
    game,
    locations,
    players
});

export default rootReducer;
