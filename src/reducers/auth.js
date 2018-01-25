import Types from '../actions/types';

const defaultState = { authed: false };

export default function(state = defaultState, action) {
	switch(action.type) {
		case Types.SIGNIN_FULFILLED:
			return {...state, authed: true};

		default: return state;
	}
}