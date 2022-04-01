import React, { useState, useEffect } from 'react';
import Button from './Button';
import styles from './BurgerButton.module.css';
import { classNames } from '../../../utils';

const BurgerButton = ({ className, title, onClick, open = false }) => {
	return (
		<Button
			className={classNames(
				styles.btn,
				open ? styles.open : null,
				className
			)}
			variant="icon"
			title={title}
			onClick={onClick}
		>
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect y="4" width="32" height="4" />
				<rect y="14" width="32" height="4" />
				<rect y="24" width="32" height="4" />
			</svg>
		</Button>
	);
};

export default BurgerButton;
