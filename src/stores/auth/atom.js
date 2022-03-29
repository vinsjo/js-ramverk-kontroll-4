import { atom } from 'recoil';

const authState = atom({
	key: 'AuthState',
	default: { token: null, userId: null },
});

export default authState;
