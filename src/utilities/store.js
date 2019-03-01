import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from '../reducers';
import { epics } from '../epics';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

ReactGA.initialize('UA-124565553-1');
history.listen((location, action) => {
	ReactGA.pageview(location.pathname + location.search);
});

const persistConfig = {
	  key: 'root'
	, storage
};

const persistedReducers = persistReducer(persistConfig, reducers);
const middlewares = [epicMiddleware];

const store = createStore(
	persistedReducers
	, {}
	, composeWithDevTools(applyMiddleware(...middlewares))
);

epicMiddleware.run(epics);

export { store };