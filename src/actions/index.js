import Types from './types';
import { storage } from '../fire.js';
import uuidv4 from 'uuid/v4';

// Posts
export const fetchPosts = () => ({ type: Types.FETCH_POSTS_REQUESTED });
export const addPost = (content) => ({ type: Types.ADD_POST_REQUESTED, content });

// Auth
export const signin = (email, password) => ({ type: Types.SIGNIN_REQUESTED, email, password });
export const signout = () => ({ type: Types.SIGNOUT_REQUESTED });

// Storage
export const uploadFile = (file, placeholder) => ({ type: Types.UPLOAD_FILE_REQUESTED, file, placeholder });
export const uploadFileDisplayed = (upload) => ({ type: Types.UPLOAD_FILE_DISPLAYED, upload });