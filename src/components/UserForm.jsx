import React, { useState, useCallback } from 'react';
import { isFn } from 'x-is-type';
import { userData } from '../utils';
import styles from './UserForm.module.css';
import { InputField, Button } from './elements';

const UserForm = ({ onSubmit, data, submitText = 'Submit' }) => {
	const [input, setInput] = useState(
		userData.flatten(data || userData.template())
	);

	const handleInput = useCallback(
		(value, dataKey) => {
			setInput({ ...input, [dataKey]: value });
		},
		[input, setInput]
	);

	const handleSubmit = e => {
		e.preventDefault();
		isFn(onSubmit) && onSubmit(userData.unflatten(input));
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles['input-container']}>
				{Object.keys(input).map(key => {
					const id = `input-${key}`;
					const type = ['password', 'email', 'number'].includes(key)
						? key
						: 'text';
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
