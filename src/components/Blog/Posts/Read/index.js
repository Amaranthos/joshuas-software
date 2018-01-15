import _ from 'lodash';
import hljs from 'highlight.js';
import { connect } from "react-redux";
import Markdown from 'react-remarkable';
import React, { Component } from "react";
import 'highlight.js/styles/github-gist.css';

import './style.css';

class PostRead extends Component {
	constructor(id) {
		this.state = {
			id
		}
	}

	render() {
		const post = _.find(this.state.posts, { id === this.state.id })

		return (
			<div className="blog">
				<div className="listitem">
					<span>
						{ts}
					</span>
					<Markdown options={{highlight}} >
						{post.content}
					</Markdown>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect(mapStateToProps)(PostRead);
