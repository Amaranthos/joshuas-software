import Types from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case Types.SIGNIN_FULFILLED:
			console.log(action);
			return {...state, authed: true};

		default: return state;
	}
}