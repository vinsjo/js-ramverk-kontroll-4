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
	const setItemCount = (product, count) => {
		const i = cart.findIndex(item => item.product.id === product.id);
		if (i < 0) return;
		if (count <= 0 || isNaN(count)) {
			return setCart(removeItemAtIndex(cart, i));
		}
		setCart(replaceItemAtIndex(cart, i, { ...cart[i], count: count }));
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
		setCart([...cart, createCartItem(id)]);
	};

	return {
		items: cart,
		get count() {
			return cart.reduce((total, item) => total + item.count, 0);
		},
		get totalPrice() {
			return cart.reduce(
				(total, item) => total + item.product.price * item.count,
				0
			);
		},
		addItem,
		setItemCount,
		getItemCount,
		getItemTotal: product => getItemCount(product) * product.price,
		empty: () => setCart([]),
	};
};

export default useCart;
