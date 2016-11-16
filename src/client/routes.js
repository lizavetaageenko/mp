import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import App from './app';
import StartGame from './game/start-game/StartGame';
import NewGame from './game/new-game/NewGame';
import ConnectToGame from './game/connect-to-game/ConnectToGame';
import GameContainer from './game/GameContainer';
import Game from './game/Game';
import GameLocations from './locations/game-locations/GameLocations';
import ChooseLocation from './locations/choose-location/ChooseLocation';
import VoteForSpy from './players/vote-for-spy/VoteForSpy';


const Routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="start-game" component={StartGame} />
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

export default Routes;
