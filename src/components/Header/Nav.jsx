import React, { useState, useEffect } from 'react';
import { useCart, useAuth } from '../../hooks';
import { NavLink } from '../elements';
import styles from './Nav.module.css';

const Nav = () => {
	const cart = useCart();
	const auth = useAuth();

	const [links, setLinks] = useState([]);

	useEffect(() => {
		setLinks([
			{ to: '/products', text: 'Products', title: 'Products Overview' },
			{
				to: '/login',
				text: auth.isAuthorized ? 'Log out' : 'Log in',
				title: 'Account Page',
			},
			{
				to: '/cart',
				text: `Cart${!cart.count ? '' : `(${cart.count})`}`,
				title: 'Shopping Cart',
			},
			{ to: '/admin', text: 'Admin', title: 'Admin Page' },
		]);
	}, [cart.items, auth.isAuthorized, auth.isAdmin]);

	return (
		<nav className={styles.nav}>
			{/* <NavLink to="/products" title="Products Overview">
				Products
			</NavLink>
			<NavLink to="/login" title="Account page">
				{auth.isAuthorized ? 'Log out' : 'Log in'}
			</NavLink>
			{auth.isAdmin ? (
				<NavLink to="/admin" title="Admin Page">
					Admin
				</NavLink>
			) : (
				<NavLink to="/cart" title="Shopping Cart">{`Cart${
					!cart.count ? '' : `(${cart.count})`
				}`}</NavLink>
			)} */}
			{links.map((link, i) => {
				return (
					<NavLink
						key={`navlink-to-${link.to}`}
						to={link.to}
						title={link.title}
					>
						{link.text}
					</NavLink>
				);
			})}
		</nav>
	);
};

export default Nav;
