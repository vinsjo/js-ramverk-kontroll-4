import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import authState from '../stores/auth/atom';

const AuthRequired = ({
	children,
	adminRequired = false,
	fallbackRoute = '/login',
}) => {
	const [accessDenied, setAccessDenied] = useState(null);
	const auth = useRecoilValue(authState);

	useEffect(() => {
		if (!auth) {
			setAccessDenied(true);
			return;
		}
		if (!adminRequired) {
			setAccessDenied(!auth.token);
			return;
		}
		const controller = new AbortController();
		axios
			.get(`https://k4backend.osuka.dev/users/${auth.userId}`, {
				signal: controller.signal,
			})
			.then(res => {
				setAccessDenied(res.data.role !== 'admin');
			})
			.catch(e => console.log(e));
		return () => controller.abort();
	}, [auth]);

	return accessDenied === null ? (
		'Verifying credentials...'
	) : accessDenied === false ? (
		<>{children}</>
	) : (
		<Navigate replace to={fallbackRoute} />
	);
};

export default AuthRequired;
