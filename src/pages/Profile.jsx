import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import UserForm from '../components/forms/UserForm';
import Avatar from 'boring-avatars';
import { Button } from '../components/elements';
import { updateUser } from '../utils/api';
import { useAuth } from '../hooks';
import AuthRequired from '../components/containers/AuthRequired';
import userState from '../stores/user/atom';

const Profile = () => {
	const { logout } = useAuth();
	const [user, setUser] = useRecoilState(userState);
	const [fullName, setFullName] = useState('');
	const handleUpdate = input => {
		updateUser(input)
			.then(res => setUser(res.data))
			.catch(e => console.log(e));
	};
	useEffect(() => {
		if (!user) return setFullName('');
		setFullName(`${user.name.firstname} ${user.name.lastname}`);
	}, [user]);
	return (
		<AuthRequired>
			<h3>
				Hello, {fullName}!{' '}
				{!fullName ? (
					''
				) : (
					<Avatar size={40} name={fullName} variant="beam" />
				)}
			</h3>

			<UserForm
				onSubmit={handleUpdate}
				submitText="Update"
				data={user}
				title="Update account details"
			/>
			<Button onClick={() => logout()}>Log out</Button>
		</AuthRequired>
	);
};

export default Profile;
