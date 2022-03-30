import React from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../stores/user/atom';
import LoginForm from '../components/LoginForm';
import { Button } from '../components/elements';
import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

const Login = () => {
	const user = useRecoilValue(userState);
	return !user ? (
		<>
			<LoginForm />
		</>
	) : (
		<Navigate replace to="/profile" />
	);
};

export default Login;
