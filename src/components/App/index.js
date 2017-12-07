import React, { Component } from 'react';
import './style.css';

import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

import Home from "../Home";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<header>
					<h1>joshuas.software</h1>
					<nav>
						<a>blog</a>
						<a>portfolio</a>
						<a>resume</a>
					</nav>
				</header>
				<main>

				</main>
			</div>
		);
	}
}