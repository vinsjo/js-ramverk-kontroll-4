import React, { useState, useCallback } from 'react';
import { Button, InputField, PasswordField } from '../elements';
import { useAuth } from '../../hooks';
import styles from './LoginForm.module.css';
import { isFn } from 'x-is-type';

const initialInput = { username: '', password: '' };

const LoginForm = ({ onSubmit }) => {
	const [input, setInput] = useState({ ...initialInput });

	const handleSubmit = e => {
		e.preventDefault();
		isFn(onSubmit) && onSubmit(input);
		setInput({ ...initialInput });
	};

	const handleInput = useCallback(
		(value, dataKey) => {
			setInput({ ...input, [dataKey]: value });
		},
		[input, setInput]
	);

	return (
		<div>
			<h2>Log In</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<InputField
					value={input.username}
					placeholder="username"
					dataKey="username"
					onChange={handleInput}
				/>
				<PasswordField
					value={input.password}
					placeholder="password"
					dataKey="password"
					onChange={handleInput}
				/>
				<Button type="submit" className={styles.btn}>
					Login
				</Button>
			</form>
		</div>
	);
};

export default LoginForm;
