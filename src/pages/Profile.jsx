import React from 'react';
import { useRecoilState } from 'recoil';
import UserForm from '../components/UserForm';
import { Button } from '../components/elements';
import { updateUser } from '../utils/api';
import useAuth from '../hooks/useAuth';
import AuthRequired from '../components/containers/AuthRequired';
import userState from '../stores/user/atom';
import { userData } from '../utils';
import { isObj } from 'x-is-type';

const Profile = () => {
	const auth = useAuth();
	const [user, setUser] = useRecoilState(userState);
	const handleUpdate = input => {
		updateUser(input).then(res => setUser(res.data));
	};
	return (
		<AuthRequired>
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
