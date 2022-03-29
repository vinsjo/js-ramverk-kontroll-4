import { useState, useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import authState from '../stores/auth/atom';
import axios from 'axios';
import { isObj, isUndef } from 'x-is-type';

const useAuth = () => {
	const [auth, setAuth] = useRecoilState(authState);
	const resetAuth = useResetRecoilState(authState);

	const validAuth = auth => isObj(auth) && !isUndef(auth.token, auth.userId);

	/**
	 * @param {{username: String, password: string}} data
	 */
	const login = data => {
		axios
			.post('https://k4backend.osuka.dev/auth/login/', data)
			.then(res =>
				validAuth(res.data) ? setAuth(res.data) : resetAuth()
			)
			.catch(e => console.log(e.type));
	};

	const getUser = async () => {
		try {
			if (!validAuth(auth)) throw 'User is not authorized';
			const res = await axios.get(
				`https://k4backend.osuka.dev/users/${auth.userId}`
			);
			return res.data;
		} catch (e) {
			console.log(e);
			return null;
		}
	};

	const isAuthorized = () => validAuth(auth);

	return {
		...auth,
		isAuthorized,
		getUser,
		login,
		logout: () => resetAuth(),
	};
};

export default useAuth;
