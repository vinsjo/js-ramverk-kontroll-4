import React from 'react';
import { useRecoilValue } from 'recoil';
import { Button } from '../components/elements';
import { isNum, isObj, isStr } from 'x-is-type';
import useAuth from '../hooks/useAuth';
import AuthRequired from '../components/containers/AuthRequired';
import userState from '../stores/user/atom';

const Profile = () => {
	const auth = useAuth();
	const user = useRecoilValue(userState);

	const renderUser = () => {
		function iterateObj(obj, baseKey = '') {
			return Object.entries(obj).map(([key, value]) => {
				if (isObj(value)) return iterateObj(value, key);
				return isStr(value) || isNum(value) ? (
					<p key={`${baseKey}${key}`}>
						{key}: {value}
					</p>
				) : (
					''
				);
			});
		}
		if (!user) return 'No User Data';
		return iterateObj(user);
	};

	return (
		<AuthRequired>
			<div>{renderUser()}</div>
			<Button onClick={() => auth.logout()}>Log out</Button>
		</AuthRequired>
	);
};

export default Profile;
