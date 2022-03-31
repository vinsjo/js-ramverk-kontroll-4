import { selector } from 'recoil';
import productsState from '../products/atom';
import filterState from './/atom';

const filteredProductsState = selector({
	key: 'FilteredProductsState',
	get: ({ get }) => {
		const products = get(productsState);
		const filter = get(filterState);
		console.log('filter: ', filter.cat);
		return !filter.cat.length
			? products
			: products.filter(product => filter.cat.includes(product.category));
	},
});

export default filteredProductsState;
