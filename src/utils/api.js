import axios from 'axios';
import { isFn } from 'x-is-type';

const baseUrl = 'https://k4backend.osuka.dev';

const connect = async (
	path,
	options = {},
	controller = null,
	method = 'get'
) => {
	// if (!isFn(axios[method])) return null;
	try {
		const opt = options || {};
		if (controller && controller instanceof AbortController) {
			options.signal = controller.signal;
		}
		return axios[method](new URL(path, baseUrl), opt);
	} catch (e) {
		console.error(e);

		return null;
	}
};

/**
 * @param {String} method
 */
const makeRequester = method => {
	/**
	 * @param {String} path
	 * @param {Object} [options]
	 * @param {AbortController} [controller]
	 */
	return (path, options, controller) =>
		connect(path, options, controller, method);
};

const GET = makeRequester('get');
const POST = makeRequester('post');
const PUT = makeRequester('put');

/**
 * @param {{username: String, password: String}} data
 * @param {AbortController} [controller]
 */
const login = (data, controller) => {
	return POST('/auth/login', data, controller);
};

/**
 * @param {String | Number} id
 * @param {AbortController} [controller]
 */
const getUser = (id, controller) => {
	return GET(`/users/${id}`, {}, controller);
};

/**
 * @param {AbortController} [controller]
 */
const getAllUsers = controller => {
	return GET(`/users/`, {}, controller);
};

/**
 * @param {{email: String, username: String, password: String, name: {firstname: String, lastname: String}, address: {city: String, street: String, zipcode: String, number: Number}, phone: String}} data
 * @param {AbortController} [controller]
 */
const addUser = (data, controller) => {
	return POST('/users/', data, controller);
};

/**
 * @param {{id: String | Number, email: String, username: String, password: String, name: {firstname: String, lastname: String}, address: {city: String, street: String, zipcode: String, number: Number}, phone: String}} data
 * @param {AbortController} [controller]
 */
const updateUser = (data, controller) => {
	console.log(data);
	return PUT(`/users/${data.id}`, data, controller);
};
/**
 * @param {AbortController} [controller]
 */
const getAllProducts = controller => {
	return GET('/products/', {}, controller);
};
/**
 * @param {AbortController} [controller]
 */
const getAllCarts = controller => {
	return GET('/carts/', {}, controller);
};

const getAllCategories = controller => {
	return GET('/products/categories', {}, controller);
};

export {
	baseUrl,
	login,
	getUser,
	addUser,
	updateUser,
	getAllUsers,
	getAllProducts,
	getAllCarts,
	getAllCategories,
};
