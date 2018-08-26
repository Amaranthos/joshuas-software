import styled from 'react-emotion';
import { connect } from "react-redux";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { signin, signout } from '../actions';

const FieldSpan = styled('span')({
	display: 'block',
	boxSizing: 'border-box',
	margin: 0,
	padding: '20px 0'
});

const FieldLabel = styled('label')({
});

const FieldInput = styled('input')({
	border: 'none',
	margin: 0,
	padding: '4px 0',
	width: '100%',
});

const AuthField = (field) => (
	<FieldSpan className={field.meta.dirty? 'dirty' : ''}>
		<FieldLabel>{field.label}</FieldLabel>
		<FieldInput {...field.input} type={field.type} />
	</FieldSpan>
);

class Auth extends Component {
	onSubmit(values) {
		this.props.signin(values.email, values.password);
	}

	onClick() {
		this.props.signout();
	}

	render() {
		const { handleSubmit, auth } = this.props;
		if(auth) return <button onClick={this.onClick.bind(this)}>deauth</button>;
		return (
			<form className="auth" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
				<fieldset>
					<Field name="email" component={AuthField} label="email" type="email" />
					<Field name="password" component={AuthField} label="password" type="password" />
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
	return {
		  signin: (email, password) => dispatch(signin(email, password))
		, signout: (email, password) => dispatch(signout(email, password))
	};
}

export default reduxForm({
	  form: 'auth'
	, fields: ['email', 'password']
})(connect(mapStateToProps, mapDispatchToProps)(Auth));
