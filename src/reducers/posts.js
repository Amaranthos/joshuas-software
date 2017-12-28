import _ from 'lodash';

import Types from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case Types.FETCH_POSTS_FULFILLED:
			return _.toArray(_.mapKeys(action.posts, (v, k) => v.id = k ));

		case Types.ADD_POST_FULFILLED:
			console.log(action);
			var post = _.toArray(_.mapKeys(action.post, (v, k) => v.id = k ))
			return _.concat(state, post);

		default: return state;
	}
}