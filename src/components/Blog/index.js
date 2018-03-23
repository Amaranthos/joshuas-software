import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import 'highlight.js/styles/github-gist.css';
import { Link, Route, Switch } from 'react-router-dom';

import './style.css';
import List from '../List';
import AddPost from './Posts/Add';
import ShowPost from './Posts/Show';
import RenderPost from './Posts/Render';
import { fetchPosts } from '../../actions';

class Blog extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<Switch>
				<Route exact path="/blog/:postid" component={ShowPost} />
				<Route exact path="/blog">
					<div className="blog">
						{this.props.auth.authed? (
								<AddPost />
						) : '' }
						<List>
							{
								_.map(_.reverse(_.slice(this.props.posts)), (post) => {
									var ts = new Date(post.ts).toLocaleDateString();
									if(ts === 'Invalid Date') ts = '';
									return (
										<div key={post.id} className="listitem">
											<span>
												{ts} <Link to={`blog/${post.id}`}><i className="fa fa-link"/></Link>
											</span>
											<RenderPost post={post} />
										</div>
									);
								})
							}
						</List>
					</div>
				</Route>
			</Switch>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts, auth: state.auth };
}

function mapDispatchToProps(dispatch) {
	return { fetchPosts: () => dispatch(fetchPosts()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
