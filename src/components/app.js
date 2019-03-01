import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch, withRouter } from 'react-router-dom';

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
	color: props.theme.primaryFontColor,
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
				<Route exact path='/' component={withRouter(Home)} />
				<Route path='/blog' component={withRouter(Blog)} />
				<Route path='/portfolio' component={withRouter(Portfolio)} />
				<Route path='/resume' component={withRouter(Resume)} />
				{/* <Route path='/auth' component={Auth} /> */}
			</Switch>
		</Main>
	</StyledDiv>
);
