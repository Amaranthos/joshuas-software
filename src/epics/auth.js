import { map, mergeMap, catchError } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';

import Types from '../actions/types';
import { auth } from '../utilities/fire.js';
import { fromPromise } from 'rxjs/observable/fromPromise';

const signinFulfilled = () => ({ type: Types.SIGNIN_FULFILLED });
const signinRejected = err => ({ type: Types.SIGNIN_REJECTED, err });
const signinEpic = action$ =>
	action$.pipe(
		ofType(Types.SIGNIN_REQUESTED),
		mergeMap(action =>
			fromPromise(auth.signInWithEmailAndPassword(action.email, action.password))
				.pipe(
					map(signinFulfilled),
					catchError(signinRejected)
				)
		)
	);

const signoutFulfilled = () => ({ type: Types.SIGNOUT_FULFILLED });
const signoutRejected = err => ({ type: Types.SIGNOUT_REJECTED, err });
const signoutEpic = action$ =>
	action$.pipe(
		ofType(Types.SIGNOUT_REQUESTED),
		mergeMap(() => fromPromise(auth.signOut())
			.pipe(
				map(signoutFulfilled),
				catchError(signoutRejected)
			)
		)
	);

export const authEpic = combineEpics(signinEpic, signoutEpic);