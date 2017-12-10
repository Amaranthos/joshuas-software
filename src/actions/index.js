import Types from './types';
import { database } from '../fire.js';


export function fetchPosts() {
	return dispatch => {
		dispatch(fetchPostsRequested());
		return database.ref('/blog').once('value', snap => {
			dispatch(fetchPostsFufilled(snap.val()))
		})
		.catch(err => {
			console.log(err);
			dispatch(fetchPostsRejected);
		})
	}
}

function fetchPostsRequested() {
	console.log('called');
	return {
		type: Types.FETCH_POSTS_REQUESTED
	};
}

function fetchPostsRejected() {
	console.log('rejected');
	return {
		type: Types.FETCH_POSTS_REJECTED
	};
}

function fetchPostsFufilled(blog) {
	console.log('fufilled');
	return {
		  type: Types.FETCH_POSTS_FULFILLED
		, blog
	};
}