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
				<div className="home-links">
					<a href="https://github.com/amaranthos"><i className="fa fa-github-square"/></a>
					<a href="https://bitbucket.org/amaranthos"><i className="fa fa-bitbucket-square"/></a>
					<a href="https://www.youtube.com/channel/UC4VaUP2Ob7I6avrajgBm70w"><i className="fa fa-youtube-square"/></a>
					<a href="https://www.linkedin.com/in/joshua-hodkinson"><i className="fa fa-linkedin-square"/></a>
					<a href="https://twitter.com/jbwhodkinson"><i className="fa fa-twitter-square"/></a>
					<a href="mailto:joshua@joshuas.software"><i className="fa fa-envelope-square"/></a>
				</div>
			</div>
		);
	}
}
