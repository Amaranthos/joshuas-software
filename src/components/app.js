import styled from 'react-emotion';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Navbar } from "./navbar";
import Auth from "./Auth";
import Blog from "./Blog";
import Home from "./Home";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

const Div = styled('div')({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: '160px 10fr',
	'@media(min-width: 600px)': {
		gridTemplateColumns: '1fr 3fr 1fr',
		gridTemplateRows: '80px 50px 10fr'
	}
});

const Main = styled('main')({
	margin: '1rem',
	'@media(min-width: 600px)': {
		gridColumnStart: 2,
		gridRowStart: 3
	}
});

const Header = styled(Navbar)({
	'@media(min-width: 600px)': {
		gridColumnStart: 1,
		gridColumnEnd: 4,
	}
});

export const App = () => (
	<Div>
		<Header />
		<Main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/blog" component={Blog} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/resume" component={Resume} />
				<Route path="/auth" component={Auth} />
			</Switch>
		</Main>
	</Div>

);
