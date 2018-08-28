import { connect } from "react-redux";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { AuthField } from './auth-field';
import { signin, signout } from '../actions';

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
