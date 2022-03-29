import React, { useState } from 'react';
import { Button, InputField } from './elements';
import { isFn } from 'x-is-type';
import styles from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
	const [input, setInput] = useState({ username: '', password: '' });
	const handleSubmit = e => {
		e.preventDefault();
		isFn(onSubmit) && onSubmit(input);
	};
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputField
				value={input.username}
				placeholder="Username"
				onChange={username => setInput({ ...input, username })}
				required
			/>
			<InputField
				type="password"
				value={input.password}
				placeholder="Password"
				onChange={password => setInput({ ...input, password })}
				required
			/>
			<Button type="submit" className={styles.btn}>
				Login
			</Button>
		</form>
	);
};

export default LoginForm;
