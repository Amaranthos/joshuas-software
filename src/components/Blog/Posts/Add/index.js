import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import './style.css';
import { addPost, uploadFile, uploadFileDisplayed } from '../../../../actions';

const selector = formValueSelector('add-post');

class PostAdd extends Component {
	onSubmit(values) {
		this.props.addPost(values.content);
		this.props.reset();
	}

	onChange(event) {
		const { target } = event;
		target.style.height = 'auto';
		target.style.height = target.scrollHeight+'px';
	}

	onDrop(event, n, p) {
		event.preventDefault();
		const file = [ ...event.dataTransfer.files ][0];
		const { target } = event;
		const placeholder = `![Uploading ${file.name}...]`;
		this.props.change('content', target.value + placeholder);
		this.props.uploadFile(file, placeholder);
	}

	render() {
		_.map(this.props.storage.uploads, upload => {
			console.log('upload: ', upload);
			this.props.change('content', this.props.content.replace(upload.placeholder, `![${upload.name}](${upload.url})`));
			this.props.uploadFileDisplayed(upload);
		});


		const { handleSubmit } = this.props;
		return (
			<form className="blog posts add" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<Field name="content" component="textarea" rows="20" onChange={this.onChange} onDrop={this.onDrop.bind(this)} />
				<button action="submit">save</button>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		  addPost: (content) => dispatch(addPost(content))
		, uploadFile: (file, placeholder) => dispatch(uploadFile(file, placeholder))
		, uploadFileDisplayed: (upload) => dispatch(uploadFileDisplayed(upload))
	};
}

function mapStateToProps(state) {
	return { storage: state.storage, content: selector(state, 'content') };
}

export default reduxForm({ form: 'add-post' })(connect(mapStateToProps, mapDispatchToProps)(PostAdd));
