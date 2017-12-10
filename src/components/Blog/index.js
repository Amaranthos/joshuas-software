import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './style.css';

import { fetchPosts } from '../../actions';
import List from '../List';

class Blog extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div className="blog">
				<List>
					{
						_.map(this.props.posts, post => {
							return (
								<div className="listitem">
									<h3>{post.title}</h3>
									<p>{post.body}</p>
								</div>
							);
						})
					}
				</List>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
	return { fetchPosts: () => dispatch(fetchPosts()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
