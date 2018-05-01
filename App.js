import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import logger from 'redux-logger';
import reducers from './src/reducers';
import RouterComponent from './src/Router';

export default class App extends Component<{}> {
    render() {
        const store = createStore(
            reducers,
            {},
            applyMiddleware(ReduxThunk, logger)
        );
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}
