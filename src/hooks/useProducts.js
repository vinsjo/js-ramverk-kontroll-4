import { useRecoilState } from 'recoil';
import { isStr } from 'x-is-type';
import productsState from '../stores/products/atom';

const useProducts = () => {
	const [products, setProducts] = useRecoilState(productsState);

	const getProduct = id => {
		return products.find(product => product.id === id) || null;
	};

	const getProductPrice = id => {
		const product = getProduct(id);
		return !product ? 0 : product.price;
	};
	return {
		get: () => products,
		getProduct,
		getProductPrice,
	};
	return [products, { getProduct, getProductPrice }];
};

export default useProducts;
