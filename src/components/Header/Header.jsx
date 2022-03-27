import React from 'react';
import './Header.css';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
	return (
		<header className="page-header">
			<Logo />
			<Nav />
		</header>
	);
};

export default Header;
