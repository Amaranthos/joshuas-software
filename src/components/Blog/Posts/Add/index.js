import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from "redux-form";

import './style.css';
import { addPost } from '../../../../actions';

class PostAdd extends Component {
	onSubmit(values) {
		this.props.addPost(values.content);
		this.props.reset();
	}

	recalcHeight(event) {
		var { target } = event;
		target.style.height = 'auto';
		target.style.height = target.scrollHeight+'px';
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<form className="blog posts add" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<Field name="content" component="textarea" rows="20" onChange={this.recalcHeight} />
				<button action="submit">save</button>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return { addPost: (content) => dispatch(addPost(content)) };
}

export default reduxForm({
	  form: 'add-post'
	, fields:['content']
})(connect(null, mapDispatchToProps)(PostAdd));
