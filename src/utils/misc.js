import { isFloat, isInt, isObj, isUndef } from 'x-is-type';

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
 * @param {Array} arr
 * @param {*} item
 */
const toggleArrayItem = (arr, item) => {
	const i = arr.indexOf(item);
	return i < 0 ? [...arr, item] : removeItemAtIndex(arr, i);
};
/**
 * @param {Array} arr
 * @param {*} item
 * @param {Function} findIndexCallback
 */
const replaceArrayItem = (arr, item, findIndexCallback) => {
	const i = arr.findIndex(findIndexCallback);
	return i < 0 ? arr : replaceItemAtIndex(arr, i, item);
};

/**
 * @param {Object}} obj
 * @param {Number} level
 * @param {Number} maxLevel
 */
function flattenObj(obj, level = 0, maxLevel = 3) {
	// if (!isObj(obj)) return {};
	return Object.entries(obj).reduce((output, [key, value]) => {
		if (isObj(value)) {
			return level > maxLevel
				? output
				: { ...output, ...flattenObj(value, level + 1) };
		}
		return { ...output, [key]: value };
	}, {});
}
/**
 * @param {Object} flatObj
 * @param {Object} template
 */
function unflattenObj(flatObj, template) {
	// if (!isObj(flatObj)) return isObj(template) ? template : {};
	// if (!isObj(template)) return isObj(flatObj) ? flatObj : {};

	return Object.entries(template).reduce((output, [key, value]) => {
		if (isObj(value)) {
			return {
				...output,
				[key]: { ...unflattenObj(flatObj, template[key]) },
			};
		}
		return flatObj.hasOwnProperty(key) && !output.hasOwnProperty(key)
			? { ...output, [key]: flatObj[key] }
			: output;
	}, {});
}

export {
	formatPrice,
	classNames,
	replaceItemAtIndex,
	removeItemAtIndex,
	toggleArrayItem,
	flattenObj,
	unflattenObj,
};
