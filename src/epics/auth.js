import { Observable } from "rxjs";
import { auth } from '../utilities/fire.js';
import Types from '../actions/types';
import { combineEpics } from 'redux-observable';

const signinFulfilled = () => ({ type: Types.SIGNIN_FULFILLED });
const signinRejected = err => ({ type: Types.SIGNIN_REJECTED, err });
const signinEpic = action$ =>
	action$.ofType(Types.SIGNIN_REQUESTED)
		.mergeMap(
			action =>
				Observable.fromPromise(
					auth.signInWithEmailAndPassword(action.email, action.password)
				)
				.map(signinFulfilled)
				.catch(signinRejected)
		);

const signoutFulfilled = () => ({ type: Types.SIGNOUT_FULFILLED });
const signoutRejected = err => ({ type: Types.SIGNOUT_REJECTED, err });
const signoutEpic = action$ =>
	action$.ofType(Types.SIGNOUT_REQUESTED)
		.mergeMap(
			action=>
				Observable.fromPromise(
					auth.signOut()
				)
				.map(signoutFulfilled)
				.catch(signoutRejected)
		)

export const authEpic = combineEpics(signinEpic, signoutEpic);