import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css';

class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio"></div>
		);
	}
}

export default connect()(Portfolio);
