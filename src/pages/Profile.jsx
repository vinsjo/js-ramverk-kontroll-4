import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import UserForm from '../components/forms/UserForm';
// import Avatar from 'boring-avatars';
import { Button, Avatar } from '../components/elements';
import { updateUser } from '../utils/api';
import { useAuth } from '../hooks';
import AuthRequired from '../components/containers/AuthRequired';
import userState from '../stores/user/atom';

const Profile = () => {
	const { logout } = useAuth();
	const [user, setUser] = useRecoilState(userState);
	const handleUpdate = input => {
		updateUser(input)
			.then(res => setUser(res.data))
			.catch(e => console.log(e));
	};
	return (
		<AuthRequired>
			{!user ? (
				''
			) : (
				<>
					<h3>
						Hello, {user.name.firstname}!{' '}
						{/* <Avatar size={40} name={user.name.firstname + user.name.lastname} variant="beam" /> */}
						<Avatar
							name={user.name.firstname + user.name.lastname}
						/>
					</h3>

					<UserForm
						onSubmit={handleUpdate}
						submitText="Update"
						data={user}
						title="Update account details"
					/>
					<Button onClick={() => logout()}>Log out</Button>
				</>
			)}
		</AuthRequired>
	);
};

export default Profile;
