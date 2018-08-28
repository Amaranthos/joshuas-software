import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import posts from './posts';
import auth from './auth';
import storage from './storage';
import theme from './theme';

export const reducers = combineReducers({
	  form
	, posts
	, auth
	, storage
	, theme
});