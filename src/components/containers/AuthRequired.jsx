import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userState from '../../stores/user/atom';
import { isObj } from 'x-is-type';

const AuthRequired = ({
	children,
	adminRequired = false,
	fallbackRoute = '/login',
}) => {
	const [accessDenied, setAccessDenied] = useState(null);
	const user = useRecoilValue(userState);

	useEffect(() => {
		setAccessDenied(
			adminRequired ? !user : isObj(user) && user.role !== 'admin'
		);
	}, [user]);

	return accessDenied === null ? (
		''
	) : accessDenied === false ? (
		<>{children}</>
	) : (
		<Navigate replace to={fallbackRoute} />
	);
};

export default AuthRequired;
