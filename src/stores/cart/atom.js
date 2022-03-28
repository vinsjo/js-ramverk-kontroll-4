import { atom } from 'recoil';
import { getStoredItems, setStoredItems } from '../../utils';

const storageKey = 'vs-js-ramverk-3-cart-items';

const cartState = atom({
	key: 'ShoppingCart',
	default: [],
	effects: [
		({ setSelf, onSet }) => {
			const items = getStoredItems(storageKey);
			items && setSelf(items);
			onSet(items => {
				setStoredItems(storageKey, items);
			});
		},
	],
});

export default cartState;
