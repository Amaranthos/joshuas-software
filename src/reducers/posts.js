// import _ from 'lodash';

import Types from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case Types.FETCH_POSTS_FULFILLED:
			const { posts } = action.blog;
			// console.log(action);
			// console.log(action.blog);
			// console.log(posts);

			return {...state, ...posts};

		default: return state;
	}
}