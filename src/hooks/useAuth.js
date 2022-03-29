import { useCallback, useEffect } from 'react';
import {
	useRecoilCallback,
	useRecoilState,
	useResetRecoilState,
	useSetRecoilState,
} from 'recoil';
import userState from '../stores/user/atom';
import authState from '../stores/auth/atom';
import axios from 'axios';
import { isObj, isUndef } from 'x-is-type';

const useAuth = () => {
	const [auth, setAuth] = useRecoilState(authState);
	const resetAuth = useResetRecoilState(authState);

	const setUser = useSetRecoilState(userState);
	const resetUser = useResetRecoilState(userState);

	const validAuth = auth => isObj(auth) && !isUndef(auth.token, auth.userId);

	/**
	 * @param {{username: String, password: string}} data
	 */
	const login = async data => {
		try {
			const res = await axios.post(
				'https://k4backend.osuka.dev/auth/login/',
				data
			);
			if (!validAuth(res.data)) throw 'Login failed';
			setAuth(res.data);
		} catch (e) {
			console.log(e);
			resetAuth();
		}
	};
	const isAuthorized = () => validAuth(auth);

	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			try {
				const res = await axios.get(
					`https://k4backend.osuka.dev/users/${auth.userId}`,
					{ signal: controller.signal }
				);
				if (res.data.error) throw 'Failed getting user data';
				const { password, ...user } = res.data;
				setUser(user);
			} catch (e) {
				if (!axios.isCancel(e)) console.log(e);
				resetUser();
			}
		})();
		return () => controller.abort();
	}, [auth.token, auth.userId]);

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
