import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers } from './reducers';
import { epics } from './epics';

export const history = createHistory();

const epicMiddleware = createEpicMiddleware(epics);

const persistConfig = {
	  key: 'root'
	, storage
};

export const store = createStore(
	  persistReducer(persistConfig, reducers)
	, {}
	, compose(applyMiddleware(thunk, epicMiddleware, routerMiddleware(history)))
);
