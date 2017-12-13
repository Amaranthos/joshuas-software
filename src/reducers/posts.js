import Types from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case Types.FETCH_POSTS_FULFILLED:
			const { posts } = action.blog;
			return {...state, ...posts};

		default: return state;
	}
}