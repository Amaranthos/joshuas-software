import React from 'react';
import styled from 'react-emotion';
import { Route, Switch } from 'react-router-dom';

import Auth from './auth';
import Blog from './Blog';
import { Home } from './home';
import { Navbar } from './navbar';
import { Resume } from './resume';
import { Portfolio } from './portfolio';
import { mediaBreakpoints } from '../utilities/styling';

const StyledDiv = styled('div')(props => ({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: '160px 10fr',
	height: '100%',
	backgroundColor: props.theme.backgroundColor,
	[mediaBreakpoints[0]]: {
		gridTemplateColumns: '1fr 3fr 1fr',
		gridTemplateRows: '80px 50px 10fr'
	}
}));

const Main = styled('main')({
	margin: '1rem',
	[mediaBreakpoints[0]]: {
		gridColumnStart: 2,
		gridRowStart: 3
	}
});

const Header = styled(Navbar)({
	[mediaBreakpoints[0]]: {
		gridColumnStart: 1,
		gridColumnEnd: 4,
	}
});

export const App = () => (
	<StyledDiv>
		<Header />
		<Main>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/blog' component={Blog} />
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/resume' component={Resume} />
				<Route path='/auth' component={Auth} />
			</Switch>
		</Main>
	</StyledDiv>
);
