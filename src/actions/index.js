import Types from './types';

// Posts
export const fetchPosts = () => ({ type: Types.FETCH_POSTS_REQUESTED });
export const addPost = (content) => ({ type: Types.ADD_POST_REQUESTED, content });
export const fetchPost = (id) => ({ type: Types.FETCH_POST_REQUESTED, id });
export const updatePost = (content) => ({ type: Types.UPDATE_POST_REQUESTED, content });
export const deletePost = (id) => ({ type: Types.DELETE_POST_REQUESTED, id });

// Auth
export const signin = (email, password) => ({ type: Types.SIGNIN_REQUESTED, email, password });
export const signout = () => ({ type: Types.SIGNOUT_REQUESTED });

// Storage
export const uploadFile = (file, placeholder) => ({ type: Types.UPLOAD_FILE_REQUESTED, file, placeholder });
export const uploadFileDisplayed = (upload) => ({ type: Types.UPLOAD_FILE_DISPLAYED, upload });