import { atom } from 'recoil';

const filterState = atom({
	key: 'FilterState',
	default: { cat: [] },
});

export default filterState;
