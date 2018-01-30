import { combineEpics } from 'redux-observable';

import { fetchPostsEpic } from './posts';
import { authEpic } from './auth';

export const epics = combineEpics(
	  authEpic
	, fetchPostsEpic
);