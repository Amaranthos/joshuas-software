import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const Header = styled('header')({
    gridArea: 'header',
    borderBottom: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
});

const Navbar = () => {
    return (
        <Header>
            <Link to="/"><h1>joshuas.software</h1></Link>
            <nav>
                <Link to="/blog">blog</Link>
                <Link to="/portfolio">portfolio</Link>
                <Link to="/resume">resume</Link>
            </nav>
        </Header>
    );
}

export default Navbar;