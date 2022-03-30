/**
 * @param {String} storageKey
 * @param {Array|Object} items
 */
const setStoredItems = (storageKey, items) => {
	try {
		localStorage.setItem(storageKey, JSON.stringify(items));
	} catch (e) {
		console.error(e);
	}
};
/**
 * @param {String} storageKey
 */
const getStoredItems = storageKey => {
	try {
		const storedItems = localStorage.getItem(storageKey);
		return storedItems ? JSON.parse(storedItems) : null;
	} catch (e) {
		console.error(e);
		return null;
	}
};

export { getStoredItems, setStoredItems };
