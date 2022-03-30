import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import UserForm from '../components/UserForm';
import { Button } from '../components/elements';
import { updateUser } from '../utils/api';
import useAuth from '../hooks/useAuth';
import AuthRequired from '../components/containers/AuthRequired';
import userState from '../stores/user/atom';

const Profile = () => {
	const auth = useAuth();
	const [user, setUser] = useRecoilState(userState);
	console.log(user);
	const handleUpdate = userData => {
		updateUser(userData).then(res => setUser(res.data));
	};
	return (
		<AuthRequired>
			<UserForm onSubmit={handleUpdate} submitText="Update" data={user} />
			<Button onClick={() => auth.logout()}>Log out</Button>
		</AuthRequired>
	);
};

export default Profile;
