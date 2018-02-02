import Types from '../actions/types';

const defaultState = { authed: false };

export default function(state = defaultState, action) {
	switch(action.type) {
		case Types.SIGNIN_FULFILLED:
			return {...state, authed: true};

		case Types.SIGNOUT_FULFILLED:
			return {...state, authed: false};

		default: return state;
	}
}