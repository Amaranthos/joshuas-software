import React from 'react';
import { Header } from "glamorous";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <Link to="/"><h1>joshuas.software</h1></Link>
            <nav>
                <Link to="/blog">blog</Link>
                <Link to="/portfolio">portfolio</Link>
                <Link to="/resume">resume</Link>
            </nav>
        </header>
    );
}

export default Navbar;