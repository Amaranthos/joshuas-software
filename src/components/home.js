import React from 'react';
import styled from 'react-emotion';

import { ExternalLink } from './external-link';
import { FaIcon } from './fa-icon';

const LinksDiv = styled('div')({
	margin: '.5rem'
});

const IconLink = styled(ExternalLink)({
	margin: '.25rem'
});

const Title = styled('h3')({
	marginTop: 0
});

export const Home = () => (
	<div className='home'>
		<Title>I write code</Title>
		<ul>
			<li>games</li>
			<li>web</li>
			<li>front end</li>
			<li>back end</li>
			<li>scripting</li>
			<li>tools</li>
		</ul>
		<LinksDiv>
			<IconLink href='https://github.com/amaranthos'>                           <FaIcon icon='github-square'    /></IconLink>
			<IconLink href='https://bitbucket.org/amaranthos'>                        <FaIcon icon='bitbucket-square' /></IconLink>
			<IconLink href='https://www.youtube.com/channel/UC4VaUP2Ob7I6avrajgBm70w'><FaIcon icon='youtube-square'   /></IconLink>
			<IconLink href='https://www.linkedin.com/in/joshua-hodkinson'>            <FaIcon icon='linkedin-square'  /></IconLink>
			<IconLink href='https://twitter.com/jbwhodkinson'>                        <FaIcon icon='twitter-square'   /></IconLink>
			<IconLink href='mailto:joshua@joshuas.software'>                          <FaIcon icon='envelope-square'  /></IconLink>
		</LinksDiv>
	</div>
);
