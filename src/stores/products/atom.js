import { atom } from 'recoil';
import { getAllProducts } from '../../utils/api';

const productsState = atom({
	key: 'ProductsState',
	default: [],
	effects: [
		({ setSelf, resetSelf }) => {
			getAllProducts()
				.then(res => setSelf(res.data))
				.catch(e => {
					console.error(e);
					resetSelf();
				});
		},
	],
});

export default productsState;
