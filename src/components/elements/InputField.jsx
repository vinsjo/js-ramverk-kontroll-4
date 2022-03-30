import React, { useState, useEffect } from 'react';
import { isFn, isNum } from 'x-is-type';
import { classNames } from '../../utils';
import styles from './InputField.module.css';

const inputTypes = ['text', 'password', 'email'];

const InputField = ({
	value,
	id,
	label,
	onChange,
	minLength,
	maxLength,
	placeholder,
	className,
	dataKey,
	required = false,
	disabled = false,
	type = 'text',
}) => {
	const [input, setInput] = useState(value || '');

	const handleChange = ({ target: { value } }) => setInput(value);

	useEffect(() => {
		isFn(onChange) && onChange(input, dataKey);
	}, [input]);

	return (
		<div className={styles.container}>
			{label ? (
				<label
					htmlFor={id}
					className={classNames(
						styles.label,
						disabled ? styles.disabled : null,
						required ? styles.required : null
					)}
				>
					{label}
				</label>
			) : (
				''
			)}
			<input
				id={id}
				className={classNames(styles.input, className)}
				value={input}
				type={inputTypes.includes(type) ? type : 'text'}
				onChange={handleChange}
				minLength={minLength}
				maxLength={maxLength}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
			/>
		</div>
	);
};

export default InputField;
