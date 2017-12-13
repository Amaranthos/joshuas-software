import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import posts from './posts';
import auth from './auth';

export const reducers = combineReducers({
	  form
	, posts
	, auth
});