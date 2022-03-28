import { atom } from 'recoil';
import axios from 'axios';

const productsState = atom({
	key: 'ProductsState',
	default: [],
	effects: [
		({ setSelf }) => {
			axios
				.get('https://k4backend.osuka.dev/products')
				.then(res => setSelf(res.data))
				.catch(e => console.error(e));
		},
	],
});

export default productsState;
