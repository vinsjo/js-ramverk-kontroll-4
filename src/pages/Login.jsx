import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
	const { isLoggedIn, isAdmin, login } = useAuth();
	return !isLoggedIn() ? (
		<>
			<LoginForm onSubmit={data => login(data)} />
			<p>
				Don't have an account?{' '}
				<Link to="/register" title="To Signup Page">
					Sign up here!
				</Link>
			</p>
		</>
	) : isAdmin() ? (
		<Navigate replace to="/admin" />
	) : (
		<Navigate replace to="/profile" />
	);
};

export default Login;
