import React from 'react';
import styled from 'react-emotion';

import { UnstyledLink } from './unstyled-link';
import { mediaBreakpoints } from '../utilities/styling';

const Header = styled('header')(props => ({
    borderBottom: `1px solid ${props.theme.primaryFontColor}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [mediaBreakpoints[0]]: {
        flexDirection: 'row'
    }
}));

const Nav = styled('nav')({
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    [mediaBreakpoints[0]]: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '1rem'
    }
});

const NavTitleLink = styled(UnstyledLink)({
    marginLeft: '1rem'
});

const NavLink = styled(UnstyledLink)({
    padding: '2px 0',
    margin: '2px 0',
    [mediaBreakpoints[0]]: {
        padding: '0 5px',
        margin: '0 5px'
    }
});

export const Navbar = ({ className }) => (
    <Header className={className}>
        <NavTitleLink to="/"><h1>joshuas.software</h1></NavTitleLink>
        <Nav>
            <NavLink to="/blog">blog</NavLink>
            <NavLink to="/portfolio">portfolio</NavLink>
            <NavLink to="/resume">resume</NavLink>
        </Nav>
    </Header>
);
