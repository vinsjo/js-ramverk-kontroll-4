import React from 'react';
import { useCart } from '../../hooks';
import { NavLink } from '../elements';
import styles from './Nav.module.css';
import { useRecoilValue } from 'recoil';
import userState from '../../stores/user/atom';

const Nav = () => {
	const cart = useCart();
	const user = useRecoilValue(userState);

	return (
		<nav className={styles.nav}>
			<NavLink to="/products" title="Products Overview">
				Products
			</NavLink>
			<NavLink to="/profile" title="Profile Page">
				Profile
			</NavLink>
			{/* {user ? (
				<NavLink to="/profile" title="Profile Page">
					Profile
				</NavLink>
			) : (
				<NavLink to="/login" title="Account page">
					Log in
				</NavLink>
			)} */}
			<NavLink to="/cart" title="Shopping Cart">{`Cart${
				!cart.count ? '' : `(${cart.count})`
			}`}</NavLink>
		</nav>
	);
};

export default Nav;
