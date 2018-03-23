import { connect } from 'react-redux';
import React, { Component } from 'react';
import 'highlight.js/styles/github-gist.css';

import './style.css';
import RenderPost from '../Render';
import { fetchPost } from '../../../../actions';

class ShowPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postid: props.match.params.postid
		};
	}

	componentDidMount() {
		if(!this.props.posts.find(x => x.id === this.state.postid)) {
			this.props.fetchPost(this.state.postid);
		}
	}

	render() {
		var post = this.props.posts.find(x => x.id === this.state.postid);
		return (
			<div>
				{post? (
						<RenderPost post={post} />
					) : ''
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { posts: state.posts, auth: state.auth };
}

function mapDispatchToProps(dispatch) {
	return { fetchPost: () => dispatch(fetchPost()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);