import React, { useState, useEffect, useCallback } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { isFn, isNum } from 'x-is-type';
import { classNames } from '../../utils';
import Button from './buttons/Button';
import styles from './NumberInput.module.css';

const NumberInput = ({
	className,
	onChange,
	min,
	max,
	maxLength = 6,
	initialValue = 0,
	integerValues = true,
}) => {
	const [inputValue, setInputValue] = useState(initialValue);
	const [outputValue, setOutputValue] = useState(initialValue);

	const setValue = useCallback(
		value => {
			if (!isNum(value)) return;
			if (isNum(min) && value < min) value = min;
			if (isNum(max) && value > max) value = max;
			setOutputValue(value);
		},
		[inputValue, setInputValue, outputValue, setOutputValue]
	);

	useEffect(() => {
		setInputValue(outputValue);
		if (isFn(onChange)) onChange(outputValue);
	}, [outputValue]);

	const parseInput = value => {
		return integerValues ? parseInt(value) : parseFloat(value);
	};

	const handleInputBlur = () => {
		if (!isNum(inputValue)) return setInputValue(outputValue);
		if (parseInput(inputValue) === outputValue) return;
		setValue(inputValue);
	};

	const handleInputChange = ({ target: { value } }) => {
		const num = parseInput(value);
		setInputValue(isNum(num) ? num : '');
	};

	return (
		<div className={classNames(styles.container, className)}>
			<Button
				variant="icon"
				className={styles.btn}
				onClick={() => setValue(outputValue - 1)}
			>
				<IoMdRemove />
			</Button>
			<form
				onSubmit={e => {
					e.preventDefault();
					handleInputBlur();
				}}
			>
				<input
					className={styles.input}
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
					maxLength={maxLength}
				/>
			</form>

			<Button
				variant="icon"
				className={styles.btn}
				onClick={() => setValue(outputValue + 1)}
			>
				<IoMdAdd />
			</Button>
		</div>
	);
};

export default NumberInput;
