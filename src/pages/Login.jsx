import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userState from '../stores/user/atom';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
	const user = useRecoilValue(userState);
	return !user ? (
		<>
			<LoginForm />
			<p>
				Don't have an account?{' '}
				<Link to="/register" title="To Signup Page">
					Sign up here!
				</Link>
			</p>
		</>
	) : user.role === 'admin' ? (
		<Navigate replace to="/admin" />
	) : (
		<Navigate replace to="/profile" />
	);
};

export default Login;
