import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AuthRequired = ({
	children,
	adminRequired = false,
	fallbackPath = '/login',
}) => {
	const [shouldRedirect, setShouldRedirect] = useState(true);

	const auth = useAuth();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (
			pathname === fallbackPath ||
			(!adminRequired && auth.isAuthorized) ||
			(adminRequired && auth.isAdmin)
		) {
			return setShouldRedirect(false);
		}
		navigate(fallbackPath);
	}, []);

	return <>{shouldRedirect ? '' : children}</>;
};

export default AuthRequired;
