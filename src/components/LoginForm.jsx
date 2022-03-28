import React, { useState } from 'react';
import { Button } from './elements';
import { isFn } from 'x-is-type';

const LoginForm = ({ onSubmit }) => {
	const [userInput, setUserInput] = useState('');
	const [pwInput, setPwInput] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		isFn(onSubmit) && onSubmit({ username: userInput, password: pwInput });
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={userInput}
				onChange={({ target: { value } }) => setUserInput(value)}
				required
			/>
			<input
				type="password"
				value={pwInput}
				onChange={({ target: { value } }) => setPwInput(value)}
				required
			/>
			<Button type="submit">Login</Button>
		</form>
	);
};

export default LoginForm;
