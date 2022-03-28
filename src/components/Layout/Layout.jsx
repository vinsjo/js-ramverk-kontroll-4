import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
	return (
		<div className={styles['page-wrapper']}>
			<Header />
			<main className={styles.content}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
