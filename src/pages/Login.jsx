import React from 'react';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import { Button } from '../components/elements';
import { useAuth } from '../hooks';

const Login = () => {
	const auth = useAuth();
	const handleSubmit = data => auth.login(data);
	return (
		<Layout>
			{!auth.isAuthorized ? (
				<>
					<h1>You are not logged in 😫</h1>
					<LoginForm onSubmit={handleSubmit} />
				</>
			) : (
				<>
					<h1>
						{auth.isAdmin
							? 'You are logged in as admin! 😎'
							: 'You are logged in 😍'}
					</h1>
					<Button onClick={() => auth.logout()}>Log out</Button>
				</>
			)}
		</Layout>
	);
};

export default Login;
