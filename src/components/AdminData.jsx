import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import productsState from '../stores/products/atom';

import { isObj } from 'x-is-type';
import { getAllUsers, getAllCarts } from '../utils/api';
import ProductsForm from './forms/ProductsForm';
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
		<>
			<h2>Products</h2>
			<ProductsForm />
			<h2>Carts</h2>
			<div className={styles['cart-grid']}>
				{carts.map(({ id, userId, date, products }) => {
					const user = users.find(user => user.id === userId);
					const key = `cart-${id}`;
					return (
						<div key={`cart-${id}`} className={styles.cart}>
							<h3>id: {id}</h3>
							<div className={styles['cart-user']}>
								{!user
									? `User Id: ${userId}`
									: `User: ${user.username}`}
							</div>
							<div className={styles['cart-date']}>
								{new Date(date).toLocaleDateString()}
							</div>
							<div className={styles['cart-products']}>
								{products.map(({ productId, quantity }) => {
									return (
										<div
											className={styles['cart-product']}
											key={`${key}-product-${productId}`}
										>
											<span>id: {productId}</span>
											<span> quantity: {quantity}</span>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
			<h2>Users</h2>
			<div className={styles['user-grid']}>
				{users.map(user => {
					const { firstname, lastname } = user.name;
					const key = `user-${user.id}`;
					return (
						<div key={key}>
							<h3>id: {user.id}</h3>
							<div>username: {user.username}</div>
							<div>
								full name: {firstname} {lastname}
							</div>
							<div>email: {user.email}</div>
						</div>
					);
				})}
			</div>
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
		</>
	);
};

export default AdminData;
