import React, { useState } from 'react';
import InputField from './InputField';
import Button from '../buttons/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { classNames } from '../../../utils';
import styles from './PasswordField.module.css';

const PasswordField = ({
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
}) => {
	const [showInput, setShowInput] = useState(false);
	return (
		<InputField
			id={id}
			className={classNames(styles.input, className)}
			value={value}
			label={label}
			type={showInput ? 'text' : 'password'}
			onChange={onChange}
			dataKey={dataKey}
			minLength={minLength}
			maxLength={maxLength}
			placeholder={placeholder}
			required={required}
			disabled={disabled}
		>
			<Button
				variant="icon"
				className={styles.toggle}
				onClick={() => setShowInput(!showInput)}
				title={showInput ? 'Hide password' : 'Show password'}
			>
				{showInput ? <IoMdEyeOff /> : <IoMdEye />}
			</Button>
		</InputField>
	);
};

export default PasswordField;
