import React from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../stores/user/atom';
import { addUser } from '../utils/api';
import { useAuth } from '../hooks';
import UserForm from '../components/UserForm';
import { Navigate } from 'react-router-dom';

const Register = () => {
	const auth = useAuth();
	const user = useRecoilValue(userState);
	const handleSubmit = async inputData => {
		addUser(inputData)
			.then(res => {
				auth.login(res.data);
			})
			.catch(e => {
				console.log(e);
			});
	};
	return !user ? (
		<UserForm onSubmit={handleSubmit} />
	) : (
		<Navigate replace to="/profile" />
	);
};

export default Register;
