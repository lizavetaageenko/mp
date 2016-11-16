import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';
import { socketIoMiddleware } from './socket';

function configureStore(preloadedState) {
    const middleware = [thunkMiddleware, socketIoMiddleware];

    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, preloadedState, composeEnhancers(
        applyMiddleware(...middleware)
    ));

    return store;
}

export default configureStore;
