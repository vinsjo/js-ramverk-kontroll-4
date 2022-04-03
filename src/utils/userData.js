import { flattenObj, unflattenObj } from './misc';

const template = () => ({
	email: '',
	username: '',
	password: '',
	name: {
		firstname: '',
		lastname: '',
	},
	address: {
		city: '',
		street: '',
		number: 0,
		zipcode: '',
	},
	phone: '',
});

/**
 * @param {{id: String | Number, email: String, username: String, password: String, name: {firstname: String, lastname: String}, address: {city: String, street: String, zipcode: String, number: Number}, phone: String}}   userData
 * @returns {{id: String | Number, email: String, username: String, password: String, firstname: String, lastname: String, city: String, street: String, zipcode: String, number: Number, phone: String}}
 */
const flatten = userData => flattenObj(userData);

/**
 *
 * @param {{id: String | Number, email: String, username: String, password: String, firstname: String, lastname: String, city: String, street: String, zipcode: String, number: Number, phone: String}} flatUserData
 * @returns {{id: String | Number, email: String, username: String, password: String, name: {firstname: String, lastname: String}, address: {city: String, street: String, zipcode: String, number: Number}, phone: String}}
 */
const unflatten = flatUserData => unflattenObj(flatUserData, template());

export { template, flatten, unflatten };
