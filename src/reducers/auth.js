import Types from '../actions/types';

export default function(state = false, action) {
	switch(action.type) {
		case Types.SIGNIN_FULFILLED:
			return true;

		case Types.SIGNOUT_FULFILLED:
			return false;

		default: return state;
	}
}