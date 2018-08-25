import { Observable } from "rxjs";
import Types from '../actions/types';
import { storage } from '../utilities/fire.js';
import { combineEpics } from 'redux-observable';
import uuidv4 from 'uuid/v4';

const uploadFileFulfilled = (url, placeholder, name) => ({ type: Types.UPLOAD_FILE_FULFILLED, url, placeholder, name });
const uploadFileRejected = err => ({ type: Types.UPLOAD_FILE_REJECTED, err });
const uploadFileEpic = action$ =>
	action$.ofType(Types.UPLOAD_FILE_REQUESTED)
		.mergeMap(
			action =>
				Observable.fromPromise(
					storage.ref(`/blog/${uuidv4()}`).put(action.file)
				)
				.map(snap => uploadFileFulfilled(snap.downloadURL, action.placeholder, action.file.name))
				.catch(err => uploadFileRejected(err))
		);

export const storageEpic = combineEpics(
	  uploadFileEpic
);
