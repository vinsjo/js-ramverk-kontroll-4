import { isFloat, isInt, isNum } from 'x-is-type';

/**
 * @param {Number} value
 * @param {String} currency
 */
const formatPrice = value => {
	return `${isFloat(value) ? value.toFixed(2) : value}`;
};

/**
 * @param  {...String} names
 */
const classNames = (...names) => {
	return names.filter(name => !!name).join(' ');
};

/*
 * Functions replaceItemAtIndex and removeItemAtIndex are based on functions
 * with the same name in Recoil's documentation/tutorial:
 * https://recoiljs.org/docs/basic-tutorial/atoms
 */

/**
 * @param {Array} arr
 * @param {Number} index
 * @param {any} value
 */
const replaceItemAtIndex = (arr, index, value) => {
	if (!isInt(index) || index < 0) return arr;
	return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
};
/**
 * @param {Array} arr
 * @param {Number} index
 */
const removeItemAtIndex = (arr, index) => {
	if (!isInt(index) || index < 0) return arr;
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

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

export {
	formatPrice,
	classNames,
	replaceItemAtIndex,
	removeItemAtIndex,
	getStoredItems,
	setStoredItems,
};
