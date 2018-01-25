import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { reducers } from './reducers';
import { epics } from './epics';

const epicMiddleware = createEpicMiddleware(epics);

const store = createStore(
	  reducers
	, {}
	, compose(applyMiddleware(thunk, epicMiddleware))
);

export default store;