import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth, useCart } from '../../hooks';
import { NavLink } from '../elements';
import styles from './Nav.module.css';
import { BurgerButton } from '../elements';
import { classNames } from '../../utils';

const Nav = () => {
	const cart = useCart();
	const auth = useAuth();

	const [openBurger, setOpenBurger] = useState(false);

	const { pathname } = useLocation();
	useEffect(() => openBurger && setOpenBurger(false), [pathname]);

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
				{!auth.isAdmin() && (
					<NavLink
						className={styles.link}
						to="/cart"
						title="Shopping Cart"
					>{`Cart${!cart.count ? '' : `(${cart.count})`}`}</NavLink>
				)}
				{auth.isLoggedIn() ? (
					<>
						{auth.isAdmin() && (
							<NavLink
								className={styles.link}
								to="/admin"
								title="Admin Page"
							>
								Admin
							</NavLink>
						)}
						<NavLink
							className={styles.link}
							to="/profile"
							title="Profile Page"
						>
							Profile
						</NavLink>
						<NavLink
							to=""
							variant="icon"
							onClick={e => {
								e.preventDefault();
								auth.logout();
							}}
						>
							Logout
						</NavLink>
					</>
				) : (
					<NavLink
						className={styles.link}
						to="/login"
						title="Login Page"
					>
						Login
					</NavLink>
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
