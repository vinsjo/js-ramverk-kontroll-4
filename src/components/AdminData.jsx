import React, { useState, useEffect } from 'react';

import { getAllUsers, getAllCarts } from '../utils/api';
import ProductsForm from './forms/ProductsForm';
import DataTable from './DataTable';

import styles from './AdminData.module.css';

const AdminData = () => {
	const [users, setUsers] = useState([]);
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		getAllUsers()
			.then(res => {
				if (res.data.error) throw 'Failed getting users';
				setUsers(
					res.data.map(data => {
						const { password, __v, ...user } = data;
						return user;
					})
				);
			})
			.catch(e => {
				console.log(e);
				setUsers([]);
			});
		return () => controller.abort();
	}, []);

	useEffect(() => {
		const controller = new AbortController();
		getAllCarts()
			.then(res => {
				if (res.data.error) throw 'Failed getting carts';
				setCarts(res.data);
			})
			.catch(e => {
				console.log(e);
				setUsers([]);
			});
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
					data={users.map(user => {
						const { password, address, __v, ...data } = user;
						return data;
					})}
				/>
			</section>
		</div>
	);
};

export default AdminData;
