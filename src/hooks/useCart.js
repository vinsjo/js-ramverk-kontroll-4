import { useRecoilState } from 'recoil';
import cartState from '../recoil/cart/atom';
import { replaceItemAtIndex, removeItemAtIndex } from '../utils';

const createCartItem = product => ({ product, count: 1 });

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
	const getItemCount = product => {
		const item = cart.find(item => item.product.id === product.id);
		return !item ? 0 : item.count;
	};
	/**
	 * @param {Object} product
	 */
	const addItem = product => {
		const count = getItemCount(product);
		if (!count) return setCart([...cart, createCartItem(product)]);
		setItemCount(product, count + 1);
	};

	return {
		items: cart,
		get count() {
			const count = cart.reduce((total, item) => total + item.count, 0);
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
