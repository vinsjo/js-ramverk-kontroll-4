import { useRecoilState } from 'recoil';
import { isStr } from 'x-is-type';
import productsState from '../stores/products/atom';

const useProducts = () => {
	const [products, setProducts] = useRecoilState(productsState);

	const getProduct = id => {
		return products.find(
			product => id === (isStr(id) ? product.id.toString() : product.id)
		);
	};
	return {
		products,
		getProduct,
	};
};

export default useProducts;
