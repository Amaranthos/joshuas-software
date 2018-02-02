import Types from './types';
import { storage } from '../fire.js';
import uuidv4 from 'uuid/v4';


export const fetchPosts = () => ({ type: Types.FETCH_POSTS_REQUESTED });

export const signin = (email, password) => ({ type: Types.SIGNIN_REQUESTED, email, password });

export const signout = () => ({ type: Types.SIGNOUT_REQUESTED });

export const addPost = (content) => ({ type: Types.ADD_POST_REQUESTED, content });

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