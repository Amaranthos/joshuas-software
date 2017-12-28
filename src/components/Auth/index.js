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
		const { meta: {dirty}} = field;
		return(
			<span className={dirty? 'dirty' : ''}>
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

		const { handleSubmit } = this.props;
		return (
			<form className="auth" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<fieldset>
					<Field name="email" component={this.renderField} label="email" type="email" />
					<Field name="password" component={this.renderField} label="password" type="password" />
					<button action="submit">auth</button>
				</fieldset>
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
