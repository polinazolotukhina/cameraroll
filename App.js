import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import logger from 'redux-logger';
import reducers from './src/reducers';
import RouterComponent from './src/Router';


export default class App extends Component<{}> {
    componentWillMount() {
        const config = {
          apiKey: "AIzaSyAkS15GACqcklifHjkU4trD58SGtr_9_pw",
          authDomain: "mobile-f848b.firebaseapp.com",
          databaseURL: "https://mobile-f848b.firebaseio.com",
          projectId: "mobile-f848b",
          storageBucket: "",
          messagingSenderId: "1014830391680"
        };
        firebase.initializeApp(config);
    }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
        <Provider store={store}>
           <RouterComponent />
       </Provider>
    );
  }
}
