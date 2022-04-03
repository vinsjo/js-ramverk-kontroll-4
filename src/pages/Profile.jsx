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
	const auth = useAuth();
	const [user, setUser] = useRecoilState(userState);
	const [name, setName] = useState({ firstname: '', lastname: '' });
	const handleUpdate = input => {
		updateUser(input).then(res => {
			setUser(res.data);
		});
	};
	useEffect(() => {
		if (!user) {
			setName({ firstname: '', lastname: '' });
			return;
		}
		setName(user.name);
	}, [user]);
	return (
		<AuthRequired>
			<h3>
				Hello, {name.firstname}!{' '}
				<Avatar
					size={40}
					name={`${name.firstname} ${name.lastname}`}
					variant="beam"
				/>
			</h3>

			<UserForm
				onSubmit={handleUpdate}
				submitText="Update"
				data={user}
				title="Update account details"
			/>
			<Button onClick={() => auth.logout()}>Log out</Button>
		</AuthRequired>
	);
};

export default Profile;
