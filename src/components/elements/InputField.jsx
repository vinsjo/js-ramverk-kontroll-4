import React, { useState } from 'react';
import { isFn } from 'x-is-type';
import { classNames } from '../../utils';
import styles from './InputField.module.css';

const InputField = ({
	value,
	onChange,
	minLength,
	maxLength,
	required,
	placeholder,
	className,
	dataKey,
	type = 'text',
}) => {
	const [input, setInput] = useState(value || '');

	const handleChange = ({ target }) => {
		const { value } = target;
		setInput(value);
		isFn(onChange) && onChange(value, dataKey);
	};
	return (
		<input
			className={classNames(styles.input, className)}
			value={input}
			type={type}
			onChange={handleChange}
			minLength={minLength}
			maxLength={maxLength}
			placeholder={placeholder}
			required={required}
		/>
	);
};

export default InputField;
