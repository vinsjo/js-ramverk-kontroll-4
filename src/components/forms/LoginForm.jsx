import React, { useState, useCallback } from 'react';
import { Button, InputField, PasswordField } from '../elements';
import { useAuth } from '../../hooks';
import styles from './LoginForm.module.css';

const initialInput = { username: '', password: '' };

const LoginForm = () => {
	const auth = useAuth();
	const [input, setInput] = useState(initialInput);
	const resetInput = () => setInput({ ...initialInput });

	const handleSubmit = e => {
		e.preventDefault();
		console.log(input);
		auth.login(input);
		resetInput();
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
