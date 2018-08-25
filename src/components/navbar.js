import React from 'react';
import styled from 'react-emotion';

import { UnstyledLink } from './unstyled-link';

const Header = styled('header')({
    gridArea: 'header',
    borderBottom: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media(min-width: 600px)': {
        flexDirection: 'row'
    }
});

const Nav = styled('nav')({
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    '@media(min-width: 600px)': {
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
    '@media(min-width: 600px)': {
        padding: '0 5px',
        margin: '0 5px'
    }
});

export const Navbar = () => {
    return (
        <Header>
            <NavTitleLink to="/"><h1>joshuas.software</h1></NavTitleLink>
            <Nav>
                <NavLink to="/blog">blog</NavLink>
                <NavLink to="/portfolio">portfolio</NavLink>
                <NavLink to="/resume">resume</NavLink>
            </Nav>
        </Header>
    );
}
