import _ from 'lodash';

import Types from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
	case Types.FETCH_POSTS_FULFILLED: {
		let posts = _.toArray(_.mapKeys(action.posts, (v, k) => v.id = k));
		_.map(posts, p => p.ts = new Date(p.ts).toLocaleDateString());
		return _.reverse(posts);
	}

	case Types.FETCH_POSTS_REJECTED:
		console.error(action.err);
		return state;

	case Types.ADD_POST_FULFILLED:
		return state;

	case Types.ADD_POST_REJECTED:
		console.error(action.err);
		return state;

	default: return state;
	}
}