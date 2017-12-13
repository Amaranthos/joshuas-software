import Types from './types';
import { database, auth } from '../fire.js';


export function fetchPosts() {
	return dispatch => {
		dispatch(fetchPostsRequested());
		return database.ref('/blog').once('value', snap => {
			dispatch(fetchPostsFufilled(snap.val()));
		})
		.catch(err => {
			console.error(err);
			dispatch(fetchPostsRejected);
		})
	}
}

function fetchPostsRequested() {
	return {
		type: Types.FETCH_POSTS_REQUESTED
	};
}

function fetchPostsRejected() {
	return {
		type: Types.FETCH_POSTS_REJECTED
	};
}

function fetchPostsFufilled(blog) {
	return {
		  type: Types.FETCH_POSTS_FULFILLED
		, blog
	};
}

export function signin(email, password) {
	return dispatch => {
		dispatch(signinRequested());
		return auth.signInWithEmailAndPassword(email, password)
		.then(result => {
			dispatch(signinFulfilled(result));
		})
		.catch(err => {
			console.error(err);
			dispatch(signinRejected);
		});
	}
}

function signinRequested() {
	return {
		type: Types.SIGNIN_REQUESTED
	};
}

function signinRejected() {
	return {
		type: Types.SIGNIN_REJECTED
	};
}

function signinFulfilled(result) {
	return {
		  type: Types.SIGNIN_FULFILLED
		, result
	};
}