import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import Routes from './routes';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Routes />
    </Provider>,
    document.getElementById('app-root')
);
