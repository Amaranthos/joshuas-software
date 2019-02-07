import firebase from 'firebase';
import { Observable } from 'rxjs';
import Types from '../actions/types';
import { database } from '../utilities/fire.js';
import { combineEpics } from 'redux-observable';

const fetchPostsFufilled = posts => ({ type: Types.FETCH_POSTS_FULFILLED, posts });
const fetchPostsRejected = err => ({ type: Types.FETCH_POSTS_REJECTED, err });
const fetchPostsEpic = action$ =>
	action$.ofType(Types.FETCH_POSTS_REQUESTED)
		.mergeMap(
			() => Observable
				.create(observer =>
					database.ref('/blog/posts').on('value', snap => observer.next(snap.val()))
				)
				.map(snap => fetchPostsFufilled(snap))
				.catch(err => fetchPostsRejected(err))
		);

const addPostFulfilled = post => ({ type: Types.ADD_POST_FULFILLED, post });
const addPostRejected = err => ({ type: Types.ADD_POST_REJECTED, err });
const addPostEpic = action$ =>
	action$.ofType(Types.ADD_POST_REQUESTED)
		.mergeMap(
			action => Observable
				.fromPromise(
					database.ref('/blog/posts').push({ content: action.content, ts: firebase.database.ServerValue.TIMESTAMP })
				)
				.map(ref => addPostFulfilled(ref.key))
				.catch(err => addPostRejected(err))
		);

const fetchPostFufilled = post => ({ type: Types.FETCH_POST_FULFILLED, post });
const fetchPostEpic = action$ =>
	action$.ofType(Types.FETCH_POST_REQUESTED)
		.mergeMap(
			() => {
				return Observable.fromPromise(
					database.ref('/blog/posts').once('value')
				)
					.map(ref => fetchPostFufilled(ref.val()));
			}
		);

export const postsEpic = combineEpics(
	  fetchPostsEpic
	, fetchPostEpic
	, addPostEpic
);