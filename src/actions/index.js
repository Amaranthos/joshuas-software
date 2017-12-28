import Types from './types';
import { database, auth } from '../fire.js';
import firebase from 'firebase';


export function fetchPosts() {
	return dispatch => {
		dispatch(fetchPostsRequested);
		return database.ref('/blog/posts').on('value', snap => {
			dispatch(fetchPostsFufilled(snap.val()));
		}, err => {
			console.error(err);
			dispatch(fetchPostsRejected);
		});
	};
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

function fetchPostsFufilled(posts) {
	return {
		  type: Types.FETCH_POSTS_FULFILLED
		, posts
	};
}

export function signin(email, password) {
	return dispatch => {
		dispatch(signinRequested);
		return auth.signInWithEmailAndPassword(email, password)
		.then(result => {
			dispatch(signinFulfilled(result));
		})
		.catch(err => {
			console.error(err);
			dispatch(signinRejected);
		});
	};
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

export function addPost(content) {
	var ts = firebase.database.ServerValue.TIMESTAMP
	return dispatch => {
		dispatch(addPostRequested);
		return database.ref('/blog/posts').push({ content, ts })
		.then(ref => {
			dispatch(addPostFulfilled({ [ref.key]: { content, ts }}));
		})
		.catch(err => {
			console.error(err);
			dispatch(addPostRejected);
		});
	};
}

function addPostRequested() {
	return {
		type: Types.ADD_POST_REQUESTED
	};
}

function addPostRejected() {
	return {
		type: Types.ADD_POST_REJECTED
	};
}

function addPostFulfilled(post) {
	return {
		  type: Types.ADD_POST_FULFILLED
		, post
	};
}
