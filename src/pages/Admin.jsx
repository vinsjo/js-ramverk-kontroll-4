import React from 'react';
import { useRecoilValue } from 'recoil';
import usersState from '../stores/users/atom';
import AuthRequired from '../components/containers/AuthRequired';
import AdminData from '../components/AdminData';

const Admin = () => {
	return (
		<AuthRequired adminRequired={true}>
			<AdminData />
		</AuthRequired>
	);
};

export default Admin;
