import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css';

class Resume extends Component {
	render() {
		return (
			<div className="resume"></div>
		);
	}
}

export default connect()(Resume);
