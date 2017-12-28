import _ from 'lodash';

import Types from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case Types.FETCH_POSTS_FULFILLED:
			return _.toArray(_.mapKeys(action.posts, (v, k) => v.id = k ));

		default: return state;
	}
}