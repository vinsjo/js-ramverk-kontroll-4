import { atom } from 'recoil';

const authState = atom({
	key: 'AuthState',
	default: null,
});

export default authState;
