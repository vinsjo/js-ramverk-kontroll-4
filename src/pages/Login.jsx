import React from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../stores/user/atom';
import LoginForm from '../components/LoginForm';
import { Button } from '../components/elements';
import { useAuth } from '../hooks';

const Login = () => {
	const auth = useAuth();
	const user = useRecoilValue(userState);
	return !user ? (
		<>
			<h1>You are not logged in 😫</h1>
			<LoginForm onSubmit={auth.login} />
		</>
	) : (
		<>
			<h1>
				{user.role === 'admin'
					? 'You are logged in as admin! 😎'
					: 'You are logged in 😍'}
			</h1>
			<Button onClick={() => auth.logout()}>Log out</Button>
		</>
	);
};

export default Login;
