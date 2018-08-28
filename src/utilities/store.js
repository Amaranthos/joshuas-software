import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from '../reducers';
import { epics } from '../epics';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware(epics);

ReactGA.initialize('UA-124565553-1', { debug: true });
history.listen((location, action) => {
	ReactGA.pageview(location.pathname + location.search);
});

const persistConfig = {
	  key: 'root'
	, storage
};

export const store = createStore(
	  connectRouter(history)(persistReducer(persistConfig, reducers))
	, {}
	, composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware(history)))
);
