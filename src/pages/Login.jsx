import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import { Button } from '../components/elements';
import { useAuth } from '../hooks';
import UserContext from '../context/UserContext';

const Login = () => {
	const auth = useAuth();
	const user = useContext(UserContext);
	const handleSubmit = input => auth.login(input);
	return !user ? (
		<>
			<h1>You are not logged in 😫</h1>
			<LoginForm onSubmit={handleSubmit} />
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
