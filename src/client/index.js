import ES6Promise from 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import initSocket from './socket';
import Routes from './routes';

ES6Promise.polyfill();

const store = configureStore();
initSocket(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app-root')
);
