import { atom } from 'recoil';

const storageKey = 'vs-js-ramverk-3-cart-items';

const setStoredItems = items => {
	try {
		localStorage.setItem(storageKey, JSON.stringify(items));
	} catch (e) {
		console.error(e);
	}
};

const getStoredItems = () => {
	try {
		const storedItems = localStorage.getItem(storageKey);
		return storedItems ? JSON.parse(storedItems) : null;
	} catch (e) {
		console.error(e);
		return null;
	}
};

export default atom({
	key: 'ShoppingCart',
	default: [],
	effects: [
		({ setSelf, onSet }) => {
			const items = getStoredItems();
			items && setSelf(items);
			onSet(items => {
				setStoredItems(items);
			});
		},
	],
});
