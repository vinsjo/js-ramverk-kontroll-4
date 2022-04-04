import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styles from './NavLink.module.css';
import { classNames } from '../../utils';
import { isFn } from 'x-is-type';

const NavLink = ({ className, onClick, to, title, children }) => {
	return (
		<RouterNavLink
			to={to}
			title={title}
			onClick={e => isFn(onClick) && onClick(e)}
			className={({ isActive }) =>
				classNames(
					styles.link,
					isActive ? styles.active : null,
					className
				)
			}
		>
			{children}
		</RouterNavLink>
	);
};

export default NavLink;
