import Types from '../actions/types';
import { Observable } from "rxjs";
import { database } from '../fire.js';

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
