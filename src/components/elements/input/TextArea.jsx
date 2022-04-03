import React from 'react';
import { isFn } from 'x-is-type';
import styles from './TextArea.module.css';

const TextArea = ({
	containerClassName,
	id,
	value,
	onChange,
	label,
	columns = 30,
	rows = 5,
}) => {
	return (
		<div className={containerClassName}>
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
			)}
			<textarea
				className={styles.input}
				value={value}
				onChange={e => isFn(onChange) && onChange(e.target.value)}
				columns={columns}
				rows={rows}
			/>
		</div>
	);
};

export default TextArea;
