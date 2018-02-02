import _ from 'lodash';

import Types from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case Types.FETCH_POSTS_FULFILLED:
			return _.toArray(_.mapKeys(action.posts, (v, k) => v.id = k ));

		case Types.FETCH_POSTS_REJECTED:
			console.error(action.err);
			return state;

		case Types.ADD_POST_FULFILLED:
			console.log(action.post);
			return state;

		case Types.ADD_POST_REJECTED:
			console.error(action.err);
			return state;

		default: return state;
	}
}