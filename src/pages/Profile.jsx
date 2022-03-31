import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import UserForm from '../components/UserForm';
import Avatar from 'boring-avatars';
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
	const [name, setName] = useState({ firstname: '', lastname: '' });
	const handleUpdate = input => {
		updateUser(input).then(res => {
			setUser(res.data);
			setName({ ...res.data.name });
		});
	};
	return (
		<AuthRequired>
			<h3>
				Hello, {name.firstname}!{' '}
				<Avatar
					size={30}
					name={`${name.firstname} ${name.lastname}`}
					variant="beam"
					colors={[
						'#92A1C6',
						'#146A7C',
						'#F0AB3D',
						'#C271B4',
						'#C20D90',
					]}
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
