import React from 'react';
import { isFn } from 'x-is-type';
import { classNames } from '../../utils';
import styles from './Button.module.css';
const Button = ({
	className,
	children,
	onClick,
	value,
	variant = 'default',
	type = 'button',
	disabled = false,
}) => {
	return (
		<button
			className={classNames(styles.btn, styles[variant], className)}
			type={type}
			value={value || null}
			onClick={e => isFn(onClick) && onClick(e)}
			disabled={disabled}
		>
			{children || 'Click me'}
		</button>
	);
};

export default Button;
