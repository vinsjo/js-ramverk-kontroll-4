import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import productsState from '../stores/products/atom';
import styles from './AdminData.module.css';
import { isObj } from 'x-is-type';
import { getAllUsers } from '../utils/api';
import TableForm from './forms/TableForm';

const AdminData = () => {
	const [users, setUsers] = useState([]);
	const products = useRecoilValue(productsState);

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

	function listFromObj(obj, baseKey) {
		const { id, ...rest } = obj;
		return (
			<div key={baseKey}>
				{id ? <h3 className={styles['list-title']}>{id}:</h3> : ''}
				<ul className={styles.list}>
					{Object.entries(rest).map(([key, value]) => {
						const mapKey = `${baseKey}-${key}`;
						return (
							<li key={mapKey} className={styles.item}>
								{isObj(value) ? (
									listFromObj({ ...value, id: key }, mapKey)
								) : (
									<p>
										<span className={styles.key}>
											{key}:
										</span>{' '}
										<span className={styles.value}>
											{value}
										</span>
									</p>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
	return (
		<div>
			<TableForm data={products} />
			{/* <h2>Admin Stuff</h2>

			<h3>Products:</h3>
			{!products || !products.length ? (
				'Loading Products...'
			) : (
				<ul className={styles.list}>
					{products.map(product => {
						const key = `product-${product.id}`;
						return (
							<li key={key} className={styles.item}>
								{listFromObj(product, key)}
							</li>
						);
					})}
				</ul>
			)}
			<h3>Users:</h3>
			{!users || !users.length ? (
				'Loading Users...'
			) : (
				<ul className={styles.list}>
					{[...users]
						.sort((a, b) =>
							a.role !== b.role
								? a.role === 'admin'
									? -1
									: 1
								: 0
						)
						.map(user => {
							const key = `user-${user.id}`;
							return (
								<li key={key} className={styles.item}>
									{listFromObj(user, key)}
								</li>
							);
						})}
				</ul>
			)} */}
		</div>
	);
};

export default AdminData;
