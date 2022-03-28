import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import authState from '../stores/auth/atom';
import axios from 'axios';

// username: "mor_2314",
// password: "83r5^_"

const useAuth = () => {
	const [auth, setAuth] = useRecoilState(authState);
	const [user, setUser] = useState(null);

	const isAuthorized = () => auth && auth.token;

	/**
	 * @param {{username: String, password: string}} data
	 */
	const login = data => {
		axios
			.post('https://k4backend.osuka.dev/auth/login/', data)
			.then(res => setAuth(res.data))
			.catch(() => console.log('Failed login :('));
	};
	const logout = () => setAuth(null);

	useEffect(() => {
		if (!isAuthorized()) return setUser(null);

		axios
			.get(`https://k4backend.osuka.dev/users/${auth.userId}`)
			.then(res => setUser(res.data))
			.catch(() => console.log('Failed getting user data :('));
	}, [auth]);

	return {
		get isAuthorized() {
			return auth && auth.token;
		},
		get isAdmin() {
			return user && user.role === 'admin';
		},
		get userId() {
			return !auth ? null : auth.userId;
		},
		login,
		logout,
	};
};

export default useAuth;
