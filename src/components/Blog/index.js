import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css';

class Blog extends Component {
	render() {
		return (
			<div className="blog"></div>
		);
	}
}

export default connect()(Blog);
