import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userState from '../../stores/user/atom';
import { isObj } from 'x-is-type';
import { useAuth } from '../../hooks';

const AuthRequired = ({
	children,
	adminRequired = false,
	fallbackRoute = '/login',
}) => {
	const [accessGranted, setAccessGranted] = useState(null);

	const { token, user, isLoggedIn, isAdmin } = useAuth();

	useEffect(() => {
		setAccessGranted(isLoggedIn() && (!adminRequired || isAdmin()));
	}, [token, user]);

	return accessGranted === null ? (
		''
	) : accessGranted === true ? (
		<>{children}</>
	) : (
		<Navigate replace to={fallbackRoute} />
	);
};

export default AuthRequired;
