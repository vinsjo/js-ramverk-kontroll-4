import React from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../stores/user/atom';
import LoginForm from '../components/LoginForm';
import { Navigate } from 'react-router-dom';

const Login = () => {
	const user = useRecoilValue(userState);
	return !user ? (
		<>
			<LoginForm />
		</>
	) : user.role === 'admin' ? (
		<Navigate replace to="/admin" />
	) : (
		<Navigate replace to="/profile" />
	);
};

export default Login;
