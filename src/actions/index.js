import Types from './types';
import { database, auth, storage } from '../fire.js';
import firebase from 'firebase';
import uuidv4 from 'uuid/v4';

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

export const signin = (email, password) => ({ type: Types.SIGNIN_REQUESTED, email, password });

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

export function uploadFile(file, placeholder) {
	return dispatch => {
		dispatch(uploadFileRequested);
		return storage.ref(`/blog/${uuidv4()}`).put(file)
		.then(snap => {
			dispatch(uploadFileFulfilled(snap.downloadURL, placeholder, file.name));
		})
		.catch(err => {
			console.error(err);
			dispatch(uploadFileRejected);
		})
	}
}

function uploadFileRequested() {
	return {
		type: Types.UPLOAD_FILE_REQUESTED
	};
}

function uploadFileRejected() {
	return {
		type: Types.UPLOAD_FILE_REJECTED
	}
}

function uploadFileFulfilled(url, placeholder, name) {
	return {
		  type: Types.UPLOAD_FILE_FULFILLED
		, url
		, placeholder
		, name
	}
}

export function uploadFileDisplayed(upload) {
	return {
		  type: Types.UPLOAD_FILE_DISPLAYED
		, upload
	}
}