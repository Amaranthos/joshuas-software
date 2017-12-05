import React, { Component } from 'react';
import './style.css';

import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

import Home from "../Home";

export default class App extends Component {
	render() {
		return (
			<div>
				<header>

				</header>
				<main class="App-main">
					<Home />
				</main>
			</div>
		);
	}
}