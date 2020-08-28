import React from 'react';

import Typography from '../../Core/Typography';
import { Container, MenuItems, NavbarBrand, MenuItem } from './Menu';

const NavigationMenu = () => {
	const scrollTo = (id) =>
		document
			.getElementById(id)
			.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

	return (
		<Container id='Navigation'>
			<NavbarBrand onClick={() => scrollTo('About')}>
				<Typography type='p' text='Alex Machin' colour='yellow' weight='bolder' size='1.9rem' />
			</NavbarBrand>
			<MenuItems>
				<MenuItem onClick={() => scrollTo('About')}>
					<Typography
						type='p'
						text='About'
						colour='white'
						size='1.5rem'
						weight='bolder'
						transform='uppercase'
					/>
				</MenuItem>
				<MenuItem onClick={() => scrollTo('Projects')}>
					<Typography
						type='p'
						text='Projects'
						colour='white'
						size='1.5rem'
						weight='bolder'
						transform='uppercase'
					/>
				</MenuItem>
				<MenuItem onClick={() => scrollTo('Contact')}>
					<Typography
						type='p'
						text='Contact'
						colour='white'
						size='1.5rem'
						weight='bolder'
						transform='uppercase'
					/>
				</MenuItem>
			</MenuItems>
		</Container>
	);
};

export default NavigationMenu;
