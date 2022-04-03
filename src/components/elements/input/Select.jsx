import React from 'react';
import { isFn } from 'x-is-type';
import { classNames } from '../../../utils';
import styles from './Select.module.css';
const Select = ({
	containerClassName,
	options,
	value,
	label,
	id,
	onChange,
	disabled = false,
}) => {
	return (
		<div className={classNames(styles.container, containerClassName)}>
			{label && (
				<label
					htmlFor={id}
					className={classNames(
						styles.label,
						disabled ? styles.disabled : null
					)}
				>
					{label}
				</label>
			)}
			<select
				className={styles.select}
				onChange={e => isFn(onChange) && onChange(e.target.value)}
				value={value}
				disabled={disabled}
			>
				{options.map((opt, i) => {
					return (
						<option
							className={styles.option}
							key={`${id}-option-${i}`}
							value={opt}
						>
							{opt}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Select;
