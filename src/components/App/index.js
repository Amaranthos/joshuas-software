import React, { Component } from 'react';
import './style.css';

import Home from "../Home";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<header>
					<h1>joshuas.software</h1>
					<nav>
						<a href="#">blog</a>
						<a href="#">portfolio</a>
						<a href="#">resume</a>
					</nav>
				</header>
				<main>
					<Home />
				</main>
			</div>
		);
	}
}
