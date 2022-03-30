import React from 'react';
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
