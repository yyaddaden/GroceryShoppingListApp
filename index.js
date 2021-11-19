/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';

import {ItemsReducer} from './src/reducers/ItemsReducer';

const reducers = combineReducers({
  items: ItemsReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
