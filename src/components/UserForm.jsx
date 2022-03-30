import React, { useState, useCallback } from 'react';
import { isFn } from 'x-is-type';
import { userDataSchema } from '../utils/api';
import styles from './UserForm.module.css';
import { InputField, Button } from './elements';

const flattenUserData = userData => {
	const { name, address, ...rest } = userData;
	return { ...rest, ...name, ...address };
};

const unflattenUserData = userData => {
	const { firstname, lastname, city, street, number, zipcode, ...rest } =
		userData;
	return {
		...rest,
		name: { firstname, lastname },
		address: { city, street, number, zipcode },
	};
};

const UserForm = ({ onSubmit, userData, submitText = 'Submit' }) => {
	const [input, setInput] = useState(
		flattenUserData(userData || userDataSchema())
	);

	const handleInput = useCallback(
		(value, dataKey) => {
			setInput({ ...input, [dataKey]: value });
		},
		[input, setInput]
	);

	const handleSubmit = e => {
		e.preventDefault();
		isFn(onSubmit) && onSubmit(unflattenUserData(input));
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles['input-container']}>
				{Object.keys(input).map(key => {
					const id = `user-input-${key}`;

					const type =
						key === 'password' || key === 'email' ? key : 'text';
					return key === 'id' || key === 'role' ? (
						''
					) : (
						<InputField
							key={id}
							id={id}
							label={key}
							value={input[key]}
							placeholder={key}
							dataKey={key}
							onChange={handleInput}
							type={type}
							required
						/>
					);
				})}
			</div>
			<Button type="submit" className={styles.btn}>
				{submitText}
			</Button>
		</form>
	);
};

export default UserForm;
