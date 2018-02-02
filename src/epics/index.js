import { combineEpics } from 'redux-observable';

import { postsEpic } from './posts';
import { authEpic } from './auth';

export const epics = combineEpics(
	  authEpic
	, postsEpic
);