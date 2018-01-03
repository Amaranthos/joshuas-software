import Types from '../actions/types';

export default function(state = { uploads:[] }, action) {
	switch(action.type) {
		case Types.UPLOAD_FILE_FULFILLED:
			const { url, placeholder, name } = action;
			const upload = { url, placeholder, name };
			return { ...state, uploads: [...state.uploads, upload] };

		case Types.UPLOAD_FILE_DISPLAYED:

			return { ...state, uploads: state.uploads.filter(u => u.url !== action.upload.url) };

		default: return state;
	}
}