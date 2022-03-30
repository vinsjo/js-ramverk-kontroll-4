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
const flatten = userData => {
	const { name, address, ...rest } = userData;
	return { ...rest, ...name, ...address };
};

/**
 *
 * @param {{id: String | Number, email: String, username: String, password: String, firstname: String, lastname: String, city: String, street: String, zipcode: String, number: Number, phone: String}} flatUserData
 * @returns {{id: String | Number, email: String, username: String, password: String, name: {firstname: String, lastname: String}, address: {city: String, street: String, zipcode: String, number: Number}, phone: String}}
 */
const unflatten = flatUserData => {
	const { firstname, lastname, city, street, number, zipcode, ...rest } =
		flatUserData;
	return {
		...rest,
		name: { firstname, lastname },
		address: { city, street, number, zipcode },
	};
};

export { template, flatten, unflatten };
