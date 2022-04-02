import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../../hooks';
import { NavLink } from '../elements';
import styles from './Nav.module.css';
import { useRecoilValue } from 'recoil';
import userState from '../../stores/user/atom';
import { BurgerButton } from '../elements';
import { classNames } from '../../utils';

const Nav = () => {
	const cart = useCart();
	const user = useRecoilValue(userState);

	const [openBurger, setOpenBurger] = useState(false);

	const { pathname } = useLocation();
	useEffect(() => setOpenBurger(false), [pathname]);

	return (
		<div className={styles.container}>
			<nav
				className={classNames(
					styles.nav,
					openBurger ? styles.open : null
				)}
			>
				<NavLink
					className={styles.link}
					to="/products"
					title="Products Overview"
				>
					Products
				</NavLink>
				<NavLink
					className={styles.link}
					to="/profile"
					title="Profile Page"
				>
					Profile
				</NavLink>

				{user && user.role === 'admin' ? (
					<NavLink
						className={styles.link}
						to="/admin"
						title="Admin Page"
					>
						Admin
					</NavLink>
				) : (
					<NavLink
						className={styles.link}
						to="/cart"
						title="Shopping Cart"
					>{`Cart${!cart.count ? '' : `(${cart.count})`}`}</NavLink>
				)}
			</nav>
			<BurgerButton
				className={styles.burger}
				open={openBurger}
				onClick={() => setOpenBurger(!openBurger)}
			/>
		</div>
	);
};

export default Nav;
