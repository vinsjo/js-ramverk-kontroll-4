import React from 'react';

import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import { NavLink } from '../elements';
import styles from './Nav.module.css';

const Nav = () => {
	const cart = useCart();
	const auth = useAuth();
	const getLinks = () => {
		const links = [
			{ text: 'Products', title: 'Product Overview', to: '/products' },
			{
				text: auth.isAuthorized ? 'Log out' : 'Log in',
				title: 'Account page',
				to: '/login',
			},
			{
				text: `Cart${!cart.count ? '' : `(${cart.count})`}`,
				title: 'Shopping Cart',
				to: '/cart',
			},
		];
		if (auth.isAdmin) {
			links.push({ text: 'Admin', title: 'Admin page', to: '/admin' });
		}
		return links;
	};
	return (
		<nav>
			<ul className={styles.links}>
				{getLinks().map(({ text, title, to }, i) => (
					<li key={`navlink-${i}`}>
						<NavLink to={to} title={title}>
							{text}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
