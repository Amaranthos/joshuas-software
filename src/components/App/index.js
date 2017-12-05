import React, { Component } from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

export default class App extends Component {
	render() {
		return (
			<div>
				<Appbar></Appbar>
				<Container>
					Hello, world...
				</Container>
			</div>

		);
	}
}