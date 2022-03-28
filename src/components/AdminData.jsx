import React from 'react';
import { useRecoilValue } from 'recoil';
import usersState from '../stores/users/atom';
import productsState from '../stores/products/atom';

const AdminData = () => {
	const users = useRecoilValue(usersState);
	const products = useRecoilValue(productsState);
	console.log(users);
	return (
		<div>
			<h2>😎 Welcome, Admin 😎</h2>
			<h3>Users:</h3>
			{users.map(({ id, email, role, name: { firstname, lastname } }) => {
				return (
					<div key={id}>
						{id}: {firstname} {lastname} - {role} - {email}
					</div>
				);
			})}
			<h3>Products:</h3>
			{products.map(({ id, title, price }) => {
				return (
					<div key={id}>
						{id}: {title} - {price}
					</div>
				);
			})}
		</div>
	);
};

export default AdminData;
