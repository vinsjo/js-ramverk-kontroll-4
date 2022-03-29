import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const productsState = atom({
	key: 'ProductsState',
	default: [],
	effects: [
		({ setSelf, resetSelf }) => {
			axios
				.get('https://k4backend.osuka.dev/products')
				.then(res => setSelf(res.data))
				.catch(e => {
					console.error(e);
					resetSelf();
				});
		},
	],
});

export default productsState;
