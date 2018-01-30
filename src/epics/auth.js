import Types from '../actions/types';
import { Observable } from "rxjs";
import { auth } from '../fire.js';

const signinFulfilled = () => ({ type: Types.SIGNIN_FULFILLED });
const signinRejected = err => ({ type: Types.SIGNIN_REJECTED, err });

export const authEpic = action$ =>
	action$.ofType(Types.SIGNIN_REQUESTED)
		.mergeMap(
			action =>
				Observable.fromPromise(
					auth.signInWithEmailAndPassword(action.email, action.password)
					.catch(signinRejected)
				)
				.map(signinFulfilled)
		);
