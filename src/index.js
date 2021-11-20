import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, Connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots, requestRobots  } from './reducer';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = 
                createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))

ReactDOM.render( <Provider store={store}>
                     <App/> 
                </Provider>, document.getElementById('root'));
 reportWebVitals();
 