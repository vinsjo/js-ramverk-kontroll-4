import React, { useState, useCallback } from 'react';
import { Button, InputField } from './elements';
import { useAuth } from '../hooks';
import styles from './LoginForm.module.css';

const initialInput = { username: '', password: '' };

const LoginForm = ({ onSubmit }) => {
	const auth = useAuth();
	const [input, setInput] = useState(initialInput);
	const resetInput = () => setInput({ ...initialInput });

	const handleSubmit = e => {
		e.preventDefault();
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
				{Object.keys(input).map(key => {
					return (
						<InputField
							key={`input-${key}`}
							value={input[key]}
							placeholder={key}
							dataKey={key}
							onChange={handleInput}
							type={key === 'password' ? key : 'text'}
						/>
					);
				})}
				<Button type="submit" className={styles.btn}>
					Login
				</Button>
			</form>
		</div>
	);
};

export default LoginForm;
