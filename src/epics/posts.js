import firebase from 'firebase';
import { from } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';

import Types from '../actions/types';
import { database } from '../utilities/fire.js';

const fetchPostsFufilled = posts => ({ type: Types.FETCH_POSTS_FULFILLED, posts });
const fetchPostsRejected = err => ({ type: Types.FETCH_POSTS_REJECTED, err });
const fetchPostsEpic = action$ =>
	action$.pipe(
		ofType(Types.FETCH_POSTS_REQUESTED),
		mergeMap(() =>
			from(observer =>
				database.ref('/blog/posts').on('value', snap => observer.next(snap.val()))
			)
				.pipe(
					map(snap => fetchPostsFufilled(snap)),
					catchError(err => fetchPostsRejected(err))
				)
		)
	);

const addPostFulfilled = post => ({ type: Types.ADD_POST_FULFILLED, post });
const addPostRejected = err => ({ type: Types.ADD_POST_REJECTED, err });
const addPostEpic = action$ =>
	action$.pipe(
		ofType(Types.ADD_POST_REQUESTED),
		mergeMap(action =>
			from(
				database.ref('/blog/posts').push({ content: action.content, ts: firebase.database.ServerValue.TIMESTAMP })
			)
				.pipe(
					map(ref => addPostFulfilled(ref.key)),
					catchError(err => addPostRejected(err))
				)
		)
	);

const fetchPostFufilled = post => ({ type: Types.FETCH_POST_FULFILLED, post });
const fetchPostEpic = action$ =>
	action$.pipe (
		ofType(Types.FETCH_POST_REQUESTED),
		mergeMap(() =>
			from(database.ref('/blog/posts').once('value'))
				.pipe(map(ref => fetchPostFufilled(ref.val())))
		)
	);

export const postsEpic = combineEpics(
	  fetchPostsEpic
	, fetchPostEpic
	, addPostEpic
);