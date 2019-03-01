import { from } from 'rxjs';
import uuidv4 from 'uuid/v4';
import { combineEpics, ofType } from 'redux-observable';
import { map, mergeMap, catchError } from 'rxjs/operators';

import Types from '../actions/types';
import { storage } from '../utilities/fire.js';

const uploadFileFulfilled = (url, placeholder, name) => ({ type: Types.UPLOAD_FILE_FULFILLED, url, placeholder, name });
const uploadFileRejected = err => ({ type: Types.UPLOAD_FILE_REJECTED, err });
const uploadFileEpic = action$ =>
	action$.pipe(
		ofType(Types.UPLOAD_FILE_REQUESTED),
		mergeMap(
			action =>
				from(
					storage.ref(`/blog/${uuidv4()}`).put(action.file)
				)
					.pipe(
						map(snap => uploadFileFulfilled(snap.downloadURL, action.placeholder, action.file.name)),
						catchError(err => uploadFileRejected(err))
					)
		)
	);

export const storageEpic = combineEpics(
	uploadFileEpic
);
