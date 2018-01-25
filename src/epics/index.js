import { combineEpics } from 'redux-observable';

// import * as posts from './posts';
import { fetchPostsEpic } from './posts';
import { authEpic } from './auth';

export const epics = combineEpics(authEpic);