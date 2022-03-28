import React from 'react';
import Layout from '../components/Layout';
import { useRecoilValue } from 'recoil';
import usersState from '../stores/users/atom';
import AuthRequired from '../components/AuthRequired';
import AdminData from '../components/AdminData';

const Admin = () => {
	const users = useRecoilValue(usersState);

	return (
		<Layout>
			<AuthRequired adminRequired={true}>
				<AdminData />
			</AuthRequired>
		</Layout>
	);
};

export default Admin;
