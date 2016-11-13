import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

function configureStore(preloadedState) {
    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, preloadedState, composeEnhancers(
        applyMiddleware(thunkMiddleware)
    ));

    return store;
}

export default configureStore;
