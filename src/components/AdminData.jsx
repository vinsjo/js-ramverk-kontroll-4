import React from 'react';
import { useRecoilValue } from 'recoil';
import usersState from '../stores/users/atom';
import productsState from '../stores/products/atom';
import styles from './AdminData.module.css';
import { isObj } from 'x-is-type';

const AdminData = () => {
	const users = useRecoilValue(usersState);
	const products = useRecoilValue(productsState);

	function listFromObj(obj, baseKey) {
		const { id, ...rest } = obj;
		return (
			<>
				{id ? <h3 className={styles['list-title']}>{id}:</h3> : ''}
				<ul className={styles.list}>
					{Object.entries(rest).map(([key, value]) => {
						const mapKey = `${baseKey}-${key}`;
						return isObj(value) ? (
							listFromObj({ ...value, id: key }, mapKey)
						) : (
							<li key={mapKey} className={styles.item}>
								<p>
									<span className={styles.key}>{key}:</span>{' '}
									<span className={styles.value}>
										{value}
									</span>
								</p>
							</li>
						);
					})}
				</ul>
			</>
		);
	}
	return (
		<div>
			<h2>Admin Stuff</h2>
			<h3>Users:</h3>
			<ul className={styles.list}>
				{[...users]
					.sort((a, b) =>
						a.role !== b.role ? (a.role === 'admin' ? -1 : 1) : 0
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
			<h3>Products:</h3>
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
		</div>
	);
};

export default AdminData;
