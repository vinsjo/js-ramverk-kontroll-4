import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import authState from '../stores/auth/atom';
import axios from 'axios';

const useAuth = () => {
	const [auth, setAuth] = useRecoilState(authState);
	const [user, setUser] = useState(null);

	const [isAuthorized, setIsAuthorized] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		const isAuth = auth && auth.token;
		setIsAuthorized(isAuth);
		if (!isAuth) return;
		const controller = new AbortController();
		axios
			.get(`https://k4backend.osuka.dev/users/${auth.userId}`, {
				signal: controller.signal,
			})
			.then(res => setUser(res.data))
			.catch(e => console.log(e));
		return () => controller.abort();
	}, [auth]);

	useEffect(() => {
		setIsAdmin(user && user.role === 'admin');
	}, [user]);

	/**
	 * @param {{username: String, password: string}} data
	 */
	const login = data => {
		const controller = new AbortController();
		axios
			.post('https://k4backend.osuka.dev/auth/login/', {
				...data,
				signal: controller.signal,
			})
			.then(res => setAuth(res.data))
			.catch(e => console.log(e.type));
		return () => controller.abort();
	};

	const logout = () => setAuth(null);

	return {
		isAuthorized,
		isAdmin,
		user,
		login,
		logout,
	};
};

export default useAuth;
