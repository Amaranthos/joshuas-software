import React, { Component } from "react";
import "./style.css";

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<h3>I write code</h3>
				<ul>
					<li>games</li>
					<li>web</li>
					<li>front end</li>
					<li>back end</li>
					<li>scripting</li>
					<li>tools</li>
				</ul>
				<div>
					<a href="https://github.com/Amaranthos"><i className="fa fa-github-square"/></a>
					<a href="https://bitbucket.org/Amaranthos"><i className="fa fa-bitbucket-square"/></a>
				</div>
			</div>
		);
	}
}
