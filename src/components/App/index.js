import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './style.css';
import Auth from "../Auth";
import Blog from "../Blog";
import Home from "../Home";
import Resume from "../Resume";
import Portfolio from "../Portfolio";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<header>
					<Link to="/"><h1>joshuas.software</h1></Link>
					<nav>
						<Link to="/blog">blog</Link>
						<Link to="/portfolio">portfolio</Link>
						<Link to="/resume">resume</Link>
					</nav>
				</header>
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/blog" component={Blog} />
						<Route path="/portfolio" component={Portfolio} />
						<Route path="/resume" component={Resume} />
						<Route path="/auth" component={Auth} />
					</Switch>
				</main>
			</div>
		);
	}
}
