import { from } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { map, mergeMap, catchError } from 'rxjs/operators';

import Types from '../actions/types';
import { auth } from '../utilities/fire.js';

const signinFulfilled = () => ({ type: Types.SIGNIN_FULFILLED });
const signinRejected = err => ({ type: Types.SIGNIN_REJECTED, err });
const signinEpic = action$ =>
	action$.pipe(
		ofType(Types.SIGNIN_REQUESTED),
		mergeMap(action =>
			from(auth.signInWithEmailAndPassword(action.email, action.password))
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
		mergeMap(() => from(auth.signOut())
			.pipe(
				map(signoutFulfilled),
				catchError(signoutRejected)
			)
		)
	);

export const authEpic = combineEpics(signinEpic, signoutEpic);