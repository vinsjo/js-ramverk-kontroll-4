import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import UserContext from '../context/UserContext';
import authState from '../stores/auth/atom';
const UserProvider = ({ children }) => {
	const auth = useRecoilValue(authState);
	const [user, setUser] = useState(null);
	useEffect(() => {
		const { token, userId } = auth;
		if (!token || !userId) return setUser(null);
		const controller = new AbortController();
		axios
			.get(`https://k4backend.osuka.dev/users/${auth.userId}`, {
				signal: controller.signal,
			})
			.then(res => {
				const { password, ...user } = res.data;
				setUser(user);
			})
			.catch(e => console.log(e));
		return () => controller.abort();
	}, [auth.token, auth.userId]);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
