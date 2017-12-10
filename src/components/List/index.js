import React, { Component } from "react";

import './style.css';

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = { items: props.items };
	}

	render() {
		return (
			<div className="list">
				{ this.props.children }
			</div>
		);
	}
}
