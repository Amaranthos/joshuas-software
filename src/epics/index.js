import { combineEpics } from 'redux-observable';

import { postsEpic } from './posts';
import { authEpic } from './auth';
import { storageEpic } from './storage';

export const epics = combineEpics(
	  authEpic
	, postsEpic
	, storageEpic
);