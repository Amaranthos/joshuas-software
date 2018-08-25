import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers } from './reducers';
import { epics } from './epics';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware(epics);

const persistConfig = {
	  key: 'root'
	, storage
};

export const store = createStore(
	  connectRouter(history)(persistReducer(persistConfig, reducers))
	, {}
	, applyMiddleware(epicMiddleware, routerMiddleware(history))
);
