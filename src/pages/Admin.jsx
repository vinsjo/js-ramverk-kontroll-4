import React from 'react';
import AuthRequired from '../components/AuthRequired';
import Layout from '../components/Layout';
import { useRecoilValue } from 'recoil';
import usersState from '../stores/users/atom';

const Admin = () => {
	const users = useRecoilValue(usersState);
	return (
		<Layout>
			<AuthRequired adminRequired={true}>
				<h3>😎 Welcome, Admin 😎</h3>
				{!users ? (
					''
				) : (
					<ul>
						{users.map(({ id, name: { firstname, lastname } }) => {
							return (
								<li key={id}>
									{firstname} {lastname}
								</li>
							);
						})}
					</ul>
				)}
			</AuthRequired>
		</Layout>
	);
};

export default Admin;
