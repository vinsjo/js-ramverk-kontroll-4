import { useRecoilState } from 'recoil';
import { isObj, isStr } from 'x-is-type';
import productsState from '../stores/products/atom';
import { api, removeItemAtIndex, replaceItemAtIndex } from '../utils';

const useProducts = () => {
	const [products, setProducts] = useRecoilState(productsState);

	const getProduct = id => {
		return products.find(
			product => id === (isStr(id) ? product.id.toString() : product.id)
		);
	};
	const updateProduct = async data => {
		if (!isObj(data)) return;
		const i = products.findIndex(({ id }) => id === data.id);
		if (i < 0) return;
		try {
			const res = await api.updateProduct(data);
			if (!res || !res.data) return;
			setProducts(
				replaceItemAtIndex(products, i, {
					...products[i],
					...res.data,
				})
			);
		} catch (e) {
			console.log(e);
		}
	};
	const deleteProduct = async productId => {
		const i = products.findIndex(({ id }) => id === productId);
		if (i < 0) return;
		try {
			const res = await api.deleteProduct(productId);
			if (!res || !res.data) return;
			setProducts(removeItemAtIndex(products, i));
		} catch (e) {
			console.error(e);
		}
	};
	return {
		products,
		getProduct,
		updateProduct,
		deleteProduct,
	};
};

export default useProducts;
