import React, { useState, useCallback } from 'react';
import { isFn } from 'x-is-type';
import { userData } from '../../utils';
import styles from './UserForm.module.css';
import { InputField, Button, PasswordField } from '../elements';

const UserForm = ({
	onSubmit,
	data,
	title,
	submitText = 'Submit',
	requireAll = true,
}) => {
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
			{title && <h3>{title}</h3>}
			<div className={styles['input-container']}>
				{Object.keys(input).map(key => {
					const id = `input-${key}`;
					return key === 'id' || key === 'role' ? (
						''
					) : key === 'password' ? (
						<PasswordField
							key={id}
							id={id}
							label={key}
							value={input[key]}
							placeholder={key}
							dataKey={key}
							onChange={handleInput}
							required={requireAll}
						/>
					) : (
						<InputField
							key={id}
							id={id}
							label={key}
							value={input[key]}
							placeholder={key}
							dataKey={key}
							onChange={handleInput}
							type={key}
							required={requireAll}
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
