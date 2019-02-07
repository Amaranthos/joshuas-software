import { combineEpics } from 'redux-observable';

import { postsEpic } from './posts';
import { authEpic } from './auth';
import { storageEpic } from './storage';
import { faker } from './fakerql';

export const epics = combineEpics(
	  authEpic
	, postsEpic
	, storageEpic
	, faker
);