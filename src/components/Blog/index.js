import _ from 'lodash';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import 'highlight.js/styles/github-gist.css';
import { Link, Route, Switch } from 'react-router-dom';

import AddPost from './Posts/Add';
import ShowPost from './Posts/Show';
import RenderPost from './Posts/Render';
import { fetchPosts } from '../../actions';
import { FaIcon } from '../fa-icon';

const StyledPost = styled('article')({
	borderBottom: '1px solid black',
	display: 'flex',
	flexDirection: 'row-reverse',
	justifyContent: 'space-between'
});

const ListItemSpan = styled('span')({
	margin: '1rem 0'
});

const InlinePost = ({post, ts}) => (
	<StyledPost>
		<ListItemSpan>
			{ts} <Link to={`blog/${post.id}`}><FaIcon icon='link' /></Link>
		</ListItemSpan>
		<RenderPost post={post} />
	</StyledPost>
);

class Blog extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<Switch>
				<Route exact path="/blog/:postid" component={ShowPost} />
				<Route exact path="/blog">
					<React.Fragment>
						{this.props.auth.authed? (
								<AddPost />
						) : '' }
						<React.Fragment>
							{
								_.map(_.reverse((this.props.posts)), (post) => {
									var ts = new Date(post.ts).toLocaleDateString();
									if(ts === 'Invalid Date') ts = '';
									return <InlinePost key={post.id} post={post} ts={ts} />;
								})
							}
						</React.Fragment>
					</React.Fragment>
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
