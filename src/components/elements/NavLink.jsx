import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styles from './NavLink.module.css';

const NavLink = ({ to, title, children }) => {
	return (
		<RouterNavLink
			to={to}
			title={title}
			className={({ isActive }) =>
				`${styles.link} ${isActive ? styles.active : ''}`
			}
		>
			{children}
		</RouterNavLink>
	);
};

export default NavLink;
