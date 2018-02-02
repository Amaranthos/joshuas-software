import firebase from 'firebase';
import { Observable } from "rxjs";
import Types from '../actions/types';
import { database } from '../fire.js';
import { combineEpics } from 'redux-observable';

const fetchPostsFufilled = posts => ({ type: Types.FETCH_POSTS_FULFILLED, posts });
const fetchPostsRejected = err => ({ type: Types.FETCH_POSTS_REJECTED, err });

export const fetchPostsEpic = action$ =>
	action$.ofType(Types.FETCH_POSTS_REQUESTED)
		.mergeMap(
			action =>
				Observable.fromPromise(
					database.ref('/blog/posts').once('value')
				)
				.map(snap => fetchPostsFufilled(snap.val()))
				.catch(err => fetchPostsRejected(err))
		);

const addPostFulfilled = post => ({ type: Types.ADD_POST_FULFILLED, post });
const addPostRejected = err => ({ type: Types.ADD_POST_REJECTED, err });
const addPostEpic = action$ =>
	// console.log(addPostEpic);
	action$.ofType(Types.ADD_POST_REQUESTED)
		.mergeMap(
			action =>
				Observable.fromPromise(
					database.ref('/blog/posts').push({ content: action.content, ts: firebase.database.ServerValue.TIMESTAMP })
				)
				.map(ref => addPostFulfilled(ref.key))
				.catch(err => addPostRejected(err))
		);

export const postsEpic = combineEpics(
	  fetchPostsEpic
	, addPostEpic
);