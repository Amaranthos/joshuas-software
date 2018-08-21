import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import posts from './posts';
import auth from './auth';
import storage from './storage';

export const reducers = combineReducers({
	  form
	, posts
	, auth
	, storage
});