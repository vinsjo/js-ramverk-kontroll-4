import React, { useState, useEffect } from 'react';
import Button from './Button';
import {
	IoIosCheckmarkCircleOutline,
	IoIosRadioButtonOff,
} from 'react-icons/io';
import { classNames } from '../../../utils';
import styles from './CheckButton.module.css';

const CheckButton = ({
	children,
	className,
	onClick,
	title,
	checked = false,
	disabled = false,
}) => {
	return (
		<Button
			className={classNames(
				styles.btn,
				checked ? styles.checked : null,
				className
			)}
			title={title}
			variant="check"
			type="button"
			disabled={disabled}
			onClick={onClick}
		>
			{children}
			<div className={styles['icon-container']}>
				{checked ? (
					<IoIosCheckmarkCircleOutline />
				) : (
					<IoIosRadioButtonOff />
				)}
			</div>
		</Button>
	);
};

export default CheckButton;
