import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './style.css';

import Home from "../Home";
import Blog from "../Blog";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

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
					<Route exact path="/" component={Home} />
					<Route path="/blog" component={Blog} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/resume" component={Resume} />
				</main>
			</div>
		);
	}
}
