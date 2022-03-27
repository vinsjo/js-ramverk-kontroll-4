import React from 'react';
import { isFn } from 'x-is-type';
import { classNames } from '../../utils';
import styles from './Popup.module.css';

const Popup = ({ children, show, onClick }) => {
	return (
		<div
			onClick={() => isFn(onClick) && onClick()}
			className={classNames(styles.popup, show ? styles.show : null)}
		>
			{children}
		</div>
	);
};

export default Popup;
