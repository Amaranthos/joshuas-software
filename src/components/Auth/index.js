import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Redirect } from 'react-router';

import './style.css';
import { signin } from '../../actions';

class Auth extends Component {
	onSubmit(values) {
		this.props.signin(values.email, values.password);
	}

	renderField(field) {
		return(
			<span>
				<label>{field.label}</label>
				<input {...field.input} type={field.type} />
			</span>
		);
	}

	render() {
		if(this.props.auth.authed) {
			return(
				<Redirect to="/" />
			);
		}

		const { handleSubmit, fields: { email, password }} = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<Field name="email" component={this.renderField} label="email" type="email" />
				<Field name="password" component={this.renderField} label="password" type="password" />
				<button action="submit" />
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
	return { signin: (email, password) => dispatch(signin(email, password)) };
}

export default reduxForm({
	  form: 'auth'
	, fields: ['email', 'password']
})(connect(mapStateToProps, mapDispatchToProps)(Auth));
