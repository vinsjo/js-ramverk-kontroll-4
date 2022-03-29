import React, { useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { isObj } from 'x-is-type';

const AuthRequired = ({
	children,
	adminRequired = false,
	fallbackRoute = '/login',
}) => {
	const [accessDenied, setAccessDenied] = useState(null);
	const user = useContext(UserContext);

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
