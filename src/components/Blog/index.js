import _ from 'lodash';
import hljs from 'highlight.js';
import { connect } from 'react-redux';
import Markdown from 'react-remarkable';
import React, { Component } from 'react';
import 'highlight.js/styles/github-gist.css';
import { Route, Switch } from 'react-router-dom';

import './style.css';
import { fetchPosts } from '../../actions';
import List from '../List';
import AddPost from './Posts/Add';

const highlight = (str, lang) => {
	if(lang && hljs.getLanguage(lang)) {
		try { return hljs.highlight(lang, str).value; }
		catch(err) { console.error(err); }
	}

	try { return hljs.highlightAuto(str).value; }
	catch(err) { console.error(err); }

	return '';
}

class Blog extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPost() {

	}

	renderList() {
		return (
			<List>
				{this.props.auth.authed? (
						<AddPost />
				) : '' }
				{
					_.map(_.reverse(_.slice(this.props.posts)), (post) => {
						var ts = new Date(post.ts).toLocaleDateString();
						if(ts === 'Invalid Date') ts = '';
						return (
							<div key={post.id} className="listitem">
								<span>
									{ts}
								</span>
								<Markdown options={{highlight}} >
									{post.content}
								</Markdown>
							</div>
						);
					})
				}
			</List>
		);
	}

	render() {
		return (
			<div className="blog">
				<Switch>
					<Route extact path="/" component={this.renderList} />
				</Switch>
			</div>
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
