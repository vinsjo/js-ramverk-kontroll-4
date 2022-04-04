import React from 'react';
import { addUser } from '../utils/api';
import { useAuth } from '../hooks';
import UserForm from '../components/forms/UserForm';
import { Navigate } from 'react-router-dom';

const Register = () => {
	const { isLoggedIn, login } = useAuth();
	const handleSubmit = async inputData => {
		addUser(inputData)
			.then(res => {
				login(res.data);
			})
			.catch(e => {
				console.log(e);
			});
	};
	return !isLoggedIn() ? (
		<UserForm onSubmit={handleSubmit} title="Create Account" />
	) : (
		<Navigate replace to="/profile" />
	);
};

export default Register;
