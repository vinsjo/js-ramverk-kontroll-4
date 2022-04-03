import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import userState from '../stores/user/atom';
import authState from '../stores/auth/atom';
import axios from 'axios';
import { isObj } from 'x-is-type';
import { api } from '../utils';

const useAuth = () => {
	const [auth, setAuth] = useRecoilState(authState);
	const resetAuth = useResetRecoilState(authState);

	const setUser = useSetRecoilState(userState);
	const resetUser = useResetRecoilState(userState);

	const validAuth = auth => !!(isObj(auth) && auth.token && auth.userId);
	const isAuthorized = () => validAuth(auth);

	/**
	 * @param {{username: String, password: string}} inputData
	 */
	const login = async inputData => {
		try {
			const { username, password } = inputData;
			const res = await api.login({ username, password });
			if (!validAuth(res.data)) throw 'Login failed';
			setAuth(res.data);
		} catch (e) {
			console.log(e);
			resetAuth();
		}
	};

	useEffect(() => {
		if (!isAuthorized()) {
			resetUser();
			return;
		}
		const controller = new AbortController();
		(async () => {
			try {
				const res = await api.getUser(auth.userId, controller);
				if (res.data.error) throw 'Failed getting user data';
				const { __v, ...user } = res.data;
				setUser(user);
			} catch (e) {
				if (!axios.isCancel(e)) console.log(e);
				resetUser();
			}
		})();
		return () => controller.abort();
	}, [auth]);

	return {
		...auth,
		isAuthorized,
		login,
		logout: () => {
			resetAuth();
			resetUser();
		},
	};
};

export default useAuth;
