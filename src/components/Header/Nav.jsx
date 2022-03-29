import React, { useState, useEffect, useContext } from 'react';
import { useCart } from '../../hooks';
import { NavLink } from '../elements';
import UserContext from '../../context/UserContext';
import styles from './Nav.module.css';

const Nav = () => {
	const cart = useCart();
	const user = useContext(UserContext);

	return (
		<nav className={styles.nav}>
			<NavLink to="/products" title="Products Overview">
				Products
			</NavLink>
			<NavLink to="/login" title="Account page">
				{user ? 'Log out' : 'Log in'}
			</NavLink>
			{user && user.role === 'admin' ? (
				<NavLink to="/admin" title="Admin Page">
					Admin
				</NavLink>
			) : (
				<NavLink to="/cart" title="Shopping Cart">{`Cart${
					!cart.count ? '' : `(${cart.count})`
				}`}</NavLink>
			)}
			{/* <NavLink to="/admin" title="Admin Page">
				Admin
			</NavLink>

			<NavLink to="/cart" title="Shopping Cart">{`Cart${
				!cart.count ? '' : `(${cart.count})`
			}`}</NavLink> */}
		</nav>
	);
};

export default Nav;
