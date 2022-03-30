import axios from 'axios';
import { isFn } from 'x-is-type';

const baseUrl = 'https://k4backend.osuka.dev';

const connect = async (
	path,
	options = {},
	controller = null,
	method = 'get'
) => {
	if (!isFn(axios[method])) return null;
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
const DELETE = makeRequester('delete');
const UPDATE = makeRequester('update');

/**
 * @param {{username: String, password: String}} data
 * @param {AbortController} [controller]
 * @returns
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
 * @param {{email: String, username: String, password: String, name: {firstname: String, lastname: String}, address: {city: String, street: String, zipcode: String}, phone: String}} data
 * @param {AbortController} [controller]
 */
const addUser = (data, controller) => {
	return POST('/users/', data, controller);
};
/**
 * @param {AbortController} [controller]
 */
const getAllProducts = controller => {
	return GET('/products/', {}, controller);
};

export { baseUrl, login, getUser, addUser, getAllUsers, getAllProducts };
