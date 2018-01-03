import Types from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case Types.SIGNIN_FULFILLED:
			return {...state, authed: true};

		default: return state;
	}
}