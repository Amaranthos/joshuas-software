import React from 'react';
import Markdown from 'react-remarkable';
import { highlight } from '../../../../utilities/highlight.js';

const RenderPost = ({post}) => (
	<Markdown options={{highlight}}>
		{post.content}
	</Markdown>
);

export default RenderPost;