import { useRecoilState, useRecoilValue } from 'recoil';
import cartState from '../stores/cart/atom';
import { replaceItemAtIndex, removeItemAtIndex } from '../utils';

const createCartItem = id => ({ id, count: 1 });

const useCart = () => {
	const [cart, setCart] = useRecoilState(cartState);

	/**
	 * @param {Object} product
	 * @param {Number} count
	 */
	const setItemCount = (id, count) => {
		setCart(
			cart
				.map(item => (item.id === id ? { ...item, count } : item))
				.filter(({ count }) => count > 0)
		);
	};
	/**
	 * @param {Object} product
	 */
	const getItemCount = id => {
		const item = cart.find(item => item.id === id);
		return !item ? 0 : item.count;
	};
	/**
	 * @param {Object} product
	 */
	const addItem = id => {
		const count = getItemCount(id);
		if (count > 0) return setItemCount(id, count + 1);
		setCart([...cart, { id, count: 1 }]);
	};

	return {
		items: cart,
		get count() {
			return cart.reduce((total, item) => total + item.count, 0);
		},
		addItem,
		setItemCount,
		getItemCount,
		empty: () => setCart([]),
	};
};

export default useCart;
