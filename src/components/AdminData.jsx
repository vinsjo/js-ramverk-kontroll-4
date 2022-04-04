import React, { useState, useEffect } from 'react';

import { getAllUsers, getAllCarts } from '../utils/api';
import ProductsForm from './forms/ProductsForm';
import DataTable from './DataTable';

import styles from './AdminData.module.css';
import { isFn } from 'x-is-type';
/**
 * @param {Function} apiGetter
 * @param {String} [errorMsg]
 */
const fetchAdminData = async (apiGetter, errorMsg = null) => {
	try {
		const res = await apiGetter();
		if (res.data.error) {
			throw new Error(
				errorMsg || 'An error occurred when fetching admin data'
			);
		}
		return res.data;
	} catch (e) {
		console.log(e);
		return [];
	}
};

const AdminData = () => {
	const [users, setUsers] = useState([]);
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetchAdminData(
			() => getAllUsers(controller),
			'Failed getting users'
		).then(data => setUsers(data.map(user => user)));
		return () => controller.abort();
	}, []);

	useEffect(() => {
		const controller = new AbortController();
		fetchAdminData(
			() => getAllCarts(controller),
			'Failed getting carts'
		).then(data => setCarts(data));
		return () => controller.abort();
	}, []);

	return (
		<div className={styles.container}>
			<section className={styles.section}>
				<h2 className={styles.title}>Products</h2>
				<ProductsForm />
			</section>
			<section className={styles.section}>
				<h2 className={styles.title}>Carts</h2>
				<DataTable
					data={carts.map(({ id, userId, date, products }) => {
						const user = users.find(user => user.id === userId);
						return {
							id,
							date,
							user: user ? user.username : userId,
							products,
						};
					})}
				/>
			</section>
			<section className={styles.section}>
				<h2 className={styles.title}>Users</h2>
				<DataTable
					data={users.map(
						({ __v, password, address, ...user }) => user
					)}
				/>
			</section>
		</div>
	);
};

export default AdminData;
